'use strict';

const fs = require('fs-extra');
const request = require('request-promise');

const countPrimes = function (number) {
    if (isNaN(number)) {
        return Promise.reject(`'${number}' is not a number`);
    }

    return request(`http://localhost:8084?number=${number}`)
        .then(count => `Number of primes from 1 to ${number} is ${count}`);
};

const countPrimesForEachLine = function (pathToFile) {
    fs.readFile(pathToFile)
        .then(content => content.toString())
        .then(content => content.split('\n'))
        .then(lines => Promise.all(lines.map(countPrimes)))
        .then(counts => console.log(counts))
        .catch(error => console.log(error));
};

countPrimesForEachLine('numbers.txt');
countPrimesForEachLine('numbers-with-error.txt');

/*
The countPrimes() method receives a number and returns a promise. If the given
parameter is not a number, it immediately returns a promise in the rejected
state. On the other hand, if the given parameter is a number, then it makes
an asynchronous call to the service that computes the number of primes.
*/
/*

For the file with valid numbers in it, the result will be the number of primes
for each line. However, when the second file with invalid input is passed, the
output shows the processing error— all() fails fast when any of the promises
provided to it fail.
'invalid text' is not a number
[ 'Number of primes from 1 to 100 is 25',
'Number of primes from 1 to 1000 is 168',
'Number of primes from 1 to 5000 is 669' ]*/