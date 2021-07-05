//no declaration for haha , so js makes it global variable

const oops = function() {
    haha = 2; 
    console.log(haha); 
};
oops();
console.log(haha);

// let haha = 2;
// Then we’ll get a failure at runtime that haha is not defined, thus confirming the
// variable haha is a local variable within the function oops and is no longer global.
const oops2 = function() {
    let haha2 = 2; 
    console.log(haha2); 
};
oops2();
console.log(haha2);
