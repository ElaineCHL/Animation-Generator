import cors from "cors";
import bodyParser from "body-parser";
import OpenAI from "openai";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";
import express, { Request, Response } from "express";
import { CharStreams, CommonTokenStream } from "antlr4ts";

import { DSLLexer } from "../src/DSL/generated/DSLLexer";
import { DSLParser } from "../src/DSL/generated/DSLParser";
import { DSLToTSVisitor } from "../src/DSL/DSLToTSVisitor";
import { CustomErrorListener } from "../src/DSL/CustomErrorListener";

dotenv.config(); // load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // parse JSON bodies: req.body
app.use(bodyParser.text({ type: "text/plain" }));

app.post("/api/translate", (req, res) => {
  try {
    const data = req.body.data;
    const chars = CharStreams.fromString(data);
    const lexer = new DSLLexer(chars);
    lexer.removeErrorListeners();
    lexer.addErrorListener(new CustomErrorListener());

    const tokens = new CommonTokenStream(lexer);
    const parser = new DSLParser(tokens);
    parser.removeErrorListeners();
    parser.addErrorListener(new CustomErrorListener());

    const tree = parser.script();
    const visitor = new DSLToTSVisitor();
    const generatedCode = visitor.visit(tree);

    res.json({
      success: true,
      code: generatedCode,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      message: "Parse failed. " + err,
      stack: err instanceof Error ? err.stack : undefined,
    });
  }
});

const client = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.OPENAI_API_KEY || "",
});

app.post("/api/prompt", async (req: Request, res: Response) => {
  const { prompt, model } = req.body;
  const selectedModel = model || "gpt-4o";
  const systemPromptPath = path.resolve(__dirname, "./assets/systemPrompt.txt");
  const systemPrompt = fs.readFileSync(systemPromptPath, "utf-8");
  
  try {
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
});

app.listen(PORT, () => {
  console.log(`🚀 DSL-to-TypeScript API running at http://localhost:${PORT}`);
});
