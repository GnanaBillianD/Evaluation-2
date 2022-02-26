//Print the prime number
"use strict";
console.log("----------------------prime number-------------------------")
let savePrimeNumber = [];
function PrimeNumber(numbers) {
    if (typeof numbers === "number") {
        for (let loop1 = 2; loop1 < numbers; loop1++) {
            if (loop1 == 2) {
                savePrimeNumber.push(loop1);
            }
            for (let loop2 = 2; loop2 < loop1; loop2++) {
                let saveReminder = loop1 % loop2;
                if (saveReminder == 0) {
                    break;
                } else if (loop2 === loop1 - 1) {
                    savePrimeNumber.push(loop1);
                }
            }
        }
    } else {
        console.log("please enter number")
    }
}
PrimeNumber(200);
console.log(savePrimeNumber);