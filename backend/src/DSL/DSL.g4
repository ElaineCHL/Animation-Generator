grammar DSL;

// Entry point
script        : statement* EOF ;

// Statements
statement
    : shape_stmt
    | group_stmt
    | animation_stmt
    | block_stmt
    | sleep_stmt
    | tts_stmt
    ;

// TTS statement
tts_stmt
    : TTS_COMMENT
    ;

// Shape statements
shape_stmt
    : ID '=' 'circle' 'at' position 'radius' number color?
    | ID '=' 'dot' 'at' position color?
    | ID '=' 'rectangle' 'at' position 'width' number 'height' number color?
    | ID '=' 'square' 'at' position 'size' number color?
    | ID '=' 'triangle' 'at' position 'radius' number color?
    | ID '=' 'line' position 'to' position color?
    | ID '=' 'text' STRING 'at' position size? color?
    ;

// Group statement
group_stmt
    : ID '=' 'group' '{' ID (',' ID)* '}'
    ;

// Animation statements
animation_stmt
    : 'move' ID 'to' position duration?
    | 'fadeIn' ID duration?
    | 'fadeOut' ID duration?
    | 'scale' ID 'to' number duration?
    | 'rotate' ID 'by' number ('around' position)? duration?
    ;

// Block and sleep
block_stmt
    : 'parallel' '{' statement* '}'
    ;

sleep_stmt
    : 'sleep' number 's'
    ;

// Components
position      : '(' number ',' number ')' ;
color         : 'color' COLOR ;
size          : 'size' number ;
duration      : 'over' number 's' ;
number        : NUMBER ;
STRING        : '"' (~["\\] | '\\' .)* '"' ;

// Tokens
COLOR         : 'red' | 'green' | 'blue' | 'yellow' | 'brown' | 'black' | 'white' | 'orange' | 'purple' ;
ID            : [a-zA-Z_][a-zA-Z0-9_]* ;
NUMBER        : '-'? [0-9]+ ('.' [0-9]+)? ;

// TTS comment
TTS_COMMENT   : 'TTS:' ~[\r\n]* ;

// Skip regular comments and whitespace
LINE_COMMENT  : '//' ~[\r\n]* -> skip ;
BLOCK_COMMENT : '/*' .*? '*/' -> skip ;
WS            : [ \t\r\n]+ -> skip ;
