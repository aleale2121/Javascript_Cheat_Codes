class MyString extends String {}
class MyArray extends Array {}
const concString = new MyString().concat(new MyString());
const concArray = new MyArray().concat(new MyArray());
console.log(`instanceof MyString?: ${concString instanceof MyString}`);
console.log(`instanceof MyArray?: ${concArray instanceof MyArray}`);

/**
 We took two well-known built-in classes in JavaScript and extended from
each one of them. The instance concString is an instance obtained by calling
the concat() method on an instance of the specialized class MyString. Likewise,
the instance concArray is an instance obtained by calling the same method but
on the specialized class MyArray. Finally, we examine if these two instances
are of the same type as the instance on which the concat() method was called.
Here’s the result of that check:
instanceof MyString?: false
instanceof MyArray?: true
The concat() method of the String class decided to keep the instance it returns
as its own type even though the method was called on a derived instance—how
rude. The Array class, on the other hand, is playing nice, making the returned
instance the same type as the instance on which the method concat() is called.
Curious—how can we implement the behavior like Array’s in our own code?
You’ll see how next.
When implementing a method in a base class, we can
• make the returned instance the same type as the base class
• make the returned instance the same type as the derived class
• let the derived class tell us what the type should be
In the code we saw examples of the first two options, with String disregarding
the derived type and Array creating an instance of the derived type. Although
Array appears to use the second option, in reality it uses the third option. Our
derived class MyArray can tell its base class Array what type of instance concat()
or other methods of Array should create. You’ll soon learn how to specify the
type of instance to use, but first, let’s dig in further to learn how to implement
each one of these options.
 */