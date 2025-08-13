import path from "path";
import fs from "fs";
import { isUnexpected, ModelClient } from "@azure-rest/ai-inference";
import { Index, Pinecone, RecordMetadata } from "@pinecone-database/pinecone";
import logger from "../util/logger";

export async function createPineconeIndex(
  pc: Pinecone,
  indexName: string,
  vectorDimension: number,
) {
  try {
    // Initiate index existence check
    logger.info(`Checking "${indexName}"...`);
    const existingIndexes = await pc.listIndexes();

    if (existingIndexes.indexes?.some((idx) => idx.name === indexName)) {
      logger.info(`Index "${indexName}" already exists.`);
    } else {
      // Create index
      logger.info(`Creating "${indexName}"...`);
      await pc.createIndex({
        name: indexName,
        dimension: vectorDimension,
        metric: "cosine",
        spec: {
          serverless: {
            cloud: "aws",
            region: "us-east-1",
          },
        },
        tags: {
          embedding_model: "text-embedding-3-small",
        },
      });
      logger.info(`✅ Index "${indexName}" created successfully!`);
    }
  } catch (error) {
    throw new Error(`❌ Error in createPineconeIndex: ${error}`);
  }
}

/**
 * Query Pinecone with a text question, then ask LLM to answer using top results
 */
export async function queryPineconeAndLLM(
  index: Index<RecordMetadata>,
  aiClient: ModelClient,
  embedding_model: string,
  question: string,
  queryModel: string,
) {
  try {
    // Get query embedding
    const embeddingResp = await aiClient.path("/embeddings").post({
      body: {
        input: [question],
        model: embedding_model,
      },
    });

    if (isUnexpected(embeddingResp)) {
      throw new Error(`❌ GitHub AI API error: ${embeddingResp.body.error}`);
    }

    const queryEmbedding = embeddingResp.body.data[0].embedding;

    // Search Pinecone
    const queryResult = await index.query({
      vector: queryEmbedding as number[],
      topK: 5,
      includeMetadata: true,
    });
    logger.debug(`🔍 Pinecone query results: ${JSON.stringify(queryResult)}`);

    // Build context from top results
    const contextText = queryResult.matches
      ?.map((match) => match.metadata?.text)
      .join("\n") || "";

    // Load system prompt
    const systemPromptPath = path.resolve(
      __dirname,
      "../assets/systemPrompt.txt",
    );
    const systemPrompt = fs.readFileSync(systemPromptPath, "utf-8");

    // query LLM with context
    const completionResp = await aiClient.path("/chat/completions").post({
      body: {
        model: queryModel,
        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content:
              `Answer the following question using only this context:\n${contextText}\n\nQuestion: ${question}`,
          },
        ],
      },
    });

    if (isUnexpected(completionResp)) {
      throw new Error(`GitHub AI API error: ${completionResp.body.error}`);
    }

    const answer = completionResp.body.choices[0].message.content;
    logger.debug(`💬 LLM Answer: ${answer}`);

    return answer;
  } catch (error) {
    throw new Error(`❌ Error in queryPineconeAndLLM: ${error}`);
  }
}
