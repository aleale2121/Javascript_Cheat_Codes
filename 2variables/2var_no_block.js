'use strict';
console.log(message);
console.log('Entering loop');
for(var i = 0; i < 3; i++) {
    console.log(message); //visible here, but undefined
    var message = 'spill ' + i;
}
console.log('Exiting loop');
console.log(message);

// The variable message was defined within the loop—what happens in a loop
// should stay in the loop, but vars are not good at keeping secrets (poor encapsulation). The variable spills over the loop and is visible outside the loop—var
// hoists the variable to the top of the function. As a result, both message and
// the loop index variable i are visible throughout the function.
// Not only is the variable, defined using var, visible following the block, it’s also
// visible before the block. In other words, regardless of where in the function
// a variable is defined, it has the scope of the entire function.

//In short, var is a mess; don’t use it.