// write a listToArray function that produces an array from a list. 
"use strict";

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

let b = { value: 1, rest: { value: 2, rest: { value: 3, rest: 0 } } };
console.log(listToArray(b));