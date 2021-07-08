const scores =
new Map([['Sara', 12], ['Bob', 11], ['Jill', 15], ['Bruce', 14]]);
scores.set('Jake', 14);
console.log(scores.size);

for(const [name, score] of scores.entries()) {
    console.log(`${name} : ${score}`);
}
// Instead of using the external iterator, we can also use the internal iterator,
// forEach(), to iterate over the keys and values, but the sequence of parameters
// provided to the function passed to forEach() is rather odd. Let’s take a look at
// an example to iterate and then discuss the parameters.

console.log("--------------");
scores.forEach((score, name) => console.log(`${name} : ${score}`));

// The first parameter received by the function is the value for a key that appears
// as the second parameter. It is more natural to think of receiving key and
// value instead of value and key, but the reason for this sequence is that the
// same forEach() method may be used to iterate over only the values:

scores.forEach(score => console.log(score));
// If you receive only one parameter, that ends up being the value; if you receive
// two parameters, then they stand for value and key for each key-value pair in
// the Map.
// If you like to iterate over only the keys, then use the keys() method, and to get
// an iterable of only the values use the values() method. Finally, to query whether
// a key exists, use the has() method