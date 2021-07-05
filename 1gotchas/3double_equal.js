const a = '1';
const b = 1;
const c = '1.0';
console.log(a == b);
console.log(b == c);
console.log(a == c);

// When comparing a with b and b with c, type coercion was involved before the
// comparison. However, when a and c were compared, a lexical comparison was
// used. Hence we see a different result than what we may otherwise expect.
// In the uncommon situation where you want type coercion before comparison
// for equality, then == is your operator. One situation where == may be a better
// choice than === is when you want to determine if a variable is either null or
// undefined—the check variable == null will yield true if variable is null or undefined and
// may be used instead of variable === null || variable === undefined.

// In most of the situations, however, we generally would want a straight up
// strict equality check, with no type coercions. In that case, use === instead
// of ==. Let’s rework the previous example using the identity strict equality
// operator—that is, ===.