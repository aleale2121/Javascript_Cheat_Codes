/**
 * The all() static method of promise takes an array of promises and passes an
array of resolved results to the then() function when all promises resolve. If
any one of the given promises is rejected, then the then() function is not called;
the catch() function is used instead.
 */

'use strict';

const cluster = require('cluster');
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const port = 8084;
const number_of_processes = 8;

const isPrime = function (number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return number > 1;
};

const countNumberOfPrimes = function (number) {
    let count = 0;

    for (let i = 1; i <= number; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    return count;
};

const handler = function (request, response) {
    const params = querystring.parse(url.parse(request.url).query);

    const number = parseInt(params.number);

    const count = countNumberOfPrimes(number);

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    return response.end(`${count}`);
};

if (cluster.isMaster) {
    for (let i = 0; i < number_of_processes; i++) {
        cluster.fork();
    }
} else {
    http.createServer(handler).listen(port);
}

/**
 This example shows a small HTTP server that runs in node.js . The isPrime()
function returns a boolean result of true or false depending on whether or not
the given number is a prime number. It has been written intentionally to be
slow or time consuming. The countNumberOfPrimes() function returns the number
of prime numbers between 1 and the given number . The handler() function parses
the query string from an HTTP request, extracts the number parameter, com-
putes the number of primes in the range 1 to that number, and sends the
result via the HTTP response. The code, when started, runs a cluster of eight
processes that can process the incoming requests concurrently.
 */