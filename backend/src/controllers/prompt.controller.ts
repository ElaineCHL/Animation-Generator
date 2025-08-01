import { Request, Response } from "express";
import path from "path";
import fs from "fs";
import OpenAI from "openai";


// Initialize OpenAI client with Azure endpoint
const client = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.OPENAI_API_KEY || "",
});

export default async function promptController(req: Request, res: Response) {
  const { prompt, model } = req.body;
  const selectedModel = model || "gpt-4o";
  
  // Load system prompt
  const systemPromptPath = path.resolve(__dirname, "../assets/systemPrompt.txt");
  const systemPrompt = fs.readFileSync(systemPromptPath, "utf-8");

  try {
    // Send chat completion request to OpenAI/Azure
    const response = await client.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt },
      ],
      model: selectedModel,
      temperature: 1,
      max_tokens: 4096,
      top_p: 1,
    });
    res.json({ result: response.choices[0].message.content });
  } catch (err: any) {
    console.error("OpenAI API error:", err);
    res.status(500).json({
      error: "Failed to get response from OpenAI",
      message: err.message || "Unknown error",
    });
  }
}