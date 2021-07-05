'use strict';
let factor = 2;
let product = function(number) {
    return number * factor;
};
factor = 0;
console.log(product(4));

// let does not permit redefinition of variables, but it allows changing the value
// held in the variable.

// You might think that the result of the call to produce(4) should be 8. That would
// have been true if the value of factor were captured at the time of the definition
// of the inner function. However, the variable factor in the inner function is
// instead bound directly to the variable factor in the outer. As a result the call
// to product(4) will return 0. In any case, though, the code poses a cognitive load
// on any developer who has to read and/or maintain this code.
// If a function will have access to variables defined outside its immediate scope,
// it’s better to make those variables immutable. Not doing so may lead to confusion and error.
// Mutability is common in imperative programming but is taboo in functional
// programming. When defining a variable, you have to decide whether it should
// be mutable. If you’re in doubt, favor immutability since that’s the safer of the
// two options.