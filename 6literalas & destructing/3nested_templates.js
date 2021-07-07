const hours = 14;
const eventX = 'meeting';
console.log(`The ${eventX} will happen ${hours < 12 ? 'in the morning' :
`later in the day, in the ${hours < 20 ? 'evening' : 'night'}`}.`);

//The meeting will happen later in the day, in the evening.

const when = (hrs) =>
hrs < 12 ? 'in the morning' :
`later in the day, in the ${hrs < 20 ? 'evening' : 'night'}`;
console.log(`The ${eventX} will happen ${when(hours)}.`);

/*
If you decide to use nested literals, then inserting line breaks, as in the previous nested example, may help improve readability. That brings us to the next
topic: multiline strings.*/