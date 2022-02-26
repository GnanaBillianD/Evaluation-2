"use strict";
//function anatomy
console.log("-----------function anatomy-----------------------")
function add(number1, number2) {
    return number1 + number2;
}
console.log(add(2, 3));


//anonymous function
console.log("-----------anonymous function-----------------------")
let sum1 = function (value1, value2) {
    return value1 + value2;
}
console.log(sum1(10, 5))


//assigning function to a variables
console.log("-----------assigning function to a variablesy-----------------------")
let print = function () {
    console.log("hi! hello");
}
print();