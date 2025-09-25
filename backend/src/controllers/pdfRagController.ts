import pdfParse from "pdf-parse";
import { Request, Response } from "express";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { AzureKeyCredential } from "@azure/core-auth";
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { Pinecone } from "@pinecone-database/pinecone";
import logger from "../util/logger";
import Util from "../util/util";
import {
  createPineconeIndex,
  queryPineconeAndLLM,
} from "../RAG/pineconeHandler";

const { isEmptyString } = Util;

// === Azure/GitHub AI config ===
const token = process.env.GITHUB_TOKEN as string;
const endpoint = "https://models.github.ai/inference";
const embeddingModel = "openai/text-embedding-3-small";
const aiClient = ModelClient(endpoint, new AzureKeyCredential(token));

export default async function pdfRagController(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const pineconeClient = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY as string,
    });

    const indexName = "fyp-index"; // TODO: move this to another location
    const vectorDimenstion = 1536;
    await createPineconeIndex(pineconeClient, indexName, vectorDimenstion);
    const index = pineconeClient.Index(indexName);

    // parse request body
    const file = req.file;
    const { model: queryModel, prompt } = req.body;

    // input validation
    if (
      (!prompt || isEmptyString(prompt)) &&
      (!queryModel || isEmptyString(queryModel))
    ) {
      res.status(400).json({
        error: "'prompt' and 'model' cannot both be empty",
      });
    } else if (!prompt || isEmptyString(prompt)) {
      res.status(400).json({
        error: "'prompt' cannot be empty",
      });
    } else if (!queryModel || isEmptyString(queryModel)) {
      res.status(400).json({
        error: "'model' cannot be empty",
      });
    }

    // check if file is uploaded
    if (!file || !file.buffer) {
      logger.info("📂 No file uploaded.");
    } else {
      // parse PDF to text
      logger.info("📂 File uploaded — processing PDF...");

      const pdfData = await pdfParse(file.buffer);
      const rawText = pdfData.text;

      // Split into chunks
      const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
      const chunks = await splitter.createDocuments([rawText]);
      logger.info(`📄 PDF split into ${chunks.length} chunks.`);

      // Batch embeddings + upserts
      const batchSize = 50;
      for (let i = 0; i < chunks.length; i += batchSize) {
        const batch = chunks.slice(i, i + batchSize);

        // Generate embeddings for batch
        const embeddingResp = await aiClient.path("/embeddings").post({
          body: {
            input: batch.map((c) => c.pageContent),
            model: embeddingModel,
          },
        });

        if (isUnexpected(embeddingResp)) {
          throw new Error(`GitHub AI API error: ${embeddingResp.body.error}`);
        }

        // Format vectors for Pinecone
        const vectors = embeddingResp.body.data.map((item, idx) => {
          const values = item.embedding;
          if (
            !Array.isArray(values) ||
            !values.every((num) => typeof num === "number")
          ) {
            throw new Error("Invalid embedding format");
          }
          return {
            id: `${file?.originalname}-chunk-${i + idx}`,
            values: values as number[],
            metadata: { text: batch[idx].pageContent },
          };
        });

        // Upsert batch to Pinecone
        await index.upsert(vectors);
        logger.info(
          `✅ Upserted batch ${i / batchSize + 1} (${vectors.length} vectors)`,
        );
      }
    }

    const ans = await queryPineconeAndLLM(
      index,
      aiClient,
      embeddingModel,
      prompt,
      queryModel,
    );

    res.status(200).json({
      success: true,
      file_uploaded: req.file ? req.file.filename : false,
      result: ans,
      prompt,
      queryModel,
      embeddingModel,
    });
  } catch (err) {
    if (err instanceof Error) {
      logger.error(err.stack);
    }

    res.status(500).json({
      error: err instanceof Error ? err.message : String(err),
    });
    logger.info(`Done.`);
  }
}
