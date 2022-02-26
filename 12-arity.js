//Arity is the term used to refer to the number of arguments or operands in a function
"use strict";
function fun() {
    console.log("no Parameter");
}

function fun1(value) {
    console.log(value);
}
function fun2(num1, num2) {
    console.log(num1, num2);
}
function fun3(a, b, c) {
    console.log(a, b, c);
}

console.log(fun.length)
console.log(fun1.length);
console.log(fun2.length);
console.log(fun3.length);