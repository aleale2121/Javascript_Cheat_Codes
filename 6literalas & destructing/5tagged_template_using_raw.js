// let’s make use of a built-in tagged template function called raw(). Suppose we want to create
// a string with some embedded special characters. In the next example we create
// a regular string, but by escaping each special character with a backslash.

console.log('some special characters: \\ \\n \\b \'');
// The output from this code is
// some special characters: \ \n \b '

console.log("some special characters: \ \n \b '");

// That’s less noisy. By using a double quotes, we were able to include the single
// quote with no backslash. That’s the only good part of this version. Getting
// rid of the backslash for other special characters, sadly, does not help, as we
// see from the output:
// some special characters:


// To achieve the desired result while keeping the code less noisy, instead of
// using a regular string in the previous version we can use a template literal
// and tag it with the String class’s raw() method. Let’s change the previous code
// to use template literals and the raw tag:
console.log(String.raw`some special characters: \ \n \b '`);
// Even though a tag is written as a function, we do not invoke it like a function.
// Instead we tag a template literal by placing the tag literally in front of the
// template literal—no parentheses.
// The string placed inside the template literal does not have extra backslashes.
// But the output created from this version is the same as the output from the
// first version where we used the extra backslashes:
// some special characters: \ \n \b '