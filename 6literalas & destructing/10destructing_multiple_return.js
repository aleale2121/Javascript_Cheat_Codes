'use strict';
const getPresidentName = function(number) {
    //implemented only for number 6
    return ['John', 'Quincy', 'Adams'];
};

//old style
/*
const president6 = getPresidentName(6);
const firstName = president6[0];
const lastName = president6[2]; */


//using destructing

const [firstName, middleName, lastName] = getPresidentName(6);

//ignoring valuse

const [firstName] = getPresidentName(6);
/*The remaining values in the array would be discarded in this case.
More generally, we can extract only the specific values we care about and
ignore the ones in the positions in between using an empty argument. For
example, we can ignore the middle name and extract only the first and last
names like this:
*/

const [firstName,, lastName] = getPresidentName(6);

/**
 * Extracting More than Available Values
We saw examples of extracting all the values and also extracting fewer values
than available. JavaScript does not get angry if we try to extract more than
what’s available.
 */
const [firstName,, lastName, nickName] = getPresidentName(6);
console.log(nickName);
/*
The getPresidentName() function is returning an array with only three values.
However, in the call we are asking for four values, though we’re ignoring the
second value. Since there are only three values, the variable nickName is
assigned a value of undefined.
*/

//Providing a Default Value

const [firstName,, lastName, nickName='Old Man Eloquent'] =
getPresidentName(6);
console.log(nickName);

//Rest Extraction

const [firstName, ...otherParts] = getPresidentName(6);
console.log("---rest extraction---")
console.log(firstName)
console.log(otherParts)

/*The firstName will now contain the string 'John' and the variable otherParts will
contain the array ['Quincy', 'Adams'].*/

//Extracting Parameter Values
const printFirstAndLastOnly = function([first,, last]) {
    console.log(`first ${first} last ${last}`);
};
printFirstAndLastOnly(['John', 'Q', 'Adams']);
