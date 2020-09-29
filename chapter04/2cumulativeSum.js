/* 2
Write a function called cumulativeSum that takes an array of numbers and 
returns the cumulative sum; that is, a new array where the ith element is the sum of the first i+1 elements 
from the original array. For example:

>>> let t = [1, 2, 3]
>>> cumulativeSum(t)
[1, 3, 6]
*/
"use strict";
let a = [1, 2, 3, 4];

function cumulativeSum(array) {

    let sum = 0, cumulative = [];

    for (let i = 0; i < array.length; i++) {
        
        sum += array[i];
        cumulative[i] = sum;
    }
    return cumulative;
}

console.log(cumulativeSum(a));