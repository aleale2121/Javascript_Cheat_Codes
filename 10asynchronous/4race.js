/**
 The race() static method of Promise takes an array of promises and returns the
first one to resolve or reject
 */
const createPromise = function (timeInMillis) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(timeInMillis), timeInMillis);
    });
};

const createTimeout = function (timeInMillis) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => reject(`timeout after ${timeInMillis} MS`), timeInMillis);
    });
};

/**
 The createPromise() function returns a promise that resolves after the time given
as a parameter.

The createTimeout() function returns a promise that rejects after
the time given as a parameter.
 */

Promise.race([createPromise(1000), createPromise(2000), createTimeout(3000)])
    .then(result => console.log(`completed after ${result} MS`))
    .catch(error => console.log(`ERROR: ${error}`));
Promise.race([createPromise(3500), createPromise(4000), createTimeout(2000)])
    .then(result => console.log(`completed after ${result} MS`))
    .catch(error => console.log(`ERROR: ${error}`));

/**
 * completed after 1000 MS
 * ERROR: timeout after 2000 MS
 *
 * To the first call to race() , we pass three promises: one that will finish in one
   second, the second that will finish in two seconds, and the third that will time
   out after three seconds. Since the first will finish first, the result reported
   within then() will be the result of this promise.

   To the second call to race() we pass three promises as well, but in this case
   the timeout will occur before the other two promises complete. The catch()
   function will be used in this case instead of the then() function.
 */