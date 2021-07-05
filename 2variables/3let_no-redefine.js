'use strict';
//BROKEN_CODE
let max = 100;
console.log(max);
let max = 200;
console.log(max);

// The compiler gives an error that max can’t be redefined, as we see in
// the output:
// let max


// What if we define a variable using var and then try to redefine it using let or
// vice versa? 
// First, we should avoid such immoral thoughts—no reason to use
// var anymore.
//  Second, JavaScript will not permit redefining a variable when
// let is used in the original definition or in the redefinition.