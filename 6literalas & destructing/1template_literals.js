const name1 = 'Jack';
const name2 = 'Jill';
console.log('Hello ' + name1 + ' and ' + name2);

/* Code with multiple +s often gets unwieldy, unpleasant, hard to maintain, and
 boring to write. This is where template literals come in.

Template literals are strings with embedded expressions. The expressions
may be a single variable, multiple variables with operators, a function call,
or combinations of them—any valid JavaScript expression.
In languages like Ruby and Groovy, single quotes are used for string literals
and double quotes for template literals. Since JavaScript has used both single
and double quotes for string literals, it’s too late to change the behavior or
the semantics of either one. Thus, JavaScript has introduced a new syntax
for template literals: the backtick. */

console.log(`Hello ${name1} and ${name2}`);

/*
use a backslash to embed a backtick within a template literal. For
example, `\`` will result in `. Single and double quotes may also appear within
template literals, like so:*/

const item = 'cake';
console.log(`The kid asked, "how's the ${item}?"`);


/*

Template literals preserve the quotes, as we see from the following output:
The kid asked, "how's the cake?"
The combination of ${ causes template literals to treat what follows as an
expression. The appearance of one
 */

const price = 2;
console.log(`The price of a { symbol is $${price * 0.01 }.`);

/**
 * The output shows that the first { and the first $ appear as is:
The price of a { symbol is $0.01
 */

    /**/

    console.log(`Shout out greetings: ${'hello'.toUpperCase()}`);