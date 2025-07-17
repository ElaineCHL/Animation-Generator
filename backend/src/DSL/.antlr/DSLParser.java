// Generated from e:/_UTAR/Y3S3/PROJECT_II/Math-Generator/backend/src/DSL/DSL.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class DSLParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, STRING=23, COLOR=24, 
		ID=25, NUMBER=26, WS=27;
	public static final int
		RULE_script = 0, RULE_statement = 1, RULE_shape_stmt = 2, RULE_text_stmt = 3, 
		RULE_animation_stmt = 4, RULE_id = 5, RULE_position = 6, RULE_color = 7, 
		RULE_size = 8, RULE_duration = 9, RULE_number = 10;
	private static String[] makeRuleNames() {
		return new String[] {
			"script", "statement", "shape_stmt", "text_stmt", "animation_stmt", "id", 
			"position", "color", "size", "duration", "number"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'circle'", "'at'", "'radius'", "'rectangle'", "'width'", "'height'", 
			"'triangle'", "'size'", "'dot'", "'text'", "'move'", "'to'", "'fadein'", 
			"'fadeout'", "'scale'", "'id='", "'('", "','", "')'", "'color'", "'duration'", 
			"'s'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, "STRING", 
			"COLOR", "ID", "NUMBER", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "DSL.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public DSLParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ScriptContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(DSLParser.EOF, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ScriptContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_script; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).enterScript(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).exitScript(this);
		}
	}

	public final ScriptContext script() throws RecognitionException {
		ScriptContext _localctx = new ScriptContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_script);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(25);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 61074L) != 0)) {
				{
				{
				setState(22);
				statement();
				}
				}
				setState(27);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(28);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public Shape_stmtContext shape_stmt() {
			return getRuleContext(Shape_stmtContext.class,0);
		}
		public Text_stmtContext text_stmt() {
			return getRuleContext(Text_stmtContext.class,0);
		}
		public Animation_stmtContext animation_stmt() {
			return getRuleContext(Animation_stmtContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).enterStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).exitStatement(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(33);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
			case T__3:
			case T__6:
			case T__8:
				enterOuterAlt(_localctx, 1);
				{
				setState(30);
				shape_stmt();
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 2);
				{
				setState(31);
				text_stmt();
				}
				break;
			case T__10:
			case T__12:
			case T__13:
			case T__14:
				enterOuterAlt(_localctx, 3);
				{
				setState(32);
				animation_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Shape_stmtContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public List<NumberContext> number() {
			return getRuleContexts(NumberContext.class);
		}
		public NumberContext number(int i) {
			return getRuleContext(NumberContext.class,i);
		}
		public ColorContext color() {
			return getRuleContext(ColorContext.class,0);
		}
		public Shape_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_shape_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).enterShape_stmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).exitShape_stmt(this);
		}
	}

	public final Shape_stmtContext shape_stmt() throws RecognitionException {
		Shape_stmtContext _localctx = new Shape_stmtContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_shape_stmt);
		int _la;
		try {
			setState(71);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(35);
				match(T__0);
				setState(36);
				id();
				setState(37);
				match(T__1);
				setState(38);
				position();
				setState(39);
				match(T__2);
				setState(40);
				number();
				setState(42);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__19) {
					{
					setState(41);
					color();
					}
				}

				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 2);
				{
				setState(44);
				match(T__3);
				setState(45);
				id();
				setState(46);
				match(T__1);
				setState(47);
				position();
				setState(48);
				match(T__4);
				setState(49);
				number();
				setState(50);
				match(T__5);
				setState(51);
				number();
				setState(53);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__19) {
					{
					setState(52);
					color();
					}
				}

				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 3);
				{
				setState(55);
				match(T__6);
				setState(56);
				id();
				setState(57);
				match(T__1);
				setState(58);
				position();
				setState(59);
				match(T__7);
				setState(60);
				number();
				setState(62);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__19) {
					{
					setState(61);
					color();
					}
				}

				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 4);
				{
				setState(64);
				match(T__8);
				setState(65);
				id();
				setState(66);
				match(T__1);
				setState(67);
				position();
				setState(69);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__19) {
					{
					setState(68);
					color();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Text_stmtContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(DSLParser.STRING, 0); }
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public SizeContext size() {
			return getRuleContext(SizeContext.class,0);
		}
		public ColorContext color() {
			return getRuleContext(ColorContext.class,0);
		}
		public Text_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_text_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).enterText_stmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).exitText_stmt(this);
		}
	}

	public final Text_stmtContext text_stmt() throws RecognitionException {
		Text_stmtContext _localctx = new Text_stmtContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_text_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			match(T__9);
			setState(74);
			match(STRING);
			setState(75);
			match(T__1);
			setState(76);
			position();
			setState(78);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__7) {
				{
				setState(77);
				size();
				}
			}

			setState(81);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__19) {
				{
				setState(80);
				color();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Animation_stmtContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(DSLParser.ID, 0); }
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public DurationContext duration() {
			return getRuleContext(DurationContext.class,0);
		}
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public Animation_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_animation_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).enterAnimation_stmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).exitAnimation_stmt(this);
		}
	}

	public final Animation_stmtContext animation_stmt() throws RecognitionException {
		Animation_stmtContext _localctx = new Animation_stmtContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_animation_stmt);
		int _la;
		try {
			setState(107);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__10:
				enterOuterAlt(_localctx, 1);
				{
				setState(83);
				match(T__10);
				setState(84);
				match(ID);
				setState(85);
				match(T__11);
				setState(86);
				position();
				setState(88);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__20) {
					{
					setState(87);
					duration();
					}
				}

				}
				break;
			case T__12:
				enterOuterAlt(_localctx, 2);
				{
				setState(90);
				match(T__12);
				setState(91);
				match(ID);
				setState(93);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__20) {
					{
					setState(92);
					duration();
					}
				}

				}
				break;
			case T__13:
				enterOuterAlt(_localctx, 3);
				{
				setState(95);
				match(T__13);
				setState(96);
				match(ID);
				setState(98);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__20) {
					{
					setState(97);
					duration();
					}
				}

				}
				break;
			case T__14:
				enterOuterAlt(_localctx, 4);
				{
				setState(100);
				match(T__14);
				setState(101);
				match(ID);
				setState(102);
				match(T__11);
				setState(103);
				number();
				setState(105);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__20) {
					{
					setState(104);
					duration();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(DSLParser.ID, 0); }
		public IdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_id; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).enterId(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).exitId(this);
		}
	}

	public final IdContext id() throws RecognitionException {
		IdContext _localctx = new IdContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_id);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			match(T__15);
			setState(110);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PositionContext extends ParserRuleContext {
		public List<NumberContext> number() {
			return getRuleContexts(NumberContext.class);
		}
		public NumberContext number(int i) {
			return getRuleContext(NumberContext.class,i);
		}
		public PositionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_position; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).enterPosition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).exitPosition(this);
		}
	}

	public final PositionContext position() throws RecognitionException {
		PositionContext _localctx = new PositionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_position);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(112);
			match(T__16);
			setState(113);
			number();
			setState(114);
			match(T__17);
			setState(115);
			number();
			setState(116);
			match(T__18);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ColorContext extends ParserRuleContext {
		public TerminalNode COLOR() { return getToken(DSLParser.COLOR, 0); }
		public ColorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_color; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).enterColor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).exitColor(this);
		}
	}

	public final ColorContext color() throws RecognitionException {
		ColorContext _localctx = new ColorContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_color);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			match(T__19);
			setState(119);
			match(COLOR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SizeContext extends ParserRuleContext {
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public SizeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_size; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).enterSize(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).exitSize(this);
		}
	}

	public final SizeContext size() throws RecognitionException {
		SizeContext _localctx = new SizeContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_size);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(121);
			match(T__7);
			setState(122);
			number();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DurationContext extends ParserRuleContext {
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public DurationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_duration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).enterDuration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).exitDuration(this);
		}
	}

	public final DurationContext duration() throws RecognitionException {
		DurationContext _localctx = new DurationContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_duration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(124);
			match(T__20);
			setState(125);
			number();
			setState(126);
			match(T__21);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumberContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(DSLParser.NUMBER, 0); }
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).enterNumber(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DSLListener ) ((DSLListener)listener).exitNumber(this);
		}
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_number);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
			match(NUMBER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u001b\u0083\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0001\u0000\u0005\u0000"+
		"\u0018\b\u0000\n\u0000\f\u0000\u001b\t\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0003\u0001\"\b\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003"+
		"\u0002+\b\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u00026\b"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0003\u0002?\b\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0003\u0002F\b\u0002\u0003\u0002H\b\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003"+
		"O\b\u0003\u0001\u0003\u0003\u0003R\b\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0003\u0004Y\b\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0003\u0004^\b\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0003\u0004c\b\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0003\u0004j\b\u0004\u0003\u0004l\b\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001"+
		"\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0000"+
		"\u0000\u000b\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0000"+
		"\u0000\u008a\u0000\u0019\u0001\u0000\u0000\u0000\u0002!\u0001\u0000\u0000"+
		"\u0000\u0004G\u0001\u0000\u0000\u0000\u0006I\u0001\u0000\u0000\u0000\b"+
		"k\u0001\u0000\u0000\u0000\nm\u0001\u0000\u0000\u0000\fp\u0001\u0000\u0000"+
		"\u0000\u000ev\u0001\u0000\u0000\u0000\u0010y\u0001\u0000\u0000\u0000\u0012"+
		"|\u0001\u0000\u0000\u0000\u0014\u0080\u0001\u0000\u0000\u0000\u0016\u0018"+
		"\u0003\u0002\u0001\u0000\u0017\u0016\u0001\u0000\u0000\u0000\u0018\u001b"+
		"\u0001\u0000\u0000\u0000\u0019\u0017\u0001\u0000\u0000\u0000\u0019\u001a"+
		"\u0001\u0000\u0000\u0000\u001a\u001c\u0001\u0000\u0000\u0000\u001b\u0019"+
		"\u0001\u0000\u0000\u0000\u001c\u001d\u0005\u0000\u0000\u0001\u001d\u0001"+
		"\u0001\u0000\u0000\u0000\u001e\"\u0003\u0004\u0002\u0000\u001f\"\u0003"+
		"\u0006\u0003\u0000 \"\u0003\b\u0004\u0000!\u001e\u0001\u0000\u0000\u0000"+
		"!\u001f\u0001\u0000\u0000\u0000! \u0001\u0000\u0000\u0000\"\u0003\u0001"+
		"\u0000\u0000\u0000#$\u0005\u0001\u0000\u0000$%\u0003\n\u0005\u0000%&\u0005"+
		"\u0002\u0000\u0000&\'\u0003\f\u0006\u0000\'(\u0005\u0003\u0000\u0000("+
		"*\u0003\u0014\n\u0000)+\u0003\u000e\u0007\u0000*)\u0001\u0000\u0000\u0000"+
		"*+\u0001\u0000\u0000\u0000+H\u0001\u0000\u0000\u0000,-\u0005\u0004\u0000"+
		"\u0000-.\u0003\n\u0005\u0000./\u0005\u0002\u0000\u0000/0\u0003\f\u0006"+
		"\u000001\u0005\u0005\u0000\u000012\u0003\u0014\n\u000023\u0005\u0006\u0000"+
		"\u000035\u0003\u0014\n\u000046\u0003\u000e\u0007\u000054\u0001\u0000\u0000"+
		"\u000056\u0001\u0000\u0000\u00006H\u0001\u0000\u0000\u000078\u0005\u0007"+
		"\u0000\u000089\u0003\n\u0005\u00009:\u0005\u0002\u0000\u0000:;\u0003\f"+
		"\u0006\u0000;<\u0005\b\u0000\u0000<>\u0003\u0014\n\u0000=?\u0003\u000e"+
		"\u0007\u0000>=\u0001\u0000\u0000\u0000>?\u0001\u0000\u0000\u0000?H\u0001"+
		"\u0000\u0000\u0000@A\u0005\t\u0000\u0000AB\u0003\n\u0005\u0000BC\u0005"+
		"\u0002\u0000\u0000CE\u0003\f\u0006\u0000DF\u0003\u000e\u0007\u0000ED\u0001"+
		"\u0000\u0000\u0000EF\u0001\u0000\u0000\u0000FH\u0001\u0000\u0000\u0000"+
		"G#\u0001\u0000\u0000\u0000G,\u0001\u0000\u0000\u0000G7\u0001\u0000\u0000"+
		"\u0000G@\u0001\u0000\u0000\u0000H\u0005\u0001\u0000\u0000\u0000IJ\u0005"+
		"\n\u0000\u0000JK\u0005\u0017\u0000\u0000KL\u0005\u0002\u0000\u0000LN\u0003"+
		"\f\u0006\u0000MO\u0003\u0010\b\u0000NM\u0001\u0000\u0000\u0000NO\u0001"+
		"\u0000\u0000\u0000OQ\u0001\u0000\u0000\u0000PR\u0003\u000e\u0007\u0000"+
		"QP\u0001\u0000\u0000\u0000QR\u0001\u0000\u0000\u0000R\u0007\u0001\u0000"+
		"\u0000\u0000ST\u0005\u000b\u0000\u0000TU\u0005\u0019\u0000\u0000UV\u0005"+
		"\f\u0000\u0000VX\u0003\f\u0006\u0000WY\u0003\u0012\t\u0000XW\u0001\u0000"+
		"\u0000\u0000XY\u0001\u0000\u0000\u0000Yl\u0001\u0000\u0000\u0000Z[\u0005"+
		"\r\u0000\u0000[]\u0005\u0019\u0000\u0000\\^\u0003\u0012\t\u0000]\\\u0001"+
		"\u0000\u0000\u0000]^\u0001\u0000\u0000\u0000^l\u0001\u0000\u0000\u0000"+
		"_`\u0005\u000e\u0000\u0000`b\u0005\u0019\u0000\u0000ac\u0003\u0012\t\u0000"+
		"ba\u0001\u0000\u0000\u0000bc\u0001\u0000\u0000\u0000cl\u0001\u0000\u0000"+
		"\u0000de\u0005\u000f\u0000\u0000ef\u0005\u0019\u0000\u0000fg\u0005\f\u0000"+
		"\u0000gi\u0003\u0014\n\u0000hj\u0003\u0012\t\u0000ih\u0001\u0000\u0000"+
		"\u0000ij\u0001\u0000\u0000\u0000jl\u0001\u0000\u0000\u0000kS\u0001\u0000"+
		"\u0000\u0000kZ\u0001\u0000\u0000\u0000k_\u0001\u0000\u0000\u0000kd\u0001"+
		"\u0000\u0000\u0000l\t\u0001\u0000\u0000\u0000mn\u0005\u0010\u0000\u0000"+
		"no\u0005\u0019\u0000\u0000o\u000b\u0001\u0000\u0000\u0000pq\u0005\u0011"+
		"\u0000\u0000qr\u0003\u0014\n\u0000rs\u0005\u0012\u0000\u0000st\u0003\u0014"+
		"\n\u0000tu\u0005\u0013\u0000\u0000u\r\u0001\u0000\u0000\u0000vw\u0005"+
		"\u0014\u0000\u0000wx\u0005\u0018\u0000\u0000x\u000f\u0001\u0000\u0000"+
		"\u0000yz\u0005\b\u0000\u0000z{\u0003\u0014\n\u0000{\u0011\u0001\u0000"+
		"\u0000\u0000|}\u0005\u0015\u0000\u0000}~\u0003\u0014\n\u0000~\u007f\u0005"+
		"\u0016\u0000\u0000\u007f\u0013\u0001\u0000\u0000\u0000\u0080\u0081\u0005"+
		"\u001a\u0000\u0000\u0081\u0015\u0001\u0000\u0000\u0000\u000e\u0019!*5"+
		">EGNQX]bik";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}