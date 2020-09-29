/* Create a function prepend, which takes an element and a list and creates a
new list that adds the element to thefront of the input list. */
"use strict";
function prepend(value, list) {
    return { value, rest: list };
}

/*nth, which takes a list and a number and returns the element at the given
position in thelist (with zero referring to the firstelement) or undefined 
when there is no such element.
If you haven’t already, also write a recursive version of nth.*/

function nth(list, n) {
    if (!list) return undefined;
    else if (n === 0) return list.value;
    else return nth(list.rest, n - 1);
}

console.log(nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: 0 } } }, 0));



function nth2(list, n) {
    let nth = {};
    for (let i = n; i >= 0; i--) {
        nth = list.rest;
    }
    return nth.value;
}