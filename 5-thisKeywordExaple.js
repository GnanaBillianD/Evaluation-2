//When used alone, "this" refers to the global properties.
  let x = this;
  console.log(x);


//In strict mode, when used alone, "this" also refers to the global properties.
  "use strict";
  let y = this;
  console.log(x);


//Inside of the object, "this" will print the object properties and method
let object = {
  a: 1,
  b: 2,
  c: 3,
  fun: function () { console.log(this)}
};
object.fun();