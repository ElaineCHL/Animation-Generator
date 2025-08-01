import client from "./weaviateClient";

async function setupSchema() {
  const schemaRes = await client.schema.getter().do();
  const exists = schemaRes.classes?.some((c) => c.class === "Document");

  if (!exists) {
    await client.schema
      .classCreator()
      .withClass({
        class: "Document",
        description: "Chunks of textbook content for search",
        vectorizer: "text2vec-openai",
        moduleConfig: {
          "text2vec-openai": {
            "model": "ada",
            "modelVersion": "002",
            "type": "text",
            vectorizeClassName: false,
          },
        },
        properties: [
          {
            name: "content",
            dataType: ["text"],
            description: "content of textbook chunk",
            moduleConfig: {
              "text2vec-openai": {
                model: "ada",
                modelVersion: "002",
                type: "text",
                vectorizePropertyName: false,
              },
            },
          },
          {
            name: "title",
            dataType: ["string"],
            description: "title of textbook chunk",
          },
        ],
      })
      .do();

    console.log("✅ Weaviate schema created.");
  } else {
    console.log("ℹ️ Schema already exists.");
  }
}

setupSchema().catch(console.error);
