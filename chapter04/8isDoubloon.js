/* 8
 A word is said to be a “doubloon” if every letter that appears in the word appears exactly twice. 
 Here are some example doubloons found in the dictionary:

Abba, Anna, appall, appearer, appeases, arraigning, beriberi, bilabial, boob, Caucasus, coco, 
Dada, deed, Emmett, Hannah, horseshoer, intestines, Isis, mama, Mimi, murmur, noon, Otto, papa, 
peep, reappear, redder, sees, Shanghaiings, Toto
Write a function called isDoubloon that takes a string and checks whether it is a doubloon. 
To ignore case, invoke the toLowerCase method before checking.
*/
"use strict";
let a = "Murmur";
let b = "Murmun";

function isDoubloon(s) {

    s = s.toLowerCase();
    let k = 0;

    for (let i = 0; i < s.length; i++) {

        for (let j = 0; j < s.length; j++) {

            if (s[i] === s[j]) {
                k++;
            }
        }
    }

    if (k === 2 * s.length) {
        return true;
    }
    return false;
}

console.log(isDoubloon(a));
console.log(isDoubloon(b));