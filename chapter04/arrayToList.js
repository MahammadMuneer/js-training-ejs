/*A list
Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument. */
"use strict";

function arrayToList(array) {
    let list = {};
    for (let i = array.length - 1; i >= 0; i--) {
        if (i === array.length - 1) {
            list = {value : array[i], rest : null};
        } else {
            list = {value : array[i], rest : list};
        }
    }
    return list;
}

let a = [1,2,3,4,5];
console.log(arrayToList(a));
