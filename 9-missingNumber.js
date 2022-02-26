//find missing number in array
"use strict";
console.log("---------------------find missing number in array--------------------------------")
function findMissing(num) {
    let max = Math.max(...num); // Will find highest number
    let min = Math.min(...num); // Will find lowest number
    let missing = []

    for (let i = min; i <= max; i++) {
        if (!num.includes(i)) { // Checking whether i(current value) present in num(argument)
            missing.push(i); // Adding numbers which are not in num(argument) array
        }
    }
    return missing;
}

console.log(findMissing([1, 3, 8, 15, 6, 9]));











// console.log("---------------------using forEach() method for find missing number in array-------------------------------------")
// let array = [1, 2, 3, 5, 7, 9];
// let storeMissingNumber = [];

// array.forEach((element, index) => {
//     if (array[index + 1] - array[index] != 1) {
//         if (array[index + 1] !== undefined) {
//             storeMissingNumber.push(array[index] + 1);
//         }
//     }
// })

// console.log(storeMissingNumber);






// console.log("----------------------------using for loop------------------------------------------")
// let array1 = [1, 5, 7, 9, 20];
// let storeMissingNumber1 = [];
// // Find Missing Number

// for (let i = 0; i < array1.length - 1; i++) {
//     if ((array1[i + 1] - array1[i]) !== 1) {
//         storeMissingNumber1.push(array1[i] + 1);
//     }
//     while ((array1[i + 1] - storeMissingNumber1[storeMissingNumber1.length - 1]) != 1) {

//         storeMissingNumber1.push(storeMissingNumber1[storeMissingNumber1.length - 1] + 1);

//     }
// }

// console.log(storeMissingNumber1);