/*  Here’s an arrow function that just throws an exception in its single-line body:
const mapFunction = () => throw new Error('fail'); //BROKEN CODE
That is also a concise piece of code, but it will not work; the code will produce
the following when run:
SyntaxError: Unexpected token throw

For the body of an arrow function to be a single line, it should be either a
statement that returns nothing or an expression that returns some value—throw
can’t be part of a single-line body. As a workaround, wrap the code snippet
in {}, like so: */
const madFunction = () => { throw new Error('fail'); };