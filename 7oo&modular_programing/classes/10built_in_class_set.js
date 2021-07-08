/**
     Array 
 * For ordered collection
 * Poor for unorderd collection
 * Poor for to store unique value
 * A set is a unique collection of primitives and objects—duplicates are not
allowed. We can create an empty set and add objects to it, or initialize a set
with the contents of an iterable, like an array
 */

const names = new Set(['Jack', 'Jill', 'Jake', 'Jack', 'Sara']);
console.log(names.size);
names.add('Mike');

names.add('Kate')
.add('Kara');
/*
for(const name of names) {
    console.log(name);
    }*/

names.forEach(name => console.log(name));

console.log("----------------------");
[...names].filter(name => name.startsWith('J'))
.map(name => name.toUpperCase())
.forEach(name => console.log(name));