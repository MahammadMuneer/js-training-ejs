/*
Write a function named rightJustify that takes a string named s as a parameter 
and prints the string with enough leading spaces so that the last letter of the string is in column 70 of the display.
Hint: Use string concatenation and loop. Also, string has a property called length.
Ex:
>rightJustify('monty')
                                                                monty
*/
"use strict";

let rightJustify = function (s) {
    let length = s.length;

    for (let i = 0; i < 70 - length; i++) {
        s = " " + s;
    }

    console.log(s);
}

rightJustify('Muneer');