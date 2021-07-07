// The bind() function is useful to attach or curry arguments to functions so that
// the attached values are used in calls to the bound or curried function.

const greet = function(message, name) {
    console.log(message + ' ' + name);
};
const sayHi = greet.bind(null, 'hi');
sayHi('Joe');

// sayHi is a reference to a function that has curried or saved away a value for
// the message parameter of greet(). Later, when sayHi is called, it passes the curried
// value hi to message to the greet() function. The result of the previous code is
// hi Joe


// If we want to curry n parameters, we pass n + 1
// arguments to bind(), and the first argument binds to this. Since arrow functions
// use the lexical this, we can’t bind this if bind() is called on arrow functions. So
// the first parameter of bind() makes little sense when used in the context of
// arrow functions, and so the irrelevant first argument passed is largely ignored.

// While the bind() function may be used to bind this and its parameters, when
// used on an arrow function, for example, anArrowFunc.bind(null, someinput), bind()
// can only bind parameters and not this—the first argument, irrespective of
// whether it is null or something else, is ignored.