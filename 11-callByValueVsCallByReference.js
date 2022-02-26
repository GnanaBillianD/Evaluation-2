"use strict";
//call by value
//Thus, a=b=5 but both points to separate locations in memory. This approach is called call by value
console.log("-------------------------call by value---------------------------------")
let number1 = 5;
let number2 = number1;
number2 = 3;
console.log(number2);//3
console.log(number1);//5
console.log(number1 === number2);//false


//call by reference
//No new object is created, no copy is created. Both the variables point to the same object
console.log("---------------------------call by reference--------------------------------")
let object  = { greeting: 'Welcome' };
var object1 = object;

object.greeting = "Welcome to geeksforgeeks";
console.log(object);
console.log(object1);