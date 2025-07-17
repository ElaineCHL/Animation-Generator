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
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, STRING=26, COLOR=27, ID=28, NUMBER=29, LINE_COMMENT=30, BLOCK_COMMENT=31, 
		WS=32;
	public static final int
		RULE_script = 0, RULE_statement = 1, RULE_shape_stmt = 2, RULE_text_stmt = 3, 
		RULE_animation_stmt = 4, RULE_position = 5, RULE_color = 6, RULE_size = 7, 
		RULE_duration = 8, RULE_number = 9;
	private static String[] makeRuleNames() {
		return new String[] {
			"script", "statement", "shape_stmt", "text_stmt", "animation_stmt", "position", 
			"color", "size", "duration", "number"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", "'circle'", "'at'", "'radius'", "'rectangle'", "'width'", 
			"'height'", "'triangle'", "'size'", "'dot'", "'text'", "'move'", "'to'", 
			"'fadein'", "'fadeout'", "'scale'", "'rotate'", "'by'", "'around'", "'('", 
			"','", "')'", "'color'", "'duration'", "'s'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, "STRING", "COLOR", "ID", "NUMBER", "LINE_COMMENT", "BLOCK_COMMENT", 
			"WS"
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
	}

	public final ScriptContext script() throws RecognitionException {
		ScriptContext _localctx = new ScriptContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_script);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(23);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 268685312L) != 0)) {
				{
				{
				setState(20);
				statement();
				}
				}
				setState(25);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(26);
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
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(31);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(28);
				shape_stmt();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(29);
				text_stmt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(30);
				animation_stmt();
				}
				break;
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
		public TerminalNode ID() { return getToken(DSLParser.ID, 0); }
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
	}

	public final Shape_stmtContext shape_stmt() throws RecognitionException {
		Shape_stmtContext _localctx = new Shape_stmtContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_shape_stmt);
		int _la;
		try {
			setState(73);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(33);
				match(ID);
				setState(34);
				match(T__0);
				setState(35);
				match(T__1);
				setState(36);
				match(T__2);
				setState(37);
				position();
				setState(38);
				match(T__3);
				setState(39);
				number();
				setState(41);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__22) {
					{
					setState(40);
					color();
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(43);
				match(ID);
				setState(44);
				match(T__0);
				setState(45);
				match(T__4);
				setState(46);
				match(T__2);
				setState(47);
				position();
				setState(48);
				match(T__5);
				setState(49);
				number();
				setState(50);
				match(T__6);
				setState(51);
				number();
				setState(53);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__22) {
					{
					setState(52);
					color();
					}
				}

				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(55);
				match(ID);
				setState(56);
				match(T__0);
				setState(57);
				match(T__7);
				setState(58);
				match(T__2);
				setState(59);
				position();
				setState(60);
				match(T__8);
				setState(61);
				number();
				setState(63);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__22) {
					{
					setState(62);
					color();
					}
				}

				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(65);
				match(ID);
				setState(66);
				match(T__0);
				setState(67);
				match(T__9);
				setState(68);
				match(T__2);
				setState(69);
				position();
				setState(71);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__22) {
					{
					setState(70);
					color();
					}
				}

				}
				break;
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
		public TerminalNode ID() { return getToken(DSLParser.ID, 0); }
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
	}

	public final Text_stmtContext text_stmt() throws RecognitionException {
		Text_stmtContext _localctx = new Text_stmtContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_text_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			match(ID);
			setState(76);
			match(T__0);
			setState(77);
			match(T__10);
			setState(78);
			match(STRING);
			setState(79);
			match(T__2);
			setState(80);
			position();
			setState(82);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__8) {
				{
				setState(81);
				size();
				}
			}

			setState(85);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__22) {
				{
				setState(84);
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
	}

	public final Animation_stmtContext animation_stmt() throws RecognitionException {
		Animation_stmtContext _localctx = new Animation_stmtContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_animation_stmt);
		int _la;
		try {
			setState(122);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__11:
				enterOuterAlt(_localctx, 1);
				{
				setState(87);
				match(T__11);
				setState(88);
				match(ID);
				setState(89);
				match(T__12);
				setState(90);
				position();
				setState(92);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__23) {
					{
					setState(91);
					duration();
					}
				}

				}
				break;
			case T__13:
				enterOuterAlt(_localctx, 2);
				{
				setState(94);
				match(T__13);
				setState(95);
				match(ID);
				setState(97);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__23) {
					{
					setState(96);
					duration();
					}
				}

				}
				break;
			case T__14:
				enterOuterAlt(_localctx, 3);
				{
				setState(99);
				match(T__14);
				setState(100);
				match(ID);
				setState(102);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__23) {
					{
					setState(101);
					duration();
					}
				}

				}
				break;
			case T__15:
				enterOuterAlt(_localctx, 4);
				{
				setState(104);
				match(T__15);
				setState(105);
				match(ID);
				setState(106);
				match(T__12);
				setState(107);
				number();
				setState(109);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__23) {
					{
					setState(108);
					duration();
					}
				}

				}
				break;
			case T__16:
				enterOuterAlt(_localctx, 5);
				{
				setState(111);
				match(T__16);
				setState(112);
				match(ID);
				setState(113);
				match(T__17);
				setState(114);
				number();
				setState(117);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__18) {
					{
					setState(115);
					match(T__18);
					setState(116);
					position();
					}
				}

				setState(120);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__23) {
					{
					setState(119);
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
	}

	public final PositionContext position() throws RecognitionException {
		PositionContext _localctx = new PositionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_position);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(124);
			match(T__19);
			setState(125);
			number();
			setState(126);
			match(T__20);
			setState(127);
			number();
			setState(128);
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
	public static class ColorContext extends ParserRuleContext {
		public TerminalNode COLOR() { return getToken(DSLParser.COLOR, 0); }
		public ColorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_color; }
	}

	public final ColorContext color() throws RecognitionException {
		ColorContext _localctx = new ColorContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_color);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(130);
			match(T__22);
			setState(131);
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
	}

	public final SizeContext size() throws RecognitionException {
		SizeContext _localctx = new SizeContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_size);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			match(T__8);
			setState(134);
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
	}

	public final DurationContext duration() throws RecognitionException {
		DurationContext _localctx = new DurationContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_duration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
			match(T__23);
			setState(137);
			number();
			setState(138);
			match(T__24);
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
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_number);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(140);
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
		"\u0004\u0001 \u008f\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0001\u0000\u0005\u0000\u0016\b\u0000\n\u0000"+
		"\f\u0000\u0019\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0003\u0001 \b\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002"+
		"*\b\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002"+
		"6\b\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002@\b\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002"+
		"H\b\u0002\u0003\u0002J\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003S\b\u0003\u0001"+
		"\u0003\u0003\u0003V\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0003\u0004]\b\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0003\u0004b\b\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003"+
		"\u0004g\b\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0003\u0004n\b\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0003\u0004v\b\u0004\u0001\u0004\u0003"+
		"\u0004y\b\u0004\u0003\u0004{\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\t\u0001\t\u0001\t\u0000\u0000\n\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010"+
		"\u0012\u0000\u0000\u009a\u0000\u0017\u0001\u0000\u0000\u0000\u0002\u001f"+
		"\u0001\u0000\u0000\u0000\u0004I\u0001\u0000\u0000\u0000\u0006K\u0001\u0000"+
		"\u0000\u0000\bz\u0001\u0000\u0000\u0000\n|\u0001\u0000\u0000\u0000\f\u0082"+
		"\u0001\u0000\u0000\u0000\u000e\u0085\u0001\u0000\u0000\u0000\u0010\u0088"+
		"\u0001\u0000\u0000\u0000\u0012\u008c\u0001\u0000\u0000\u0000\u0014\u0016"+
		"\u0003\u0002\u0001\u0000\u0015\u0014\u0001\u0000\u0000\u0000\u0016\u0019"+
		"\u0001\u0000\u0000\u0000\u0017\u0015\u0001\u0000\u0000\u0000\u0017\u0018"+
		"\u0001\u0000\u0000\u0000\u0018\u001a\u0001\u0000\u0000\u0000\u0019\u0017"+
		"\u0001\u0000\u0000\u0000\u001a\u001b\u0005\u0000\u0000\u0001\u001b\u0001"+
		"\u0001\u0000\u0000\u0000\u001c \u0003\u0004\u0002\u0000\u001d \u0003\u0006"+
		"\u0003\u0000\u001e \u0003\b\u0004\u0000\u001f\u001c\u0001\u0000\u0000"+
		"\u0000\u001f\u001d\u0001\u0000\u0000\u0000\u001f\u001e\u0001\u0000\u0000"+
		"\u0000 \u0003\u0001\u0000\u0000\u0000!\"\u0005\u001c\u0000\u0000\"#\u0005"+
		"\u0001\u0000\u0000#$\u0005\u0002\u0000\u0000$%\u0005\u0003\u0000\u0000"+
		"%&\u0003\n\u0005\u0000&\'\u0005\u0004\u0000\u0000\')\u0003\u0012\t\u0000"+
		"(*\u0003\f\u0006\u0000)(\u0001\u0000\u0000\u0000)*\u0001\u0000\u0000\u0000"+
		"*J\u0001\u0000\u0000\u0000+,\u0005\u001c\u0000\u0000,-\u0005\u0001\u0000"+
		"\u0000-.\u0005\u0005\u0000\u0000./\u0005\u0003\u0000\u0000/0\u0003\n\u0005"+
		"\u000001\u0005\u0006\u0000\u000012\u0003\u0012\t\u000023\u0005\u0007\u0000"+
		"\u000035\u0003\u0012\t\u000046\u0003\f\u0006\u000054\u0001\u0000\u0000"+
		"\u000056\u0001\u0000\u0000\u00006J\u0001\u0000\u0000\u000078\u0005\u001c"+
		"\u0000\u000089\u0005\u0001\u0000\u00009:\u0005\b\u0000\u0000:;\u0005\u0003"+
		"\u0000\u0000;<\u0003\n\u0005\u0000<=\u0005\t\u0000\u0000=?\u0003\u0012"+
		"\t\u0000>@\u0003\f\u0006\u0000?>\u0001\u0000\u0000\u0000?@\u0001\u0000"+
		"\u0000\u0000@J\u0001\u0000\u0000\u0000AB\u0005\u001c\u0000\u0000BC\u0005"+
		"\u0001\u0000\u0000CD\u0005\n\u0000\u0000DE\u0005\u0003\u0000\u0000EG\u0003"+
		"\n\u0005\u0000FH\u0003\f\u0006\u0000GF\u0001\u0000\u0000\u0000GH\u0001"+
		"\u0000\u0000\u0000HJ\u0001\u0000\u0000\u0000I!\u0001\u0000\u0000\u0000"+
		"I+\u0001\u0000\u0000\u0000I7\u0001\u0000\u0000\u0000IA\u0001\u0000\u0000"+
		"\u0000J\u0005\u0001\u0000\u0000\u0000KL\u0005\u001c\u0000\u0000LM\u0005"+
		"\u0001\u0000\u0000MN\u0005\u000b\u0000\u0000NO\u0005\u001a\u0000\u0000"+
		"OP\u0005\u0003\u0000\u0000PR\u0003\n\u0005\u0000QS\u0003\u000e\u0007\u0000"+
		"RQ\u0001\u0000\u0000\u0000RS\u0001\u0000\u0000\u0000SU\u0001\u0000\u0000"+
		"\u0000TV\u0003\f\u0006\u0000UT\u0001\u0000\u0000\u0000UV\u0001\u0000\u0000"+
		"\u0000V\u0007\u0001\u0000\u0000\u0000WX\u0005\f\u0000\u0000XY\u0005\u001c"+
		"\u0000\u0000YZ\u0005\r\u0000\u0000Z\\\u0003\n\u0005\u0000[]\u0003\u0010"+
		"\b\u0000\\[\u0001\u0000\u0000\u0000\\]\u0001\u0000\u0000\u0000]{\u0001"+
		"\u0000\u0000\u0000^_\u0005\u000e\u0000\u0000_a\u0005\u001c\u0000\u0000"+
		"`b\u0003\u0010\b\u0000a`\u0001\u0000\u0000\u0000ab\u0001\u0000\u0000\u0000"+
		"b{\u0001\u0000\u0000\u0000cd\u0005\u000f\u0000\u0000df\u0005\u001c\u0000"+
		"\u0000eg\u0003\u0010\b\u0000fe\u0001\u0000\u0000\u0000fg\u0001\u0000\u0000"+
		"\u0000g{\u0001\u0000\u0000\u0000hi\u0005\u0010\u0000\u0000ij\u0005\u001c"+
		"\u0000\u0000jk\u0005\r\u0000\u0000km\u0003\u0012\t\u0000ln\u0003\u0010"+
		"\b\u0000ml\u0001\u0000\u0000\u0000mn\u0001\u0000\u0000\u0000n{\u0001\u0000"+
		"\u0000\u0000op\u0005\u0011\u0000\u0000pq\u0005\u001c\u0000\u0000qr\u0005"+
		"\u0012\u0000\u0000ru\u0003\u0012\t\u0000st\u0005\u0013\u0000\u0000tv\u0003"+
		"\n\u0005\u0000us\u0001\u0000\u0000\u0000uv\u0001\u0000\u0000\u0000vx\u0001"+
		"\u0000\u0000\u0000wy\u0003\u0010\b\u0000xw\u0001\u0000\u0000\u0000xy\u0001"+
		"\u0000\u0000\u0000y{\u0001\u0000\u0000\u0000zW\u0001\u0000\u0000\u0000"+
		"z^\u0001\u0000\u0000\u0000zc\u0001\u0000\u0000\u0000zh\u0001\u0000\u0000"+
		"\u0000zo\u0001\u0000\u0000\u0000{\t\u0001\u0000\u0000\u0000|}\u0005\u0014"+
		"\u0000\u0000}~\u0003\u0012\t\u0000~\u007f\u0005\u0015\u0000\u0000\u007f"+
		"\u0080\u0003\u0012\t\u0000\u0080\u0081\u0005\u0016\u0000\u0000\u0081\u000b"+
		"\u0001\u0000\u0000\u0000\u0082\u0083\u0005\u0017\u0000\u0000\u0083\u0084"+
		"\u0005\u001b\u0000\u0000\u0084\r\u0001\u0000\u0000\u0000\u0085\u0086\u0005"+
		"\t\u0000\u0000\u0086\u0087\u0003\u0012\t\u0000\u0087\u000f\u0001\u0000"+
		"\u0000\u0000\u0088\u0089\u0005\u0018\u0000\u0000\u0089\u008a\u0003\u0012"+
		"\t\u0000\u008a\u008b\u0005\u0019\u0000\u0000\u008b\u0011\u0001\u0000\u0000"+
		"\u0000\u008c\u008d\u0005\u001d\u0000\u0000\u008d\u0013\u0001\u0000\u0000"+
		"\u0000\u0010\u0017\u001f)5?GIRU\\afmuxz";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}