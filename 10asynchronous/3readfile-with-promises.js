const fs = require('fs-extra');
/*In the countLinesWithText() function, we call the readFile() method from the fs-extra
library. This function returns a promise, which will either resolve with the
content of the given file or reject with an error if something goes wrong. We
apply a series of then() calls to the result of readFile()*/
const countLinesWithText = function (pathToFile) {
    fs.readFile(pathToFile)
        .then(content => content.toString())
        .then(content => content.split('\n'))
        .then(lines => lines.filter(line => line.includes('THIS LINE')))
        .then(lines => lines.length)
        .then(count => checkLineExists(count))
        .then(count => console.log(`Number of lines with THIS LINE is ${count}`))
        .catch(error => console.log(`ERROR: ${pathToFile}, ${error.message}`));
};
/*
The checkLineExists() function throws an exception if count is 0; otherwise it
returns the value of count . Since this function is called from one of the functions
passed to then() , that call to then() will either return a promise that resolves or
rejects, depending on whether checkLineExists() returns or blows up with an
exception, respectively. */
const checkLineExists = function (count) {
    if (count === 0) {
        throw new Error('text does not exist in file');
    }
    return count;
};

countLinesWithText('1readfile-with-promises.js');
countLinesWithText('readfile.js');
countLinesWithText('invalid');
countLinesWithText();
/**
ERROR:undefined, path must be a string or Buffer
ERROR:invalid, ENOENT: no such file or directory, open 'invalid'
Number of lines with THIS LINE is 2
ERROR:readfile.js, text does not exist in file
 */