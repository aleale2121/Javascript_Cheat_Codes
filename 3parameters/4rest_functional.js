const max = function(...values) {
    return values.reduce((large, e) => large > e ? large : e, values[0]);
 };

//  JavaScript has some reasonable rules for the rest parameter:
// • The rest parameter has to be the last formal parameter.
// • There can be at most one rest parameter in a function’s parameter list.
// • The rest parameter contains only values that have not been given an explicit name.
