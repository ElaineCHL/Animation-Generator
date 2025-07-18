// Generated from src\DSL\DSL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ScriptContext } from "./generated/DSLParser";
import { StatementContext } from "./generated/DSLParser";
import { Shape_stmtContext } from "./generated/DSLParser";
import { Text_stmtContext } from "./generated/DSLParser";
import { Animation_stmtContext } from "./generated/DSLParser";
import { PositionContext } from "./generated/DSLParser";
import { ColorContext } from "./generated/DSLParser";
import { SizeContext } from "./generated/DSLParser";
import { DurationContext } from "./generated/DSLParser";
import { NumberContext } from "./generated/DSLParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DSLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface DSLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `DSLParser.script`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScript?: (ctx: ScriptContext) => Result;

	/**
	 * Visit a parse tree produced by `DSLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DSLParser.shape_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShape_stmt?: (ctx: Shape_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `DSLParser.text_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitText_stmt?: (ctx: Text_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `DSLParser.animation_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnimation_stmt?: (ctx: Animation_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `DSLParser.position`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition?: (ctx: PositionContext) => Result;

	/**
	 * Visit a parse tree produced by `DSLParser.color`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColor?: (ctx: ColorContext) => Result;

	/**
	 * Visit a parse tree produced by `DSLParser.size`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSize?: (ctx: SizeContext) => Result;

	/**
	 * Visit a parse tree produced by `DSLParser.duration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDuration?: (ctx: DurationContext) => Result;

	/**
	 * Visit a parse tree produced by `DSLParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;
}

