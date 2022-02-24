"use strict";
let string = [];
function PrimeNumber(a) {
    if (typeof a === "number") {
        for (let k = 2; k < a; k++) {
            if (k == 2) {
                string.push(k);
            }
            for (let i = 2; i < k; i++) {
                let b = k % i;
                if (b == 0) {
                    break;
                }
                if (i === k - 1) {
                    string.push(k);
                }
            }
        }
    } else {
        console.log("please enter number")
    }
}
PrimeNumber(200);
console.log(string);