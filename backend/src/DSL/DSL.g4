grammar DSL;

// Entry point
script        : statement* EOF ;

// Statements
statement
    : shape_stmt
    | text_stmt
    | animation_stmt
    ;

shape_stmt
    : 'circle' id 'at' position 'radius' number color?
    | 'rectangle' id 'at' position 'width' number 'height' number color?
    | 'triangle' id 'at' position 'size' number color?
    | 'dot' id 'at' position color?
    ;

text_stmt
    : 'text' STRING 'at' position size? color?
    ;

animation_stmt
    : 'move' ID 'to' position duration?
    | 'fadein' ID duration?
    | 'fadeout' ID duration?
    | 'scale' ID 'to' number duration?
    ;

// Components
id            : 'id=' ID ;
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
WS            : [ \t\r\n]+ -> skip ;
