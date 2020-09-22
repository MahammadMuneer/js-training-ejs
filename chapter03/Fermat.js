/*
Fermat’s Last Theorem says that there are no positive integers a, b, and c such that
a^n + b^n = c^n 
for any values of n greater than 2.
Write a function named checkFermat that takes four parameters— a, b, c and n—and checks to see if Fermat’s theorem holds. 
If n is greater than 2 and
a^n + b^n = c^n
the program should print, “Holy smokes, Fermat was wrong!” Otherwise the program should print, “No, that doesn’t work.”
*/
"use strict";

let checkFermat = function (a, b, c, n) {

    if (n > 2) {

        for (let i = 1; i < n; i++) {
            a *= a;
            b *= b;
            c *= c;
        }

        if (a + b === c) {
            console.log('Holy smokes, Fermat was wrong!');
        } else {
            console.log('No, that doesn’t work.');
        }

    } else {
        console.log('"n" is not greater than 2, choose another value');
    }
}
checkFermat(3, 4, 5, 6);