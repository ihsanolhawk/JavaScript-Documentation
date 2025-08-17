// Greeting function
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("World"));

// Hello World
console.log("Hello, World!");
document.write("Hello, World!");

// Declaring variables
let message = "Hello";
let count = 42;
let isActive = true;

// Variable scope example
var globalVar = "I am global";
function testScope() {
  var localVar = "I am local";
  console.log(globalVar); // Accessible
}
// console.log(localVar); // Error: localVar is not defined

// Global variable
window.globalVar = "I'm accessible everywhere";
function checkGlobal() {
  console.log(globalVar); // "I'm accessible everywhere"
  console.log(window.globalVar); // Same result
}

// Constants
const PI = 3.14159;
const DAYS_IN_WEEK = 7;
const API_KEY = "abc123xyz456";
// PI = 3.14; // This will cause an error

const MY_OBJECT = {"key": "value"};
MY_OBJECT.key = "otherValue"; // This is allowed

// Data types
let isTrue = true; // Boolean
let nothing = null; // null
let notDefined; // undefined
let number = 42; // Number
let greeting = "Hello"; // String
let sym = Symbol("foo"); // Symbol
let person = { name: "John", age: 30 }; // Object
