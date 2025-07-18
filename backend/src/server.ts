import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import { CharStreams, CommonTokenStream } from "antlr4ts";

import { DSLLexer } from "../src/DSL/generated/DSLLexer";
import { DSLParser } from "../src/DSL/generated/DSLParser";
import { DSLToTSVisitor } from "../src/DSL/DSLToTSVisitor";
import { CustomErrorListener } from "../src/DSL/CustomErrorListener"
;
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // parse JSON bodies: req.body
app.use(bodyParser.text({ type: "text/plain" }));

app.post("/translate", (req, res) => {
  try {
    const data = req.body.data;

    console.log("data = " + data);

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

app.listen(PORT, () => {
  console.log(`🚀 DSL-to-TypeScript API running at http://localhost:${PORT}`);
});
