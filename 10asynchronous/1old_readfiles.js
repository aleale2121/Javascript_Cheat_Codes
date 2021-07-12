const fs = require('fs');
const displayFileContent = function(pathToFile) {
    const handleFile = function(err, contents) {
        if(err) {
            console.log(err.message);
        } else {
            console.log(contents.toString());
        }
    };
    try {
        fs.readFile(pathToFile, handleFile);
    } catch(ex) {
        console.log(ex.message);
    }
};
/**
 In the displayFileContent() function, we create
a callback handler named handleFile . This callback function takes two parame-
ters: err and contents . That’s the location of the first issue—is it error and data,
or data and then error? There is no standardized order of the parameters;
some functions may send an error first whereas others may send data as the
first argument.
 */

/**
 thin the callback handler we either print the error details or process the
response and print some result. Therein lies the second issue—since we print
the result right here in this handler, this function is hard to reuse. If we wanted
to perform some other operations on the response before printing it, it is quite
hard to extend this code to achieve that. The callback will require a callback to
receive the data—this leads to what’s called callback hell. In other words, call-
backs don’t compose well when a series of callbacks are necessary.
 */

/**
There’s a third issue with the way errors are handled. The callback handler
dealt with the situation when there was an error with the file. However, read-
File() , which is an asynchronous method of fs , may also blow up at the call site
if the first argument is undefined or null . Again, there’s a lack of consistency in
how errors are handled in callbacks.
 */

/**
 Furthermore, instead of printing the error, if we want to propagate the error to the caller, we have to deal with that
in multiple places, within the callback and also in the catch block—messy
 */