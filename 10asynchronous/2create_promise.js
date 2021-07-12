'use strict';

const computeSqrtAsync = function(number) {
  if(number < 0) {
    return Promise.reject('no negative number, please.');
  }
  
  if(number === 0) {
    return Promise.resolve(0);
  }
  
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(Math.sqrt(number)), 1000);
  });
};
/**
 The computeSqrtAsync() function returns an instance of promise, but in one of
three different states depending on what’s passed in as a parameter.
If the number passed in is less than 0 , it returns a promise in the rejected state,
created using the reject() static method of Promise .
If it is 0 , then the promise returned is in the resolved state, created using the
resolve() static method of Promise .
For any parameter value greater than 0 , the returned promise is in a pending
state, created using new . The constructor of Promise takes a function as its param-
eter. This function accepts two function references— resolve and reject —which
are used to resolve or reject the promise, respectively. JavaScript will call the
function attached to the constructor,
 */
const forNegative1 = computeSqrtAsync(-1);
const forZero = computeSqrtAsync(0);
const forSixteen = computeSqrtAsync(16);

console.log(forNegative1);
console.log(forZero);
console.log(forSixteen);

/**
The output from running the code shows the different states in addition to
the value of rejection or resolution, if available:
Promise { <rejected> 'no negative number, please.' }
Promise { 0 }
Promise { <pending> }
 */

/**
Whether a promise rejects or resolves immediately or at a later time, the way
to handle the response is just the same. To receive the successful response
if and when a promise resolves, use the then() function on the promise. To
receive the error details from a promise if and when it rejects, use the catch()
function.
 */
const reportOnPromise = function(promise) {
  promise
    .then(result => console.log(`result is ${result}.`))
    .catch(error => console.log(`ERROR: ${error}`));
};

reportOnPromise(forNegative1);
reportOnPromise(forZero);
reportOnPromise(forSixteen);

/*
Here’s the output from these calls:
result is 0.
ERROR: no negative number, please.
result is 4.
 */
