// The const keyword is used to define a variable whose value shouldn't change.
// If you intend to modify the value in a variable, then define it using let; otherwise, define it using const.

let price = 120.25;
const tax = 0.825;
price = 110.12;
tax = 1.25;

// tax = 1.25;
// ^
// TypeError: Assignment to constant variable.