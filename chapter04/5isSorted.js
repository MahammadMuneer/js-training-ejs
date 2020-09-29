/* 5
Write a function called isSorted that takes a list as a parameter and returns true if the list is sorted in ascending order 
and false otherwise. For example:

>>> isSorted([1, 2, 2])
true
>>> isSorted(['b', 'a'])
false
*/
"use strict";
let a = ["b", "c"];
let b = ["c", "b"];

function isSorted(list) {

    for (let i = 0; i < list.length; i++) {

        if (list[i + 1] < list[i]) {
            return false;
        }
    }
    return true;
}

console.log(isSorted(a));
console.log(isSorted(b));

/*
function isSorted1(list) {
    let temp = list;
    if (temp === list.sort()) {
        return true;
    }
    return false;
}
*/
