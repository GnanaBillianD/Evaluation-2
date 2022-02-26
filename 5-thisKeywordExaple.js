//When used alone, "this" refers to the global properties.
console.log("--------------------When used alone------------------------")
let alone = global;
console.log(alone);


//In strict mode, when used alone, "this" also refers to the global properties.
console.log("--------------------When used alone in strict mode------------------------")
"use strict";
let strictMode = global;
console.log(strictMode);


//Inside of the object, "this" will print the object properties and method
console.log("----------------------Inside of the object----------------------")
let object = {
  id: 2345 - 6543 - 6453 - 5645,
  name: "benni",
  type: "adhaar Card",
  method: function () { console.log(this) }
};
object.method();