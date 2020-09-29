/* 6
Two words are anagrams if you can rearrange the letters from one to spell the other.
 Write a function called isAnagram that takes two strings and returns true if they are anagrams.
 */
"use strict";

console.log(isAnagram("silent", "listen"));
console.log(isAnagram("bat", "bar"));

function isAnagram(s1, s2) {

    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    return sortString(s1) === sortString(s2);
}


function sortString(string) {
    return string.split("").sort().join("");
}
