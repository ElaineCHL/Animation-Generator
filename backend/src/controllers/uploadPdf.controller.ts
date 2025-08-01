import pdfParse from "pdf-parse";
import { Request, Response } from "express";
import { AzureKeyCredential } from "@azure/core-auth";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import client from "../RAG/weaviateClient";

const token = process.env.GITHUB_TOKEN as string;
const endpoint = "https://models.github.ai/inference";
const modelName = "openai/text-embedding-3-small";

// Initi GitHub AI client
const aiClient = ModelClient(endpoint, new AzureKeyCredential(token));

export default async function PdfController(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const pdfBuffer = req.file?.buffer;
    if (!pdfBuffer) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    }

    // Parse PDF content
    const data = await pdfParse(pdfBuffer);
    const rawText = data.text;

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 500,
      chunkOverlap: 100,
    });

    // Split raw text into chunks
    const chunks = await splitter.createDocuments([rawText]);

    // Process each chunk and store in vector db
    for (const chunk of chunks) {
      // Generate embedding using GitHub AI
      const response = await aiClient.path("/embeddings").post({
        body: {
          input: [chunk.pageContent],
          model: modelName,
        },
      });

      if (isUnexpected(response)) {
        throw new Error(`GitHub AI API error: ${response.body.error}`);
      }

      const embedding = response.body.data[0].embedding;

      for (const item of response.body.data) {
        let length = item.embedding.length;
        console.log(
          `data[${item.index}]: length=${length}, ` +
            `[${item.embedding[0]}, ${item.embedding[1]}, ` +
            `..., ${item.embedding[length - 2]}, ${
              item.embedding[length - 1]
            }]`,
        );
      }
      console.log(response.body.usage);

      if (!Array.isArray(embedding)) {
        throw new Error("Invalid embedding format: expected number[]");
      }

      if (!req.file || !req.file.buffer) {
        res.status(400).json({ error: "No file uploaded" });
        return;
      }

      const title = req.file.originalname;
      const content = chunk.pageContent;

      // Store document chunk with embedding in Weaviate
      await client.data.creator()
        .withClassName("Document")
        .withProperties({
          title,
          content,
        })
        .withVector(embedding)
        .do();
    }
    res.status(200).json({
      message: "File processed and stored in Weaviate using embeddings.",
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.stack);
    }
    console.error("Failed to process file", err);

    res.status(500).json({
      error: `Failed to process file: ${
        err instanceof Error ? err.message : String(err)
      }`,
    });
  }
}
