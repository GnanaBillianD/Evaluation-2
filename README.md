# Evaluation - 2

### 1. Prime number:

#### Algorithm:

step 1: Start a program with function with argument.

step 2: In this example, we will find the prime number inbetween 1 to 200.

step 3: That's why pass the value 200 from function argument to parameter 200.

step 4: In this program, we are using for-loop method.

step 5: So we assign the for loop variable value start from two.

step 6: Now, it will be check the prime number inbetween two to given value.

step 7: And we can find the prime number with the help of module function. 

step 8: In this program, I will apply the condtion for find the prime number using module function check the reminder value for assigning variable(two to assigning variable previous number). 

step 9: Because the prime number divisible only by itself. That's why we are checking from two to that assigning variable previous value. 

step 10: Inbetween that variable reminder will be zero, just ignore that, otherwise it will be store as a prime number.  

#### Psudocode:
```
"use strict"
SET string = []
FUNCTION PrimeNumber(a) {
    IF (typeof a === "number") {
        FOR (SET k = 2; k < a; k++) {
            IF (k == 2) {
                string.push(k)
            }
            FOR (SET i = 2; i < k; i++) {
                SET b = k % i;
                IF (b == 0) {
                    break
                }
                IF (i === k - 1) {
                    string.push(k)
                }
            }
        }
    } ELSE {
        console.log("please enter number")
    }
}
PrimeNumber(200)
PRINT(string)
```

### 2. Find the common value in Array:

#### Algorithm:

step 1: Declare two array with some integer value.

step 2: Create two empty array for store the value.

step 3: In this example, finding the common number from given two arrays, using for-loop and if conditon.

step 4: Label1 for-loop is find the common number from given arrays. Then this common number all push to first empty array.

step 5: Label2 for-loop is find the duplicate number from that stored common number. Because Label1 check one by one index value with another whole array numbers. So bychance same common number will be store.

step 6: Finally, stored the common number in second empty array.

#### Psudocode:
```"use strict"
SET a =[1,2,3,1,4,100,5,6,11,100]
SET b =[1,2,3,7,8,11,9,10,5,100]
SET c =[]
SET d= []

Label1: FOR (SET i=0;i<a.length;i++){
          FOR (SET j=0; j<b.length;j++){
            IF (a[i]==b[j]){
              c.push(a[i])
            }
         }
}
PRINT(c)

Label2: FOR (SET k =0; k< c.length;k++){
    	  FOR (SET l =0; l<k; l++){
           IF (d[l]==c[k])
            continue label2
         }d.push(c[k])
}
PRINT(d)
```

### 3. Functions:

#### i- Function anatomy:

- Function name is called function anatomy.

- When we declare a function before the function name we have to write the function keyword then only the javascript accept the particular block is a function.
	
##### Example:
```
"use strict"
FUNCTION add(a,b){
    RETURN a+b
}
PRINT(add(2,3))
```

#### ii- Anonymous function:

- Some function have without name these functions are called as anonymous function.

- We can't call the anonuymous function with name.

- So the anonymous function is initialized to a variable. Then only the anonymous function can be called.

##### Example:
```
"use strict"
SET a = [1,2,3,4,5]
SET b = a.reduce (FUNCTION (a,b){
    RETURN a+b
})
PRINT(b) 
```

#### iii- Assigning function to a variable:

- Initialize a function to an variable is called as assigning to a variable.

##### Example:
```
"use strict"
SET variable = FUNCTION (){
    PRINT("hi! hello")
}
variable()
```

### 4. Safeguarding function parameter:

#### Algoritm:

step 1: Create a variable with integer number

step 2: Create an anonymous function and initialize that anonymous function to an variable.

step 3: Then create a named function for checked that anonymous function is function or not.

step 4: If the this is a function, then only it will be call. otherwise it will not call.

step 5: If we pass the number to the named function parameter, it will be check the typeof this parameter.Then the program will give error because the number is not a function. So it's not called.

step 6: Because the function parameter check by "if" condition, this condition is true then only the function is called.   

- When we pass the anonymous function to an named function parameter, we have to check the parameter typeof in inside of named function. Because we prevent error first, that's why we have to check the function parameter is a function or not a function. 

- In this way, we can prevent the error 

- Normally, without check the function parameter typeof in inside of function. If the argument function is not a function type we can face an error.

- In this way, we can prevent throwing error.  

#### Psudocode:
```
"use strict"
SET a= 45

SET b = FUNCTION (){
    PRINT("hi")
}

FUNCTION safe(fun){
    IF(typeof fun == "function"){
        fun()
    }ELSE{
        PRINT("please give the fuction only")
    }
}

safe(a)
```

### 5. this keyword:

- When used alone, "this" refers to the global object.

#### Example:
```
SET x = this
PRINT(x)
```

- In strict mode, when used alone, "this" also refers to the global object.

#### Example:
```
"use strict"
SET y = this
PRINT(x)
```
- Inside of the object, "this" will print the object properties and method

