grammar DSL;

// Entry point
script        : statement* EOF ;

// Statements
statement
    : shape_stmt
    | text_stmt
    | animation_stmt
    | block_stmt
    ;

block_stmt
    : 'parallel' '{' statement* '}'
    ;

shape_stmt
    : ID '=' 'circle' 'at' position 'radius' number color?
    | ID '=' 'dot' 'at' position color?
    | ID '=' 'rectangle' 'at' position 'width' number 'height' number color?
    | ID '=' 'square' 'at' position 'size' number color?
    | ID '=' 'triangle' 'at' position 'radius' number color?
    | ID '=' 'line' position 'to' position color?
    ;

text_stmt
    : ID '=' 'text' STRING 'at' position size? color?
    ;

animation_stmt
    : 'move' ID 'to' position duration?
    | 'fadein' ID duration?
    | 'fadeout' ID duration?
    | 'scale' ID 'to' number duration?
    | 'rotate' ID 'by' number ('around' position)? duration?
    ;

// Components
position      : '(' number ',' number ')' ;
color         : 'color' COLOR ;
size          : 'size' number ;
duration      : 'duration' number 's' ;
number        : NUMBER ;
STRING        : '"' (~["\\] | '\\' .)* '"' ;

// Tokens
COLOR         : 'red' | 'green' | 'blue' | 'yellow' | 'brown' | 'black' | 'white' ;
ID            : [a-zA-Z_][a-zA-Z0-9_]* ;
NUMBER        : '-'? [0-9]+ ('.' [0-9]+)? ;
LINE_COMMENT  : '//' ~[\r\n]* -> skip ;
BLOCK_COMMENT : '/*' .*? '*/' -> skip ;
WS            : [ \t\r\n]+ -> skip ;
