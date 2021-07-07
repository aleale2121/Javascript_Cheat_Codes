const createObject = (name) => { firstName: name };
console.log(createObject('George'));
/*
That looks benign—what could possibly go wrong? The arrow function takes
name as a parameter and returns an object literal, which has a firstName property with the given name as value. Let’s run the code, in good faith, and look
at the output:
undefined 

JavaScript notices the body of the arrow function
starts with { and so decides it’s a compound body instead of a single-line body.
Once it steps into the body, it notices there’s no return, so it returns undefined. But
what about the firstName: name—what did JavaScript do with that? JavaScript
decided to treat firstName: as a label to the expression name. But I rarely use labels,”
you may protest. Well, we just did in this example, according to JavaScript.
One solution to this issue is to wrap the right side of => with a return {...}, but
instead we can tell JavaScript that { is not the start of a compound body but
part of an expression. To do this, use (), like so: */

const createObject = (name) => ({ firstName: name });
console.log(createObject('George'));


/*

{ firstName: 'George' }
When JavaScript sees ( right after =>, as opposed to {, it decides the body is
a single-line expression or statement. So by placing the { after (, we are able
to convey the intent in a way JavaScript understands as we meant. That’s
much better—well, not really, but that’s the workaround.*/