#### Example:
```
SET object = {
  a: 1,
  b: 2,
  c: 3,
  fun: function () => { PRINT (this)}
};
object.fun();
```

### 6. "this" keyword using inside of the function and class:

#### i- Inside the function:

- Inside the function, if the "this" is return and that "this" is return the global property.

##### Example:
```
FUNCTION fun(){
  RETURN global
}
PRINT(fun())
```

- if we assign the value in global. Inside the function, if the "this" is return that global value and it will print that value.

##### Example:
```
a =10
FUNCTION fun1(){
  SET a = 20
  RETURN global.a
}
PRINT(fun1())
```

#### ii- Inside the class:

- Inside the class, call the "this" keyword, "this" keyword is print the property of that class

##### Example:
```
CLASS Person {
    CONSTRUCTOR (name, age, year) {
        this.name = name
        this.age =age
        this.year = year
    }
}
SET person1 = new Person('billian',26,1995)
SET person2 = new Person("Benni",22,2000)

PRINT (person1)
PRINT (person2)
```

### 7. map, reduce, filter:

#### i- Array.map():

##### Algorithm:

step 1: Declare a variable with set of array value.

step 2: Here transformed the array value by map() method.

step 3: It returns a transformed array value in  new array by applying the callback function on each element of an array.

##### Psudocode:
```
SET a = [1,2,3,4,5,6];
SET b = a.map((c)=> c * 2)
PRINT(b);
```

#### ii- Array.reduce():

##### Algorithm:

step 1: It will executes a reducer function for array element.

step 2: This method returns a single value.

step 3: It does not execute the function for empty array elements.

step 4: And also it does not change the original array.

##### Psudocode:
```
SET d = [1,2,3,4,5,6]
SET e = d.reduce((periviousValue, currentValue) => periviousValue + currentValue)
PRINT(e)
```

#### iii- Array.filter():

##### Algorithm:

step 1: Declare a variable with set of array value.

step 2: The filter method chech which array element will true for given condition that array element value will be stored in new array.

step 3: Otherwise, which array element will be false for given condition that array element value will not stored in a new array.

##### Psudocode:
```
SET ages = [32, 33, 16, 40]
SET result = ages.filter((a)=> (a>18)) 
PRINT(result)
```

### 8. Count the total number of zeros from 1 to 50:

#### Algorithm:

step 1: Create a new varibale and assign that value 0.

step 2: In this program, we find the zeros with help of for-loop and if condition.

step 3: First initialize the for-loop variable value to 1, then that variable value will check by given condition. If it is true, the loop statement will be executed. otherwise, it will be not executed.

step 4: Now, we will convert the interger number value to string format. Because, we will check the index value. In integer numer don't have a index. That's why we convert.

step 5: Then we will check that stringg lenth, that value stored in a new variable.

step 6: The inner for-loop for check the string value by given statement.

step 7: If the index value will be zero, the if condtion will be true. Then i will increament the count value. otherwise it will be execute from first for-loop.

step 8: Finally, we will store the zero's count value.

#### Psudocode:
```
"use strict"
SET count = 0
FOR (SET i = 1; i <= 50; i++) {
    SET a = i.toString()
    SET b = a.length
    FOR (SET j = 0; j <= b; j++) {
        IF (a[j] == 0)
            count++
    }
}
PRINTS(count)
```

### 9. Find the missing number in array:

#### Algorithm:

step 1: Create a array with values and also one empty array.

step 2: In this program, we will find the missing number. The natural numbers are minus from greater than number to that previous number, if we get "1", its in ascending order.

step 3: Frist We will minus the array value index[1] to index[0];because here we assign a value less to greater than.

step 4: If the value is 1. just we will continue from outer loop, otherwise we will add one with less than number. 
 
step 5: That added value push to empty array. that value minus with greater than value of array index[1], if that minus value not equal to one, we will add one value with that new array. This while loop run when this given condition will be true. Otherwise this condtion not excuted. Then the program will again start from for-loop.

step 6: This same conditon will be execute untill the for-loop condtion.

#### Psudocode:
```
SET arr = [1, 5, 7, 9]
SET NewArr = []

FOR (SET i = 0; i < arr.length - 1; i++) {
    IF ((arr[i + 1] - arr[i]) === 1) {

        continue
    }

    NewArr.push(arr[i] + 1)

    WHILE ((arr[i + 1] - NewArr[NewArr.length - 1]) != 1) {

        NewArr.push(NewArr[NewArr.length - 1] + 1)

    }
}

PRINT (NewArr)
```

### 10. Calculate age:

#### Algorithm:

step 1: First declare a variable for initialize a born year.

step 2: Then we will declare a variable for store a new Date() constructor.

step 3: Then we will get the present year from that constructor object.

step 4: And we will minus the present year and born year.

step 5: Finally we will get the age.

#### Psudocode:
```
"use strict"
SET bornYear = 1992

SET a = new Date()
SET b = a.getFullYear()
SET age = b - year
PRINT(age)
```

### 11. Call by value and Call by reference:

#### i- Call by value:

##### Algorithm:

