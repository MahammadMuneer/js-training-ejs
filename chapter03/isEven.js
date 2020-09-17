/*Recursion
We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
another way to define whether a positive whole number is even or odd:
    • Zero is even.
    • One is odd.
    • For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this? */
"use strict";

function isEven(a) {
    let b;
    if (a === 0) {
        b = 0;
    } else if (a === 1 || a === -1) {
        b = 1;
    } else {
        a = a > 0 ? a : -a;
        b = isEven(a - 2);
    }
    
    if (b === 0) {
        console.log(true);
    } else if (b === 1) {
        console.log(false);
    }
}

isEven(-5);