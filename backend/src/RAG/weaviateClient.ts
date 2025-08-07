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

// import weaviate, { WeaviateClient } from 'weaviate-client';

// const weaviateURL = process.env.WEAVIATE_CLUSTER_URL as string;
// const weaviateApiKey = process.env.WEAVIATE_API_KEY as string;

// // Best practice: store your credentials as environment variables
// // WEAVIATE_URL       your Weaviate instance URL
// // WEAVIATE_API_KEY   your Weaviate instance API Key

// (async () => {
//   const client: WeaviateClient = await weaviate.connectToWeaviateCloud(weaviateURL, {
//     authCredentials: new weaviate.ApiKey(weaviateApiKey),
//   });

//   console.log("Client is ready?", await client.isReady());
// })();