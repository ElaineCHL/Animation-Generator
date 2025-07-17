// Generated from src\DSL\DSL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { DSLVisitor } from "./DSLVisitor";


export class DSLParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly STRING = 26;
	public static readonly COLOR = 27;
	public static readonly ID = 28;
	public static readonly NUMBER = 29;
	public static readonly LINE_COMMENT = 30;
	public static readonly BLOCK_COMMENT = 31;
	public static readonly WS = 32;
	public static readonly RULE_script = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_shape_stmt = 2;
	public static readonly RULE_text_stmt = 3;
	public static readonly RULE_animation_stmt = 4;
	public static readonly RULE_id = 5;
	public static readonly RULE_position = 6;
	public static readonly RULE_color = 7;
	public static readonly RULE_size = 8;
	public static readonly RULE_duration = 9;
	public static readonly RULE_number = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"script", "statement", "shape_stmt", "text_stmt", "animation_stmt", "id", 
		"position", "color", "size", "duration", "number",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'circle'", "'at'", "'radius'", "'rectangle'", "'width'", "'height'", 
		"'triangle'", "'size'", "'dot'", "'text'", "'move'", "'to'", "'fadein'", 
		"'fadeout'", "'scale'", "'rotate'", "'by'", "'around'", "'id='", "'('", 
		"','", "')'", "'color'", "'duration'", "'s'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "STRING", "COLOR", 
		"ID", "NUMBER", "LINE_COMMENT", "BLOCK_COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DSLParser._LITERAL_NAMES, DSLParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DSLParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "DSL.g4"; }

	// @Override
	public get ruleNames(): string[] { return DSLParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return DSLParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(DSLParser._ATN, this);
	}
	// @RuleVersion(0)
	public script(): ScriptContext {
		let _localctx: ScriptContext = new ScriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, DSLParser.RULE_script);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DSLParser.T__0) | (1 << DSLParser.T__3) | (1 << DSLParser.T__6) | (1 << DSLParser.T__8) | (1 << DSLParser.T__9) | (1 << DSLParser.T__10) | (1 << DSLParser.T__12) | (1 << DSLParser.T__13) | (1 << DSLParser.T__14) | (1 << DSLParser.T__15))) !== 0)) {
				{
				{
				this.state = 22;
				this.statement();
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 28;
			this.match(DSLParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, DSLParser.RULE_statement);
		try {
			this.state = 33;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DSLParser.T__0:
			case DSLParser.T__3:
			case DSLParser.T__6:
			case DSLParser.T__8:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 30;
				this.shape_stmt();
				}
				break;
			case DSLParser.T__9:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 31;
				this.text_stmt();
				}
				break;
			case DSLParser.T__10:
			case DSLParser.T__12:
			case DSLParser.T__13:
			case DSLParser.T__14:
			case DSLParser.T__15:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 32;
				this.animation_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shape_stmt(): Shape_stmtContext {
		let _localctx: Shape_stmtContext = new Shape_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, DSLParser.RULE_shape_stmt);
		let _la: number;
		try {
			this.state = 71;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DSLParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 35;
				this.match(DSLParser.T__0);
				this.state = 36;
				this.id();
				this.state = 37;
				this.match(DSLParser.T__1);
				this.state = 38;
				this.position();
				this.state = 39;
				this.match(DSLParser.T__2);
				this.state = 40;
				this.number();
				this.state = 42;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DSLParser.T__22) {
					{
					this.state = 41;
					this.color();
					}
				}

				}
				break;
			case DSLParser.T__3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 44;
				this.match(DSLParser.T__3);
				this.state = 45;
				this.id();
				this.state = 46;
				this.match(DSLParser.T__1);
				this.state = 47;
				this.position();
				this.state = 48;
				this.match(DSLParser.T__4);
				this.state = 49;
				this.number();
				this.state = 50;
				this.match(DSLParser.T__5);
				this.state = 51;
				this.number();
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DSLParser.T__22) {
					{
					this.state = 52;
					this.color();
					}
				}

				}
				break;
			case DSLParser.T__6:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 55;
				this.match(DSLParser.T__6);
				this.state = 56;
				this.id();
				this.state = 57;
				this.match(DSLParser.T__1);
				this.state = 58;
				this.position();
				this.state = 59;
				this.match(DSLParser.T__7);
				this.state = 60;
				this.number();
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DSLParser.T__22) {
					{
					this.state = 61;
					this.color();
					}
				}

				}
				break;
			case DSLParser.T__8:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 64;
				this.match(DSLParser.T__8);
				this.state = 65;
				this.id();
				this.state = 66;
				this.match(DSLParser.T__1);
				this.state = 67;
				this.position();
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DSLParser.T__22) {
					{
					this.state = 68;
					this.color();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public text_stmt(): Text_stmtContext {
		let _localctx: Text_stmtContext = new Text_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, DSLParser.RULE_text_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.match(DSLParser.T__9);
			this.state = 74;
			this.id();
			this.state = 75;
			this.match(DSLParser.STRING);
			this.state = 76;
			this.match(DSLParser.T__1);
			this.state = 77;
			this.position();
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DSLParser.T__7) {
				{
				this.state = 78;
				this.size();
				}
			}

			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DSLParser.T__22) {
				{
				this.state = 81;
				this.color();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public animation_stmt(): Animation_stmtContext {
		let _localctx: Animation_stmtContext = new Animation_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, DSLParser.RULE_animation_stmt);
		let _la: number;
		try {
			this.state = 119;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DSLParser.T__10:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 84;
				this.match(DSLParser.T__10);
				this.state = 85;
				this.match(DSLParser.ID);
				this.state = 86;
				this.match(DSLParser.T__11);
				this.state = 87;
				this.position();
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DSLParser.T__23) {
					{
					this.state = 88;
					this.duration();
					}
				}

				}
				break;
			case DSLParser.T__12:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 91;
				this.match(DSLParser.T__12);
				this.state = 92;
				this.match(DSLParser.ID);
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DSLParser.T__23) {
					{
					this.state = 93;
					this.duration();
					}
				}

				}
				break;
			case DSLParser.T__13:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 96;
				this.match(DSLParser.T__13);
				this.state = 97;
				this.match(DSLParser.ID);
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DSLParser.T__23) {
					{
					this.state = 98;
					this.duration();
					}
				}

				}
				break;
			case DSLParser.T__14:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 101;
				this.match(DSLParser.T__14);
				this.state = 102;
				this.match(DSLParser.ID);
				this.state = 103;
				this.match(DSLParser.T__11);
				this.state = 104;
				this.number();
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DSLParser.T__23) {
					{
					this.state = 105;
					this.duration();
					}
				}

				}
				break;
			case DSLParser.T__15:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 108;
				this.match(DSLParser.T__15);
				this.state = 109;
				this.match(DSLParser.ID);
				this.state = 110;
				this.match(DSLParser.T__16);
				this.state = 111;
				this.number();
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DSLParser.T__17) {
					{
					this.state = 112;
					this.match(DSLParser.T__17);
					this.state = 113;
					this.position();
					}
				}

				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DSLParser.T__23) {
					{
					this.state = 116;
					this.duration();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, DSLParser.RULE_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(DSLParser.T__18);
			this.state = 122;
			this.match(DSLParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public position(): PositionContext {
		let _localctx: PositionContext = new PositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, DSLParser.RULE_position);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			this.match(DSLParser.T__19);
			this.state = 125;
			this.number();
			this.state = 126;
			this.match(DSLParser.T__20);
			this.state = 127;
			this.number();
			this.state = 128;
			this.match(DSLParser.T__21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public color(): ColorContext {
		let _localctx: ColorContext = new ColorContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, DSLParser.RULE_color);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.match(DSLParser.T__22);
			this.state = 131;
			this.match(DSLParser.COLOR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public size(): SizeContext {
		let _localctx: SizeContext = new SizeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, DSLParser.RULE_size);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(DSLParser.T__7);
			this.state = 134;
			this.number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public duration(): DurationContext {
		let _localctx: DurationContext = new DurationContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, DSLParser.RULE_duration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(DSLParser.T__23);
			this.state = 137;
			this.number();
			this.state = 138;
			this.match(DSLParser.T__24);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, DSLParser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(DSLParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\"\x91\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x07\x02" +
		"\x1A\n\x02\f\x02\x0E\x02\x1D\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x05\x03$\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04-\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x048\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04A\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04H\n\x04\x05\x04J\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05R\n\x05\x03\x05\x05\x05U\n\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\\\n\x06\x03\x06\x03\x06\x03\x06\x05\x06a" +
		"\n\x06\x03\x06\x03\x06\x03\x06\x05\x06f\n\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x05\x06m\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x05\x06u\n\x06\x03\x06\x05\x06x\n\x06\x05\x06z\n\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t" +
		"\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x02\x02\x02" +
		"\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x02\x02\x02\x9B\x02\x1B\x03\x02\x02\x02\x04#\x03\x02\x02" +
		"\x02\x06I\x03\x02\x02\x02\bK\x03\x02\x02\x02\ny\x03\x02\x02\x02\f{\x03" +
		"\x02\x02\x02\x0E~\x03\x02\x02\x02\x10\x84\x03\x02\x02\x02\x12\x87\x03" +
		"\x02\x02\x02\x14\x8A\x03\x02\x02\x02\x16\x8E\x03\x02\x02\x02\x18\x1A\x05" +
		"\x04\x03\x02\x19\x18\x03\x02\x02\x02\x1A\x1D\x03\x02\x02\x02\x1B\x19\x03" +
		"\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1E\x03\x02\x02\x02\x1D\x1B\x03" +
		"\x02\x02\x02\x1E\x1F\x07\x02\x02\x03\x1F\x03\x03\x02\x02\x02 $\x05\x06" +
		"\x04\x02!$\x05\b\x05\x02\"$\x05\n\x06\x02# \x03\x02\x02\x02#!\x03\x02" +
		"\x02\x02#\"\x03\x02\x02\x02$\x05\x03\x02\x02\x02%&\x07\x03\x02\x02&\'" +
		"\x05\f\x07\x02\'(\x07\x04\x02\x02()\x05\x0E\b\x02)*\x07\x05\x02\x02*," +
		"\x05\x16\f\x02+-\x05\x10\t\x02,+\x03\x02\x02\x02,-\x03\x02\x02\x02-J\x03" +
		"\x02\x02\x02./\x07\x06\x02\x02/0\x05\f\x07\x0201\x07\x04\x02\x0212\x05" +
		"\x0E\b\x0223\x07\x07\x02\x0234\x05\x16\f\x0245\x07\b\x02\x0257\x05\x16" +
		"\f\x0268\x05\x10\t\x0276\x03\x02\x02\x0278\x03\x02\x02\x028J\x03\x02\x02" +
		"\x029:\x07\t\x02\x02:;\x05\f\x07\x02;<\x07\x04\x02\x02<=\x05\x0E\b\x02" +
		"=>\x07\n\x02\x02>@\x05\x16\f\x02?A\x05\x10\t\x02@?\x03\x02\x02\x02@A\x03" +
		"\x02\x02\x02AJ\x03\x02\x02\x02BC\x07\v\x02\x02CD\x05\f\x07\x02DE\x07\x04" +
		"\x02\x02EG\x05\x0E\b\x02FH\x05\x10\t\x02GF\x03\x02\x02\x02GH\x03\x02\x02" +
		"\x02HJ\x03\x02\x02\x02I%\x03\x02\x02\x02I.\x03\x02\x02\x02I9\x03\x02\x02" +
		"\x02IB\x03\x02\x02\x02J\x07\x03\x02\x02\x02KL\x07\f\x02\x02LM\x05\f\x07" +
		"\x02MN\x07\x1C\x02\x02NO\x07\x04\x02\x02OQ\x05\x0E\b\x02PR\x05\x12\n\x02" +
		"QP\x03\x02\x02\x02QR\x03\x02\x02\x02RT\x03\x02\x02\x02SU\x05\x10\t\x02" +
		"TS\x03\x02\x02\x02TU\x03\x02\x02\x02U\t\x03\x02\x02\x02VW\x07\r\x02\x02" +
		"WX\x07\x1E\x02\x02XY\x07\x0E\x02\x02Y[\x05\x0E\b\x02Z\\\x05\x14\v\x02" +
		"[Z\x03\x02\x02\x02[\\\x03\x02\x02\x02\\z\x03\x02\x02\x02]^\x07\x0F\x02" +
		"\x02^`\x07\x1E\x02\x02_a\x05\x14\v\x02`_\x03\x02\x02\x02`a\x03\x02\x02" +
		"\x02az\x03\x02\x02\x02bc\x07\x10\x02\x02ce\x07\x1E\x02\x02df\x05\x14\v" +
		"\x02ed\x03\x02\x02\x02ef\x03\x02\x02\x02fz\x03\x02\x02\x02gh\x07\x11\x02" +
		"\x02hi\x07\x1E\x02\x02ij\x07\x0E\x02\x02jl\x05\x16\f\x02km\x05\x14\v\x02" +
		"lk\x03\x02\x02\x02lm\x03\x02\x02\x02mz\x03\x02\x02\x02no\x07\x12\x02\x02" +
		"op\x07\x1E\x02\x02pq\x07\x13\x02\x02qt\x05\x16\f\x02rs\x07\x14\x02\x02" +
		"su\x05\x0E\b\x02tr\x03\x02\x02\x02tu\x03\x02\x02\x02uw\x03\x02\x02\x02" +
		"vx\x05\x14\v\x02wv\x03\x02\x02\x02wx\x03\x02\x02\x02xz\x03\x02\x02\x02" +
		"yV\x03\x02\x02\x02y]\x03\x02\x02\x02yb\x03\x02\x02\x02yg\x03\x02\x02\x02" +
		"yn\x03\x02\x02\x02z\v\x03\x02\x02\x02{|\x07\x15\x02\x02|}\x07\x1E\x02" +
		"\x02}\r\x03\x02\x02\x02~\x7F\x07\x16\x02\x02\x7F\x80\x05\x16\f\x02\x80" +
		"\x81\x07\x17\x02\x02\x81\x82\x05\x16\f\x02\x82\x83\x07\x18\x02\x02\x83" +
		"\x0F\x03\x02\x02\x02\x84\x85\x07\x19\x02\x02\x85\x86\x07\x1D\x02\x02\x86" +
		"\x11\x03\x02\x02\x02\x87\x88\x07\n\x02\x02\x88\x89\x05\x16\f\x02\x89\x13" +
		"\x03\x02\x02\x02\x8A\x8B\x07\x1A\x02\x02\x8B\x8C\x05\x16\f\x02\x8C\x8D" +
		"\x07\x1B\x02\x02\x8D\x15\x03\x02\x02\x02\x8E\x8F\x07\x1F\x02\x02\x8F\x17" +
		"\x03\x02\x02\x02\x12\x1B#,7@GIQT[`eltwy";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DSLParser.__ATN) {
			DSLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DSLParser._serializedATN));
		}

		return DSLParser.__ATN;
	}

}

export class ScriptContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(DSLParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DSLParser.RULE_script; }
	// @Override
	public accept<Result>(visitor: DSLVisitor<Result>): Result {
		if (visitor.visitScript) {
			return visitor.visitScript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public shape_stmt(): Shape_stmtContext | undefined {
		return this.tryGetRuleContext(0, Shape_stmtContext);
	}
	public text_stmt(): Text_stmtContext | undefined {
		return this.tryGetRuleContext(0, Text_stmtContext);
	}
	public animation_stmt(): Animation_stmtContext | undefined {
		return this.tryGetRuleContext(0, Animation_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DSLParser.RULE_statement; }
	// @Override
	public accept<Result>(visitor: DSLVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Shape_stmtContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public position(): PositionContext {
		return this.getRuleContext(0, PositionContext);
	}
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	public color(): ColorContext | undefined {
		return this.tryGetRuleContext(0, ColorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DSLParser.RULE_shape_stmt; }
	// @Override
	public accept<Result>(visitor: DSLVisitor<Result>): Result {
		if (visitor.visitShape_stmt) {
			return visitor.visitShape_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Text_stmtContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public STRING(): TerminalNode { return this.getToken(DSLParser.STRING, 0); }
	public position(): PositionContext {
		return this.getRuleContext(0, PositionContext);
	}
	public size(): SizeContext | undefined {
		return this.tryGetRuleContext(0, SizeContext);
	}
	public color(): ColorContext | undefined {
		return this.tryGetRuleContext(0, ColorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DSLParser.RULE_text_stmt; }
	// @Override
	public accept<Result>(visitor: DSLVisitor<Result>): Result {
		if (visitor.visitText_stmt) {
			return visitor.visitText_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Animation_stmtContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(DSLParser.ID, 0); }
	public position(): PositionContext | undefined {
		return this.tryGetRuleContext(0, PositionContext);
	}
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DSLParser.RULE_animation_stmt; }
	// @Override
	public accept<Result>(visitor: DSLVisitor<Result>): Result {
		if (visitor.visitAnimation_stmt) {
			return visitor.visitAnimation_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(DSLParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DSLParser.RULE_id; }
	// @Override
	public accept<Result>(visitor: DSLVisitor<Result>): Result {
		if (visitor.visitId) {
			return visitor.visitId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PositionContext extends ParserRuleContext {
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DSLParser.RULE_position; }
	// @Override
	public accept<Result>(visitor: DSLVisitor<Result>): Result {
		if (visitor.visitPosition) {
			return visitor.visitPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColorContext extends ParserRuleContext {
	public COLOR(): TerminalNode { return this.getToken(DSLParser.COLOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DSLParser.RULE_color; }
	// @Override
	public accept<Result>(visitor: DSLVisitor<Result>): Result {
		if (visitor.visitColor) {
			return visitor.visitColor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SizeContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DSLParser.RULE_size; }
	// @Override
	public accept<Result>(visitor: DSLVisitor<Result>): Result {
		if (visitor.visitSize) {
			return visitor.visitSize(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DurationContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DSLParser.RULE_duration; }
	// @Override
	public accept<Result>(visitor: DSLVisitor<Result>): Result {
		if (visitor.visitDuration) {
			return visitor.visitDuration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(DSLParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DSLParser.RULE_number; }
	// @Override
	public accept<Result>(visitor: DSLVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


