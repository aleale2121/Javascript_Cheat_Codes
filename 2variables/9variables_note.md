Safer Code with let and const
var does not have block scope and, in the past, that led developers to use a
JavaScript design pattern known as Immediately Invoked Function Expression
(IIFE) or the Self-Executing Anonymous Function. This pattern was also used
to hide variables and functions from outside visibility. In this pattern, lines of
code are wrapped inside an anonymous function that is immediately executed.
For example, in the following code, the variable sqrt defined within the block
is hoisted to the top of the file and becomes unintentionally available outside
of the intended scope.
//BROKEN CODE
'use strict';
var result = 0;
Chapter 2. Variables and Constants • 22
report erratum • discuss
for(var i = 0; i < 5; i++) {
var sqrt = Math.sqrt(i);
result += sqrt;
}
console.log(result);
console.log(sqrt); //sqrt is visible here, though not intended
To avoid issues like this, the IIFE design pattern was often used. For example,
let’s use the pattern to implement the previous code:
//BROKEN CODE
'use strict';
var result = (function() {
var result = 0;
for(var i = 0; i < 5; i++) {
var sqrt = Math.sqrt(i);
result += sqrt;
}
return result;
})();
console.log(result);
console.log(sqrt); //ERROR because sqrt is not visible here,
//that's the desired behavior
There’s a reduced need for this pattern in ES6 and beyond. That’s because
let and const have block scope. Furthermore, as we discuss in Chapter 9, Using
Modules, on page 155, modules have restricted visibility. Where you may have
used the IIFE design pattern in the past to limit variables from being hoisted,
you can rely instead on the language features to limit the scope. This greatly
reduces the need to wrap lines of code in anonymous functions that are
immediately executed. We can instead enjoy less ceremony, and write fewer
lines of code—code that is more intuitive and less error prone.
Prefer const over let
We saw that JavaScript has three options to define variables: var, let, and const.
When writing new code or refactoring existing code, take some time to replace
the old way of declaring with var with the modern replacements let or const.
Here are a few rules to follow when working with variables:
• Don’t use var
• Use const wherever possible
• Use let only where mutability is needed

Prefer const over let
In the industry, many developers tend to lean toward let and often assume
that const may not be an option. For instance, when writing a for loop, consider
whether const is suitable instead of let.
const is the go to keyword to define variables and let should be more of an
exception. There are many benefits to using const instead of let:
• Code is less prone to errors.
• Code is easier to reason about.
• The code prevents accidental or unintentional change to variables.
• The code is safe to use in functional style code or with arrow functions
