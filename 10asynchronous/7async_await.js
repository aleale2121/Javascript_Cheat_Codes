/*there’s one drawback to
using promises. The structure of synchronous imperative code is drastically
different from the structure of asynchronous code that uses promises. Unlike
the sequential code that flows naturally from one statement or expression to
the next, we have to get our head wrapped around the then() and the catch()
sequence.*/

/**
 The async and await feature was introduced to keep the code structure identical
between synchronous and asynchronous code. This does not affect the way
we write asynchronous functions, but it largely changes the way we use them.
There are two rules to using this feature:
• To be able to use an asynchronous function as if it were a synchronous
function, optionally mark the promise-returning asynchronous function
with the async keyword.
• To call the asynchronous function as if it were a synchronous function,
place the await keyword right in front of a c
 */

const computeSync = function (number) {
    if (number < 0) {
        throw new Error('no negative, please');
    }
    return number * 2;
};
const computeAsync = function (number) {
    if (number < 0) {
        return Promise.reject('no negative, please');
    }
    return Promise.resolve(number * 2);
};


const callComputeSync = function (number) {
    try {
        const result = computeSync(number);
        console.log(`Result is ${result}`);
    } catch (ex) {
        console.log(ex.message);
    }
}

const callComputeAsync = function (number) {
    computeAsync(number)
        .then(result => console.log(`Result is ${result}`))
        .catch(err => console.log(err));
}

const callCompute = async function (number) {
    try {
        const result = await computeAsync(number);
        console.log(`Result is ${result}`);
    } catch (ex) {
        console.log(ex);
    }
}
/**
 The only difference between callComputeSync() and callCompute() is that the second
function is marked as async and, where the first function called computeSync() ,
the second calls computeAsync() with the keyword await prefixed.
When an asynchronous function call is prefixed with await , JavaScript will
make the call to the function and suspend execution of the current function
flow, to wait for the promise to resolve or reject. If the promise resolves, then
it moves forward. If the promise rejects, then it jumps into the catch block of
the surrounding try - catch block. The suspension of execution upon reaching
an await is much like the suspension of execution when execution reaches the
yield keyword
 */