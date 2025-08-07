import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { DSLVisitor } from "./DSLVisitor";
import {
  Animation_stmtContext,
  Block_stmtContext,
  ColorContext,
  DurationContext,
  Group_stmtContext,
  NumberContext,
  PositionContext,
  ScriptContext,
  Shape_stmtContext,
  SizeContext,
  Sleep_stmtContext,
  StatementContext,
  Tts_stmtContext,
} from "./generated/DSLParser";

export abstract class AbstractDSLVisitor<Result>
  extends AbstractParseTreeVisitor<Result>
  implements DSLVisitor<Result> {

  protected defaultResult(): Result {
    return undefined as unknown as Result;
  }

  visitScript(ctx: ScriptContext): Result {
    return this.visitChildren(ctx);
  }

  visitStatement(ctx: StatementContext): Result {
    return this.visitChildren(ctx);
  }

  visitShape_stmt(ctx: Shape_stmtContext): Result {
    return this.visitChildren(ctx);
  }

  visitAnimation_stmt(ctx: Animation_stmtContext): Result {
    return this.visitChildren(ctx);
  }
  
  visitBlock_stmt(ctx: Block_stmtContext): Result {
    return this.visitChildren(ctx);
  }

  visitPosition(ctx: PositionContext): Result {
    return this.visitChildren(ctx);
  }

  visitColor(ctx: ColorContext): Result {
    return this.visitChildren(ctx);
  }

  visitSize(ctx: SizeContext): Result {
    return this.visitChildren(ctx);
  }

  visitDuration(ctx: DurationContext): Result {
    return this.visitChildren(ctx);
  }

  visitNumber(ctx: NumberContext): Result {
    return this.visitChildren(ctx);
  }

  visitSleep_stmt(ctx: Sleep_stmtContext): Result {
    return this.visitChildren(ctx);
  }

  visitGroup_stmt(ctx: Group_stmtContext): Result {
    return this.visitChildren(ctx);
  }
 
  visitTts_stmt(ctx: Tts_stmtContext): Result {
    return this.visitChildren(ctx);
  }
}
