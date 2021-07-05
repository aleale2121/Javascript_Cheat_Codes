// Variables declared using let have block scope. Their use and visibility is limited
// to the block of code enclosed by the {...} in which they’re defined. Furthermore,
// unlike var, variables defined using let are available only after their point of
// definition. That is, the variables are not hoisted to the top of the function or
// the block in which they’re defined.


'use strict';
//console.log(message); //ERROR if this line is uncommented
console.log('Entering loop');
for(let i = 0; i < 3; i++) {
//console.log(message); //ERROR if this line is uncommented
let message = 'spill ' + i;
}
console.log('Exiting loop');
//console.log(message); //ERROR if this line is uncommented