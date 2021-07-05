const max = function(a, b) {
    if (a > b) {
    return a;
    }
    return b;
};
console.log(max(1, 3));
console.log(max(4, 2));
console.log(max(2, 7, 1));

// If we passfewer arguments than the number of named parameters, the extra parametersturn up as undefined. 
// If we pass more arguments than the number of parameters, then those are merely ignored.Thus the last argument 1 was ignored in
// the last call to the max() method.