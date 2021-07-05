// The spread operator isn’t limited to the calling side of the rest parameter, like in the call to the
// greet() function. It may be used to spread an array to discrete parameters too,
// even when no rest parameter is involved.

const names1 = ['Laurel', 'Hardy', 'Todd'];
const names2 = ['Rock'];
const sayHello = function(name1, name2) {
console.log('hello ' + name1 + ' and ' + name2);
};
sayHello(...names1);
sayHello(...names2);