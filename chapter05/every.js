/* EVERYTHING
Analogous to the some method, arrays also have an every method. This one
returns true when the given function returns true for every element in the array.
In a way, some is a version of the || operator that acts on arrays, and every is
like the && operator.
Implement every as a function that takes an array and a predicate function
as parameters. Write two versions, one using a loop and one using the some
method.*/
"use strict";

function every1(array, predicate) {
    for (let element of array) {
        if (!predicate(element)) {
            return false;
        }
    }
    return true;
}

let a = [1,2,3,4,5];
console.log(every2(a, x => x % 2 === 0));

function every2(array, predicate) {
    return !array.some(y => !predicate(y));
}