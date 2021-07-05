const product = function(first, second = 1, ...moreValues) {
    console.log(first + ', ' + second + ', length:' + moreValues.length);
};

// default parameter may be omitted and the rest parameter may
// receive zero or more values. Since the rest parameter has to be the last, when
// present, there is no way to omit the default parameters if the function also uses
// a rest parameter. So, in short, the default value is pretty useless, unless the
// user wants to use undefined—but we know that results in pungent smelling code.

const notAllowed = function(first, second, ...moreValues = [1, 2, 3]) {}
// If we do not provide any values for the rest parameter, then we want it to
// assume the values [1, 2, 3]. And JavaScript says:
// const notAllowed = function(first, second, ...moreValues = [1, 2, 3]) {}
// ^
// SyntaxError: Rest parameter may not have a default initializer