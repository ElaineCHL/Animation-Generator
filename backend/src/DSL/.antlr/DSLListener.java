// Generated from e:/_UTAR/Y3S3/PROJECT_II/Math-Generator/backend/src/DSL/DSL.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link DSLParser}.
 */
public interface DSLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link DSLParser#script}.
	 * @param ctx the parse tree
	 */
	void enterScript(DSLParser.ScriptContext ctx);
	/**
	 * Exit a parse tree produced by {@link DSLParser#script}.
	 * @param ctx the parse tree
	 */
	void exitScript(DSLParser.ScriptContext ctx);
	/**
	 * Enter a parse tree produced by {@link DSLParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(DSLParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link DSLParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(DSLParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link DSLParser#shape_stmt}.
	 * @param ctx the parse tree
	 */
	void enterShape_stmt(DSLParser.Shape_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link DSLParser#shape_stmt}.
	 * @param ctx the parse tree
	 */
	void exitShape_stmt(DSLParser.Shape_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link DSLParser#text_stmt}.
	 * @param ctx the parse tree
	 */
	void enterText_stmt(DSLParser.Text_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link DSLParser#text_stmt}.
	 * @param ctx the parse tree
	 */
	void exitText_stmt(DSLParser.Text_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link DSLParser#animation_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAnimation_stmt(DSLParser.Animation_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link DSLParser#animation_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAnimation_stmt(DSLParser.Animation_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link DSLParser#id}.
	 * @param ctx the parse tree
	 */
	void enterId(DSLParser.IdContext ctx);
	/**
	 * Exit a parse tree produced by {@link DSLParser#id}.
	 * @param ctx the parse tree
	 */
	void exitId(DSLParser.IdContext ctx);
	/**
	 * Enter a parse tree produced by {@link DSLParser#position}.
	 * @param ctx the parse tree
	 */
	void enterPosition(DSLParser.PositionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DSLParser#position}.
	 * @param ctx the parse tree
	 */
	void exitPosition(DSLParser.PositionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DSLParser#color}.
	 * @param ctx the parse tree
	 */
	void enterColor(DSLParser.ColorContext ctx);
	/**
	 * Exit a parse tree produced by {@link DSLParser#color}.
	 * @param ctx the parse tree
	 */
	void exitColor(DSLParser.ColorContext ctx);
	/**
	 * Enter a parse tree produced by {@link DSLParser#size}.
	 * @param ctx the parse tree
	 */
	void enterSize(DSLParser.SizeContext ctx);
	/**
	 * Exit a parse tree produced by {@link DSLParser#size}.
	 * @param ctx the parse tree
	 */
	void exitSize(DSLParser.SizeContext ctx);
	/**
	 * Enter a parse tree produced by {@link DSLParser#duration}.
	 * @param ctx the parse tree
	 */
	void enterDuration(DSLParser.DurationContext ctx);
	/**
	 * Exit a parse tree produced by {@link DSLParser#duration}.
	 * @param ctx the parse tree
	 */
	void exitDuration(DSLParser.DurationContext ctx);
	/**
	 * Enter a parse tree produced by {@link DSLParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(DSLParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link DSLParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(DSLParser.NumberContext ctx);
}