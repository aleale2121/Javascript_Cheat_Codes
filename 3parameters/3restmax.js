// A rest parameter is defined using the ellipsis (...) to signify that that parameter
// is a placeholder for any number of arguments. The rest parameter directly
// addresses the issues with arguments. First, it stands for the rest of the parameters and so is highly visible in the parameter list. Second, the rest parameter
// is of Array type.

const max = function(...values) {
    console.log(values instanceof Array);
    let large = values[0];
    for(let i = 0; i < values.length; i++) {
        if(values[i] > large) {
            large = values[i];
        } 
    }
    return large;
};
console.log(max(2, 1, 7, 4));

// First, instead of an empty parameter list, we have ...values—the rest parameter name is prefixed with the ellipsis.
// Second, anywhere arguments appeared in the code, now there is values.
// At first sight, the rest parameter greatly improved the method signature and
// left the rest of the function mostly unaltered,