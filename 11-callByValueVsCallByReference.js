"use strict";
//call by value
//Thus, a=b=5 but both points to separate locations in memory. This approach is called call by value
let x = 5;
let y = x;
y = 3;
console.log(y);//3
console.log(x);//5
console.log(x==y);//false


//call by reference
//No new object is created, no copy is created. Both the variables point to the same object
var c = { greeting : 'Welcome' };
var d;
d = c;

c.greeting = 'Welcome to geeksforgeeks';
console.log(c);
console.log(d);