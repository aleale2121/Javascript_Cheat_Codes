const mask = function(texts, ...expressions) {
    const createMask = (text) => '*'.repeat(text.length);
    const maskedText = expressions
    .map((expression, index) =>
    `${texts[index]}${createMask(expression.toString())}`)
    .join('');
    
    const closingText = texts[texts.length - 1];

    return `${maskedText}${closingText}`;

};

const agent = 'Bond';
const organization = 'MI6';
console.log(mask`Hi, I'm ${agent}, with ${organization}.`);


/**
 We iterate over the expressions array using the map() function and, for each
expression, create a string of the text before the expression and a series of *s
of the length of the value, converted to a string, in the expression. Finally we
append to the result the string after the last expression in the template literal.
The previous code produces the following output:
Hi, I'm ****, with ***.
Try changing the template literal passed to the mask tag to different values—an
empty template literal, one with no expressions, one with only expressions,
expressions that are numbers, and so forth.
Since tags may transform template literals into various representations, the
possibilities of its application is endless. Different JavaScript libraries may
use tags for different purposes.
 */