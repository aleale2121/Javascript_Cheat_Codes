const nameX = 'John Doe';
const message = `Dear ${nameX},
We're delighted to let you know that you have been included in
our routine spam starting with this one.
You can thank us later.
`;
console.log(message);


/*Start the string with a backtick, continue each new line with a line break,
and end the string with the ending backtick. Expressions in the string are
optional.
The output of this code is

Dear John Doe,
We're delighted to let you know that you have been included in
our routine spam starting with this one.
You can thank us later.

Multiline strings preserve indentations, and that can be inconvenient if we
have the template literals in an indented region, like within a function or an
if condition.*/