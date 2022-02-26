//Find the common value in given two array
"use strict";
console.log("--------------------Find the common number in given two array------------------------")
let firstArray = [1, 2, 3, 1, 4, 9];
let secondArray = [1, 2, 3, 7, 8, 9, 1];


let commonNumberFirstArray = firstArray.filter((value, index) => firstArray.indexOf(value) === index)

let commonNumberSecondArray = secondArray.filter((value, index) => secondArray.indexOf(value) === index)

let mergeTwoArray = [...commonNumberFirstArray, ...commonNumberSecondArray];

let saveCommonNumberArray = mergeTwoArray.filter((value, index) => mergeTwoArray.indexOf(value) !== index)

console.log(saveCommonNumberArray);






//console.log("-----------------------using for loop-----------------------------")
//let a = [1, 2, 3, 1, 4, 9];
//let b = [1, 2, 3, 7, 8, 9, 1];
// let c =[];
// let d=[];
// for(let i=0;i<a.length;i++){
//   for(let j=0; j<b.length;j++){
//     if(a[i]==b[j]){
//       c.push(a[i]);
//     }
//   }
// }
// console.log(c);

// label1: for (let k =0; k< c.length;k++){
//     for(let l =0; l<k; l++){
//         if(d[l]==c[k])
//             continue label1;
//     }
//     d.push(c[k]);
// }
// console.log(d);