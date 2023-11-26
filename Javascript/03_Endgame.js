// Higher Order Function
// Constructor Function
// First Class Function
// New Keyword
// iife
// Prototype
// Prototypal Inheritance
// this Call apply Bind
// Pure and impure Function
// Closure

// Higher Order Function:-

// Higher Order Function (HOF): A function that takes a function as an argument or returns a function

//ab kis fns k arument me fns de yafr function return kiya jaye to wo HOF bolte

const printHello = (name) => {
  console.log(`Print Hello ${name}`);
  return `Hello ${name}`;
};

const fun = (funName, name) => {
  return funName(name);
};
console.log(fun(printHello, "Viral")); // Invoking HOF with a function as an argument

// Constructor Function
// Constructor Function: A function used with the 'new' keyword to create objects
function Car(modelName, engine, color) {
  this.modelName = modelName;
  this.engine = engine;
  this.color = color;
  console.log(
    `${this.modelName} is ${this.engine} car Model which color is ${this.color}`
  );
  // Note: The 'return' statement is not needed in a constructor function.
}

const maruti = new Car("Alto 300", "petrol", "black"); // Creating objects using constructor

const honda = new Car("Suzuki", "Diesel", "black");
// console.log(`${honda.modelName} is ${honda.engine} car Model which color is ${honda.color}`);

// First Class Function

// First Class Function: Functions can be assigned to variables, passed as arguments, and returned from other functions
// +++++++ 1 Example ++++++
// // Assigning a function to a variable
const sayHello = function (msg) {
  console.log("Hello, World! " + msg);
};
// Calling the function through the variable
sayHello("1st example"); // Outputs: Hello, World!

// +++++++ 2 Example ++++++
const greet = function (callback, msg) {
  callback(msg);
};
// Passing a function as an argument
greet(sayHello, "2nd example"); // Outputs: Hello, World!

// +++++++ 3 Example ++++++
// First order function: createGreeter
const createGreeter = function () {
  // First order function: anonymous function returned by createGreeter
  return function () {
    // First order function: anonymous function returned by the inner function
    return function () {
      console.log("Greetings!");
    };
  };
};

// Invoking createGreeter produces a first-order function (an anonymous function)
const innerFunction = createGreeter(); // First invocation

// Invoking the result of the first invocation produces another first-order function
const middleFunction = innerFunction(); // Second invocation

middleFunction(); // Final invocation
// Outputs: Greetings!

createGreeter()()(); // Outputs: Greetings! //Another way

// New Keyword
// iife

// Immediately Invoked Function Expression (IIFE): A function that is immediately executed after being created

(() => {
  iife = "iife";
  console.log(iife);
  // private variable & any many more
  // watch 31:00 at sheryians coding school
})();

// Prototype
// Prototype: An object contains some inbuilt properties that are accessible through its prototype chain
// object contains some inbuilt property that called as prototype

// Prototypal Inheritance
// Prototypal Inheritance: Objects can inherit properties and methods from other objects
let human = {
  canFly: false,
  canTalk: true,
  canWalk: true,
};

let sheryiansStudent = {
  canMakeAmazingWebsite: true,
  canMakeWorldClassAwaredWebsite: true,
};
sheryiansStudent.__proto__ = human; // Setting up prototypal inheritance
console.log(sheryiansStudent.canFly); // Accessing inherited property

// 'this', 'call', 'apply', 'bind': Context-related concepts
//this=> window is global scope kyun ki vo object{ }bracket is k ander nahi hai
function abcd() {
  console.log(this); //refer to window
}
function abcd(a = "value dalna ", b = "value dalna") {
  console.log(this, a, b); //refer to window
}

//this=>  object name he value hoga jab this { } bracket is k ander  hoga

//ek function jo object k ander hai vo method kehte hai
var obj = {
  baatkaro: () => {}, // ye baatkaro ab ek mathod hai
};

var obj = { age: 12 };
abcd.call(obj); // waha par obj object ban jaye ga Aur this obj ko refer karega

abcd.call(obj, 1, 4); //call or apply return nahi krte hai
abcd.apply(obj, [1, 4]); //call or apply return nahi krte hai
let bindkaro = abcd.bind(obj, 1, 4); //bind return karta hai Aur to variable me save kar k baad use krskte hai
bindkaro();

// Pure and impure Function

// pure fnc:- 1.it should always return same output for same Input input
//            2.it will never change/update the value of global scope

// impure fnc
let f = (a, b) => {
  console.log(Math.random() * a * b); // this give differnt value for same output so this impure fns
};
f(1, 3);

var k = 12;
let f1 = (a, b) => {
  k = 23;
  console.log(a * b); // this give same value for same output so this pure fns but global scope k ka
  // value change kar diya hai islye ye impure function hai
};
f1(2, 3);

//Closure
