import { DSLVisitor } from "./DSLVisitor";
import {
  ScriptContext,
  Shape_stmtContext,
  Text_stmtContext,
  Animation_stmtContext,
  StatementContext,
  PositionContext,
  ColorContext,
  SizeContext,
  DurationContext,
  NumberContext
} from "./generated/DSLParser";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";

export abstract class DSLVisitorBase<Result> extends AbstractParseTreeVisitor<Result> implements DSLVisitor<Result> {
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
  visitText_stmt(ctx: Text_stmtContext): Result {
    return this.visitChildren(ctx);
  }
  visitAnimation_stmt(ctx: Animation_stmtContext): Result {
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
}
