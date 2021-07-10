console.log('executing right module');
const message = 'right called';
export const right = function() {
    console.log(message);
};

/**
 The contents of this entire file are part of the right module. The constant message
is internal to the module; it isn’t exported and so won’t be visible outside of this
module. Using the export keyword, the module exports a variable named right,
which refers to a function. This function may be used by the users of the right
module through the reference named right. The reference right is the only thing
this module makes visible for the outside world to use. At the top of the file, we
put an informational print statement to signal when the code within the file is
executed. This will help us to clearly see how JavaScript manages loading of files.
 */