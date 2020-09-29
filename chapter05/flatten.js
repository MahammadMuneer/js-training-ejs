/* Flattening
Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original
arrays. */
"use strict";
let a = [[1,2,3], 4,[5,6]];

function flatten(array) {
    let result = [];
    result = array.reduce((acc, curr) => acc.concat(curr));
    return result;
}

console.log(flatten(a));

/* function flatten(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result = result.concat(array[i]);
    }
    return result;
} */