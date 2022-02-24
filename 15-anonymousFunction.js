//what is Anonymous function?
//It is a function that does not have any name associated with it. 
//we use only the function keyword without the function name. 
//An anonymous function is not accessible, it can only be accessed by a variable it is stored in as a function as a value.
//In Higher-Order Functions, we can also pass anonymous functions as parameters into Higher-Order Functions.


//In this example, we define an anonymous function that prints a message to the console. 
//The function is then stored in the myVariable variable. We can call the function by invoking myVariable().

let myVariable = function () {
    console.log("hi! welcome");
};

myVariable();


//In this example, we pass arguments to the anonymous function.

let variable = function (a) {
    console.log("hi" ,a,  "welcome")
};
variable("benni");


//this is a anonymous function syntax. but we can't express it in globally. because anonymous Function don't have a function name
//function(){
//     // console.log("syntax error");
// }


//Another use case of anonymous functions is to invoke the function immediately after initialization, 
//this is also known as Self Executing Function. 
(function () {
    console.log("Welcome to YAVAR!");
})();





