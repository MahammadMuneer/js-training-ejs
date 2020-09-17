/* write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). */
"use strict";

function countBb(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "B" || s[i] === "b") {
            count++;
        }
    }
    return count;
}

console.log(countBb("BabaBa"));