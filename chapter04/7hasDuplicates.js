/* 7
 Write a function called hasDuplicates that takes an array and returns true 
 if there is any element that appears more than once. It should not modify the original array.
 */
"use strict";
let a = [1, 2, 3, 3, 4, 5];
let b = [1, 2, 3, 4];

function hasDuplicates(array) {

    let k = 0;

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length; j++) {

            if (array[i] === array[j]) {
                k++;
            }
        }
    }
    if (k > array.length) {
        return true;
    }
    return false;
}

console.log(hasDuplicates(a));
console.log(hasDuplicates(b));




/*
function hasDsuplicates(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < a.length; j++) {
            if (i != j) {
                if (a[i] == a[j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
*/