import {
  ANTLRErrorListener,
  Recognizer,
  RecognitionException,
} from "antlr4ts";

export class CustomErrorListener<T> implements ANTLRErrorListener<T> {
  syntaxError(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ): void {
    throw new Error(`line ${line}:${charPositionInLine} ${msg}`);
  }
}
