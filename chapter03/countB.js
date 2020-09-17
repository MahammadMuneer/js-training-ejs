/* Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string. */
"use strict";

function countBs(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "B") {
            count++;
        }
    }
    return count;
}

console.log(countBs("BabaBa"));