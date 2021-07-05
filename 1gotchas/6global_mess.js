const outer = function() {
    for(i = 1; i <= 3; i++) {
        inner();
    }
};
const inner = function() {
    for(i = 1; i <= 5; i++) {
        console.log(i);
    }
};
outer();

// The code does not produce the intended or desired output but instead outputs:
// 1
// 2
// 3
// 4
// 5
// Let’s understand what caused this anomaly in the output. The function outer()
// uses a variable i but without declaring it first. As a result, that variable fell
// into global scope. After setting a value of 1 for i, the outer() function calls the
// inner() function. Sadly, inner() also uses i without declaring it first and so binds
// to the same global variable i. At the end of the call to the inner() function, i has
// a value of 5. When the control flows back to outer(), the variable is way over
// the bounding value of 3 and so the loop terminates after the first iteration.
// Even more alarming, due to the same reason, this code can turn into a nonending program if we change the value 3 to 8 in the outer function.
// Surprise.

// Let’s quickly fix the problem in the previous code—in the two loops, prefix
// the declaration of the variable i with let, like so:
console.log("---------------------------")
const outer2 = function() {
    for(let k = 1; k <= 3; k++) {
        inner2();
    }
};
const inner2 = function() {
    for(let k = 1; k <= 5; k++) {
        console.log(k);
    }
};
outer2();