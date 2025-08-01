import weaviate, { ApiKey } from "weaviate-ts-client";

const client = weaviate.client({
  scheme: "https",
  host: process.env.WEAVIATE_CLUSTER_URL as string,
  apiKey: new ApiKey(process.env.WEAVIATE_API_KEY as string),
  headers: {
    "X-OpenAI-Api-Key": process.env.OPENAI_API_KEY as string,
  },
});

async function checkWeaviateReady() {
  try {
    const status = await client.misc.readyChecker().do();
    if (status === true) {
      console.log('✅ Weaviate is ready.');
    } else {
      console.log('⚠️ Weaviate is not ready.');
    }
  } catch (err) {
    console.error('❌ Failed to connect to Weaviate:', err);
  }
}

checkWeaviateReady();

export default client;
