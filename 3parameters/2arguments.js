// JavaScript has always allowed passing a variable number of arguments to
// functions, but receiving a variable number of parameters has been messy
// until recently. TRADITIONAL, the special arguments keyword is used to process
// the parameters, like so:

const max = function() {
    console.log(arguments instanceof Array);
    let large = arguments[0];
    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] > large) {
            large = arguments[i];
        } 
    }
    return large;
};
console.log(max(2, 1, 7, 4));


// While in the past arguments has been used extensively in JavaScript, there are
// many issues with its use, as we see in this example:
// • The method signature does not convey the intent—worse, it’s misleading.
// While it appears that the function does not take any arguments, the
// actions of the implementation are quite contrary to that.
// • arguments is an Array wannabe—it may be used like an Array, but only on
// the surface; it’s largely deficient in its capabilities.
// • The code is noisy and can’t make use of more elegant solutions that may
// be used if arguments were an Array.