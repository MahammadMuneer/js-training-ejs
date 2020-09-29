/* 1
Write a function called nestedSum that takes an array of arrays of integers 
and adds up the elements from all of the nested arrays. For example:

>>> let t = [[1, 2], [3], [4, 5, 6]];
>>> nestedSum(t)
21

*/
"use strict";
let a = [[1, 2, 3], [4], [5, 6, 7, 8], [9]];

function nestedSum(array) {

    let sum = 0;

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array[i].length; j++) {

            sum += array[i][j];
        }
    }
    return sum;
}

console.log(nestedSum(a));