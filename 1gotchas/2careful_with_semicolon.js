const compute = function(number) {
    if(number > 5) { 
    return number -
         + 2;

    }
    if(number > 2) { 
        return 
        number * 2; 
        } 
    };
        
    console.log(compute(6));
    console.log(compute(3));

//  In the first return, even though there is no ; on that line, it is legal for + to follow
// number so no ; was inserted on that line. But try changing + 2 to 2 on line 5
// and JavaScript will insert a ; before 2, resulting in an output of 6 instead of
// giving an error for seeing unreachable code.

// Since the second return is followed by a line break, JavaScript automatically
// inserts a ; right after the return, thus returning nothing—that is, undefined, as
// we see from the output: