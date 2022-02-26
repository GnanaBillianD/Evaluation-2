"use strict";
console.log("-------------how many zeros inbetween 1 to 100------------------- ")
let numbersInArray = Array.from({ length: 101 }, function (v, i) { return i });


let splitNumber = numbersInArray.toString().split("");//split the number(ex:[12,13]=['1','2','1','3'])  
let storeZeros = splitNumber.filter((element) => { if (element == 0) { return element } });
let zerosCount = storeZeros.length - 1;
console.log(zerosCount);















//console.log("----------------------using for loop----------------------------");
// function totalNumberOfZeros(number) {
//     if (typeof number === "number") {
//         let count = 0;
//         for (let i = 1; i <= number; i++) {
//             let a = i.toString();
//             let b = a.length;
//             for (let j = 0; j <= b; j++) {
//                 if (a[j] == 0)
//                     count++;
//             }
//         }
//         return count;
//     } else {
//         return "please enter the number";
//     }
// }
// console.log(totalNumberOfZeros(50));