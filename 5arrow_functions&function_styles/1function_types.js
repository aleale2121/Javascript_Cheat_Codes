// A named function uses the function keyword followed by the name of the
// function. For example, the following code defines a function named sqr:
function sqr(n) { return n * n; }

// An anonymous function has the same structure, except it does not have a
// name—it’s anonymous. An anonymous function can be passed to another
// function as an argument or stored into a variable. For example, here’s an
// anonymous function that is stored into a variable named sqr:
const sqr = function(n) { return n * n; };


//An arrow (=>) separates the parameter list from the short body of
//the function.

const sqr = (n) => n * n;