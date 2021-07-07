const printDetails = function(texts, ...expressions) {
    console.log(texts);
    console.log(expressions);
};
const nameX = 'John';
printDetails`Hello ${nameX}, how are you?`;
/** 
The printDetails() function takes two parameters. texts is an array of all the string
literals in the template literal. 

The second argument, expressions, is an array of all the evaluated expressions.
When the printDetails() function is used as a tag on the given template literal,
the texts array will hold two strings: the string part before the expression 
and the string part after the expression. 

The expressions array will hold one value: the result of the expression in the template
literal given, 'John' in this example. The tag function printDetails() does not return
any result and that’s fine. Here’s the output for the code:
[ 'Hello ', ', how are you?' ]
[ 'John' ]

The length of the texts array will always be one more than the length of the
expressions array. If a template literal is empty, then texts will hold one empty
string. If a template literal has only one expression, then the value of the
expression will be the single element in the expressions array, but the texts array
will contain two empty strings—the empty string before the expression and
the empty string after the expression.

*/