// Symbol is a new primitive type in JavaScript
// intended for limited specialized use. Symbols can be used for three distinct
// purposes:
// • To define properties for objects in such a way they don’t appear during
// normal iteration—these properties are not private; they’re just not easily
// discovered like other properties.
// • To easily define a global registry or dictionary of objects.
// • To define some special well-known methods in objects; this feature, which
// fills the void of interfaces, is arguably one of the most important purposes
// of Symbol.

//Hidden Properties

// if you like for a property to store some special data, like
// metadata about an object, that should not be visible using normal iteration,
// then you may hide it as a Symbol property.

const age = Symbol('ageValue');
const email = 'emailValue';
const sam = {
    first: 'Sam',
    [email]: 'sam@example.com',
    [age]: 2
};

// age is defined as a Symbol using the Symbol() function. The argument passed to
// this function has no real use other than for debugging purposes. A Symbol
// created using this function is unique and distinct from any other Symbol created using the function. 
// Symbols can’t be created using the new operator.

console.log('iterating over properties:');
for(const property in sam) {
    console.log(property + ' : ' + sam[property]);
}
console.log('list of property names:');
console.log(Object.getOwnPropertyNames(sam));


// iterating over properties:
// first : Sam
// emailValue : sam@example.com
// list of property names:
// [ 'first', 'emailValue' ]

