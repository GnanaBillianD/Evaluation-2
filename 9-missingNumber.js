"use strict";
let arr = [1, 5, 7, 9, 50];
let NewArr = [];
// Find Missing Number

for (let i = 0; i < arr.length - 1; i++) {
    if ((arr[i + 1] - arr[i]) === 1) {

        continue;
    }

    NewArr.push(arr[i] + 1);

     while ((arr[i + 1] - NewArr[NewArr.length - 1]) != 1) {

        NewArr.push(NewArr[NewArr.length - 1] + 1);

    }
}

console.log(NewArr);