"use strict";
function totalNumberOfZeros(number) {
    if (typeof number === "number") {
        let count = 0;
        for (let i = 1; i <= number; i++) {
            let a = i.toString();
            let b = a.length;
            for (let j = 0; j <= b; j++) {
                if (a[j] == 0)
                    count++;
            }
        }
        return count;
    } else {
        return "please enter the number";
    }
}
console.log(totalNumberOfZeros(50));