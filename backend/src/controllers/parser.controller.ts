import { Request, Response } from "express";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { DSLLexer } from "../DSL/generated/DSLLexer";
import { DSLParser } from "../DSL/generated/DSLParser";
import { DSLToTSVisitor } from "../DSL/DSLToTSVisitor";
import { CustomErrorListener } from "../DSL/CustomErrorListener";
import { generateTTS } from "../util/gtts";

export default async function parseController(req: Request, res: Response) {
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
    const ttsText = visitor.ttsComments;
    const audioFiles = await generateTTS(ttsText);

    tokens.fill();

    res.json({
      success: true,
      code: generatedCode,
      tts: audioFiles,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      message: "Parse failed. " + err,
      stack: err instanceof Error ? err.stack : undefined,
    });
  }
};