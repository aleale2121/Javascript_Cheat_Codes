const sortByTitle = function(books, ascending = true) {
    const multiplier = ascending ? 1 : -1;
    const byTitle = function(book1, book2) {
        return book1.title.localeCompare(book2.title) * multiplier;
    };
    return books.slice().sort(byTitle);
};

const books = [
    { title: 'Who Moved My Cheese' },
    { title: 'Great Expectations' },
    { title: 'The Power of Positive Thinking' }
];
console.log(sortByTitle(books));
console.log(sortByTitle(books, false));
// Within the sortByTitle() function we sort the given books array, but instead of
// calling sort() directly on the array we first use slice() and then sort(). The reason
// for not using sort() directly is that it will modify the array on which it is
// called—changing the input given to a function is a poor programming practice.
// The slice() function makes a copy of the given array and the sort() function then
// sorts the copy, thus not affecting the original array given as input.