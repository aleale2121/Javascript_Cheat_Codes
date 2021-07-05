// Only primitive values, like number,
// and references to objects are protected from change. The actual object that
// the reference refers to does not receive any protection from the use of const.


// JavaScript const is like final in Java and readonly in C#—all of these protect only
// primitives and references


// To make a reference immutable, use const. However, to make an object itself
// immutable, we need some additional help from JavaScript. see the next js file

const max = 200;
const ok = true;
const nothing = undefined;
const nope = null;
const sam = { first: 'Sam', age: 2 };
//max = 200; //Not allowed
//ok = true; //Not allowed
//nothing = undefined; //Not allowed
//nope = null; //Not allowed
//sam = { first: 'Sam', age: 2 }; //Not allowed
sam.age = 3;