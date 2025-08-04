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
        properties: [
          {
            name: "content",
            dataType: ["text"],
            description: "Content of textbook chunk",
          },
          {
            name: "title",
            dataType: ["string"],
            description: "Title of textbook chunk",
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
