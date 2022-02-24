//Arity is the term used to refer to the number of arguments or operands in a function
"use strict";
function fun() {
    console.log("no Parameter");
}

function fun1(a) {
    console.log(a);
}
function fun2(a,b) {
    console.log(a, b);
}
function fun3(a, b, c) {
    console.log(a, b, c);
}

console.log(fun.length)
console.log(fun1.length);
console.log(fun2.length);
console.log(fun3.length);