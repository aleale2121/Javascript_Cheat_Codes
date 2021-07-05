const a = '1';
const b = 1;
const c = '1.0';
console.log(a === b);
console.log(b === c);
console.log(a === c);

// We replaced all uses of == with ===. We’re asking JavaScript to perform
// comparison without any coercions, and it reports all three comparisons as
// false—consistently the same result for all three comparisons.