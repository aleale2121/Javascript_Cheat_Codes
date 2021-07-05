// The entries() function of Array returns an iterator, which has the key plus the
// value. Let’s iterate over the iterator returned by entries to get a feel for it.

const names = ['Sara', 'Jake', 'Pete', 'Mark', 'Jill'];
for(const entry of names.entries()) {
    console.log(entry);
}

// [ 0, 'Sara' ]
// [ 1, 'Jake' ]
// [ 2, 'Pete' ]
// [ 3, 'Mark' ]
// [ 4, 'Jill' ]