/*
Write a recursive function called power that takes a number x and an integer n and returns x^n.

Hint: A recursive definition of this operation is x^n = x · x^(n−1). Also, remember that anything raised to the zeroth power is 1.

Optional challenge: you can make this method more efficient, when n is even, using x^n = (x^(n/2))^2.
*/
"use strict";

let power = function (x, n) {
    return n == 0 ? 1 : x * power(x, n - 1);
}

console.log(power(3, 3));