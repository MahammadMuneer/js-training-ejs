/*The sum of a range
Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers.
As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].*/
"use strict";

function range1(start, end) {
    let a = [];
    for (let i = start; i <= end; i++) {
        a[i - start]=i;
        // OR
        //a.push(i);
    }
    return a;
}

function range2(start, end, step) {
    let a = [];
    if(step === undefined) {
        step = start < end ? 1 : -1;
    } 
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            a.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            a.push(i);
        }
    }
    return a;
}

function sum(array) {
    return array.reduce((acc, cur) => acc + cur);
}

console.log(sum(range1(1,10)));






function range3(start, end) {
    let a = [];
    for (let i = 0; i <= end - start; i++) {
        a[i]=i + start;
    }
    return a;
}