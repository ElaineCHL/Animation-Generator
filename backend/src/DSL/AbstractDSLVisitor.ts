import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { DSLVisitor } from "./DSLVisitor";
import {
  ScriptContext,
  StatementContext,
  Shape_stmtContext,
  Text_stmtContext,
  Animation_stmtContext,
  PositionContext,
  ColorContext,
  SizeContext,
  DurationContext,
  NumberContext
} from "./DSLParser";

export abstract class AbstractDSLVisitor<Result>
  extends AbstractParseTreeVisitor<Result>
  implements DSLVisitor<Result> {

  // This is the default return value if a method isn't overridden
  protected defaultResult(): Result {
    return undefined as unknown as Result;
  }

  // Override any methods you want custom logic for
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
