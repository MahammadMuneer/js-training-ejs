/*.
Write a recursive function named oddSum that takes a positive odd integer n and 
returns the sum of odd integers from 1 to n. Start with a base case, 
and use temporary variables to debug your solution. 
You might find it helpful to print the value of n each time oddSum is invoked.
*/
"use strict";

let oddSum = function (n) {
    return n == 1 ? 1 : n + oddSum(n - 2);
}
console.log(oddSum(13));