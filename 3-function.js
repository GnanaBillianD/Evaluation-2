"use strict";
//function anatomy
function add(a,b){
    return a+b;
}
console.log(add(2,3));


//anonymous function
let a = [1,2,3,4,5]
let b = a.reduce(function(a,b){
    return a+b;
})
console.log(b)

//assigning function to a variables
let c = function(){
    console.log("hi! hello");
}
c() ;