'use strict';
const greet = 'dude';
console.log(greet);
greet[0] = 'r';
console.log(greet);


// greet[0] = 'r';
// ^
// TypeError: Cannot assign to read only property '0' of string 'dude'