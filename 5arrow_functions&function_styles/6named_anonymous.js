setTimeout(function repeat(count) {
    console.log('called...');
    if(count > 1)
    setTimeout(repeat.bind(null, count - 1), 1000);
 }.bind(null, 5), 1000);

//  The function passed as an argument to the setTimeout() function has a name,
// repeat. This name is useful to make recursive calls to it.

const repeat = function repeat(count) {
    console.log('called...');
    if(count > 1)
    setTimeout(repeat.bind(null, count - 1), 1000);
};
setTimeout(repeat.bind(null, 5), 1000);

// Unlike traditional functions, arrow functions can’t be named—they’re truly
// anonymous. Arrow functions can be stored into a variable, but we can’t give
// them a reliable name like we can non-arrow functions.