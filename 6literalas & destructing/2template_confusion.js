let value = 4;
const msg1 = `The value is ${value}`;
const print = () => `The value is ${value}`;
value = 0;
console.log(msg1);
console.log(print());

//The expressions within template literals are evaluated when the template literal is evaluated.
//As a result, msg1 will contain the value 4.

/*However, since the template literal within the arrow function will be evaluated later, only
when the function is invoked, the value there will be zero. This is because
the value has changed by the time that template literal is evaluated. We can
see this from the output:
The value is 4
The value is 0*/