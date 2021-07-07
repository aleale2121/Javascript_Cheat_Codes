// Unlike many object-oriented languages, JavaScript provides prototypal inheritance instead of class-based inheritance. 
// Each class has a prototype that
// can carry common methods and properties for the instances of the class.
// Since classes are traditionally represented as functions, each function has a
// prototype property that refers to the function’s or class’s prototype. However,
// arrow functions don’t have the prototype property.

const aFunc = function() {};
const anArrow = () => {};
console.log(aFunc.prototype);
console.log(anArrow.prototype);

// While the regular function, referenced by aFunc, has a valid prototype, the arrow
// function referenced by anArrow does not, as we see in the output:
// aFunc {}
// undefined