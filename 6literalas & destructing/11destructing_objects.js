/*Enhanced object literals  provided a nice way to create an object using
values from variables in lexical scope.

Objectdestructuring is the opposite—it provides an elegant way to extract data from
objects into variables in local or lexical scope.*/

const weight = 'WeightKG';
const sam = {
    name: 'Sam',
    age: 2,
    height: 110,
    address: { street: '404 Missing St.'},
    shipping: { street: '500 NoName St.'},
    [weight]: 15,
    [Symbol.for('favoriteColor')]: 'Orange',
};
//the tiring 
const firstName = sam.name;
const theAge = sam.age;

//using object destraction

const { name: firstName, age: theAge } = sam;

//This extracts the value in the name property into firstName and the value in the
//age property into the theAge variable.

//if we replace sam withteh actual object reference it looks like this
const { name: firstName, age: theAge } = { name: 'Sam', age: 2, height: 110 };


//Extracting to Variables with the Same Name

const { name, age: theAge } = sam;


///Extracting Computed Properties
/**
 To extract the computed properties, we use the [] notation and to the right of
the colon provide a local variable name. In the example, wt is assigned the
value of the computed property [weight] and favColor is assigned the value of
the Symbol property, respectively.
 */
const { [weight]: wt, [Symbol.for('favoriteColor')]: favColor } = sam;

//Assigning Default Values
const { lat, lon, favorite = true} = {lat: 84.45, lon: -114.12};

//Extracting When Passing to a Function

const printInfo = function(person) {
    console.log(`${person.name} is ${person.age} years old`);
};
printInfo(sam);

/*
This is a traditional way of writing—we receive the entire object and use the
dot notation to access the properties we are interested in. If, for instance, we
wanted to access the age property multiple times in the function, then we
would either have to use person.age each time or assign the value of the property to a temporary local variable, such as age, and use that instead of the
dot notation each time.
*/

// Let’s reimplement the printInfo() function to use
// object destructuring.
const printInfo = function({name: theName, age: theAge}) {
    console.log(`${theName} is ${theAge} years old`);
};
printInfo(sam);
/*
There is no difference in calling the function; we still pass the entire object.
However, during the invocation of the function, the two desired properties
name and age are extracted into the variables theName and theAge.
*/

// if we want to keep the local variable names/parameters the same
// name as the properties, we can use the shorthand notation, like so:

const printInfo = function({name, age}) {
    console.log(`${name} is ${age} years old`);
};
//Deep Destructuring

const { name, address: { street } } = sam;

/**the name property, which is a top-level property, is extracted.
In addition, the street property that is nested within the address property is
extracted.
 Use caution; this syntax defines only two variables, name and street.

It does not define the address variable. After these changes, we can access name
and street, but any attempt to access address will result in a variable not
defined” error.
 */

//Dealing with Collisions
/**
 * We managed to extract the street property from address, but what if we wanted
to extract the street properties from both address and shipping? The problem is
not the extraction part, but that it will not make sense to assign two values
simultaneously to a single variable. Thus we have to provide two different
local variable names. We can keep the variable the same as the property for
one of the properties and assign a different name for the other. Alternatively,
we can provide a different variable name than the property name for both
properties.
 */

const { name, address: { street }, shipping: { street: shipStreet } } = sam;

//Extracting into Existing Variables
/*
let theName = '--';
{ name: theName } = sam;

The problem here is that we are expecting things to be consistent, but that’s
too much to expect in our field. The previous code will result in a grim message:

{ name: theName } = sam;
^
SyntaxError: Unexpected token =
JavaScript does not understand the sudden appearance of the assignment
operator after what appears either like a block of code with a label or a
JavaScript object.

*/

/*All we had to do was wrap the extraction code inside a pair of ()—it did not
 take a whole lot to please the interpreter. The semicolon should be outside
 the ().*/
let theName = '--';
({ name: theName } = sam);

//Extracting with …
/**
 * Sometimes we want to copy the whole object, and at the
same time, maybe add new properties, or change the values of existing
properties. Destructuring can do this quite well
 */