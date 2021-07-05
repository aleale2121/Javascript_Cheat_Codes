
const greet = 'dude';
console.log(greet);
greet[0] = 'r';
console.log(greet);


// A constant variable named greet is given a value dude at the start of the function. Then we change the value of the first element in the string instance. Let’s
// take a look at the output from the code:
// dude
// dude
// The value held in the object referenced by the greet variable is the same before
// and after the change. Strangely, the change had no effect at all. That’s because
// objects of string are immutable in JavaScript.

// JavaScript silently ignored the change to the immutable object instead of
// yelling out—it treats us like we treat our guests. We can change this behavior
// by including the 'use strict';