import { Request, Response } from "express";
import path from "path";
import fs from "fs";
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

const token = process.env["GITHUB_TOKEN"] || "";
const endpoint = "https://models.github.ai/inference";

export default async function promptController(req: Request, res: Response) {
  const { prompt, model } = req.body;
  const selectedModel = model || "openai/gpt-5";
  
  // Load system prompt
  const systemPromptPath = path.resolve(
    __dirname,
    "../assets/systemPrompt.txt",
  );
  const systemPrompt = fs.readFileSync(systemPromptPath, "utf-8");

  try {
    // Initialize Azure AI Inference client
    const client = ModelClient(endpoint, new AzureKeyCredential(token));

    const response = await client.path("/chat/completions").post({
      body: {
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
        model: selectedModel,
        temperature: 1,
        max_tokens: 4096,
        top_p: 1,
      },
    });

    if (isUnexpected(response)) {
      throw response.body.error;
    }

    res.json({ result: response.body.choices[0].message.content });
  } catch (err: any) {
    console.error("Azure AI Inference API error:", err);
    res.status(500).json({
      error: "Failed to get response from Azure AI Inference",
      message: err.message || "Unknown error",
    });
  }
}