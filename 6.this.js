// Inside the function, if the "this" is return and that "this" is return the global property.
console.log("-----------------Inside the function---------------------------")
function func() {
  return global;
}
console.log(func());

// if we assign the value in global. Inside the function, if the "this" is return that global value and it will print that value. If we dont decalre that vale in global (ex: var,let or const),
console.log("-----------------Inside the function return global value---------------------------")
value = 10;
function func1() {
  let a = 20;
  return global.value;
}
console.log(func1());


//Inside the class, call the "this" keyword, "this" keyword is print the property of that class
console.log("-----------------Inside the class---------------------------")
class Person {
  constructor(name, age, year) {
    this.name = name;
    this.age = age;
    this.year = year;
  }
}

let person1 = new Person('billian', 26, 1995);
let person2 = new Person("Benni", 22, 2000);

console.log(person1);
console.log(person2);
