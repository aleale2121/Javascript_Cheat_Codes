const sam = { name: 'Sam', age: 2 };
console.log(sam);
console.log({...sam, age: 3});
console.log({...sam, age: 4, height: 100 });
console.log(sam);

// { name: 'Sam', age: 2 }
// { name: 'Sam', age: 3 }
// { name: 'Sam', age: 4, height: 100 }
// { name: 'Sam', age: 2 }