step 1: Let us store an integer value in “a”, Let a=5. Now the variable “a” stores 5 and has an address location where that primitive value sits in memory.

step 2: Now, suppose we copy the value of “a” in “b” by assignment (a=b). Now, “b” points to a new location in memory, containing the same data as variable “a”.

step 3: Thus, a=b=5 but both points to separate locations in memory.

step 4: This approach is called call by value where 2 variables become the same by copying the value but in 2 separate spots in the memory.

##### Psudocode:
```
SET x = 5
SET y = x
y = 3
PRINT(y)//3
PRINT(x)//5
PRINT(x==y)//false
```

#### ii- Call by reference:

##### Algorithm:

step 1: We have an object stored in the variable “c”. The variable stores the location or the address where the object lives.

step 2: Over here, when we set d=c, “d” points to the same location in memory where “c” does.

step 3: Now when we change a property using “c”, it changes the property in “d” also because both point to the same object.

step 4: No new object is created, no copy is created. Both the variables point to the same object. This is called call by reference.

##### Psudocode:
```
SET c = { greeting : 'Welcome' }
SET d
d = c

c.greeting = 'Welcome to geeksforgeeks'
PRINT(c)
PRINT(d)
```

### 12. Arity:

- Arity is the term used to refer to the number of arguments or operands in a function. 

#### Example:
```
"use strict"
FUNCTION fun() {
    PRINT("no Parameter")
}

FUNCTION fun1(a) {
    PRINT(a)
}
FUNCTION fun2(a,b) {
    PRINT(a, b)
}
FUNCTION fun3(a, b, c) {
    PRINT(a, b, c)
}

PRINT (fun.length)
PRINT (fun1.length)
PRINT (fun2.length)
PRINT (fun3.length)
```

### 13. Currying:

- multiple arguments into several functions of a single argument in sequence.

#### Example:
```
"use strict"
FUNCTION Currying(a) {
    RETURN function two(b,c) {
        RETURN function three(d,e,f) {
            PRINT (a * b * c * d * e *f)
        }
    }
}

Currying(1)(2,2)(3,3,3)
```

### 14. What is ES6:

- JavaScript ES6 is an new verson of an javaScript. that was introduce in 2015. 

- ES6 stands for ECMAScript 6. 

- That provides specification on how JavaScript programming language should work. 

- And this is second major reversion to JavaScript. 

#### And it provides new features to JavaScript such as

###### The let keyword, 
###### The const keyword, 
###### Arrow Functions, 
###### For/of, 
###### Map Objects, 
###### Set Objects, 
###### Classes, 
###### Promises, 
###### Symbol, 
###### Default Parameters, 
###### Function Rest Parameter, and so on. 

### 15. Anonymous function:

- It is a function that does not have any name associated with it. 

- We use only the function keyword without the function name. 

- An anonymous function is not accessible, it can only be accessed by a variable it is stored in as a function as a value.

- In Higher-Order Functions, we can also pass anonymous functions as parameters into Higher-Order Functions.

#### Example- 1:
 
- In this example, we define an anonymous function that prints a message to the console. The function is then stored in the myVariable variable. We can call the function by invoking myVariable().

```
SET myVariable = FUNCTION () {
    PRINT ("hi! welcome")
}

myVariable()
```

#### Example- 2:

- In this example, we pass arguments to the anonymous function.

```
SET variable = FUNCTION (a) {
    PRINT ("hi" ,a,  "welcome")
}
variable("benni")
```

#### Example- 3:

- This is a anonymous function syntax. but we can't express it in globally. because anonymous Function don't have a function name

```
FUNCTION (){
     console.log("error")
}
```

#### Example- 4:

- Another use case of anonymous functions is to invoke the function immediately after initialization, this is also known as Self Executing Function. 

```
(FUNCTION () {
    PRINT ("Welcome to YAVAR!")
})()
```

### 16. Named function and Assigning function to a variable:

#### i- Named function:

- Function name is called function anatomy.

- When we declare a function before the function name we have to write the function keyword then only the javascript accept the particular block is a function.

```
FUNCTION named(){
    PRINT ("hi")
}
named()
```

#### ii- Assigned function to a variable:

- Initialize a anonymous function to an variable is called as assigning to a variable.

```
SET myVariable = function(){
    PRINT ("hi! hello")
}
myVariable()
```


#### Example:

- we can use the named function as a higher order function and we can use assigning function to a variable pass as parameters into Higher-Order Functions.

``` 
SET radius = [3,1,2,4];


SET area = FUNCTION (radius){
    RETURN Math.PI*radius*radius
}

SET circumference = FUNCTION (radius){
    RETURN 2*Math.PI*radius
}

SET diameter = FUNCTION (radius){
    RETURN 2*radius
}

FUNCTION higherOrder (radius, logic){
    SET emptyArr = [];
    FOR (SET i=0; i< radius.length; i++){
        emptyArr.push(logic(radius[i]))
    }return emptyArr
}
PRINT(higherOrder(radius, area))
``` 




























