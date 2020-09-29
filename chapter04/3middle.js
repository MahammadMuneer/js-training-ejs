/* 3
Write a function called middle that takes an array and returns a new array that contains 
all but the first and last elements. For example:

>>> let t = [1, 2, 3, 4]
>>> middle(t)
[2, 3]
*/
"use strict";
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function middle(array) {

    let b = array;
    b.pop();
    b.shift();
    return b;
}

console.log(middle(a));