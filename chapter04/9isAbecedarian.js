/* 9
A word is said to be “abecedarian” if the letters in the word appear in alphabetical order. 
For example, the following are all six-letter English abecedarian words:

abdest, acknow, acorsy, adempt, adipsy, agnosy, befist, behint, beknow, 
bijoux, biopsy, cestuy, chintz, deflux, dehors, dehort, deinos, diluvy, dimpsy
Write a function called isAbecedarian that takes a String and returns a boolean indicating whether the word is abecedarian
*/
"use strict";
let a = "deinos";
let b = "edinos";

function isAbecedarian(s) {

    for (let i = 0; i < s.length; i++) {

        if (s[i + 1] < s[i]) {
            return false;
        }
    }
    return true;
}

console.log(isAbecedarian(a));
console.log(isAbecedarian(b));