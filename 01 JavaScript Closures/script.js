// Lexical Scope defines how variable names are resolved in nested functions.

// Nested (child) functions have access to the scope of their parent functions

// This is often confused with closure, but lexical scope is only an important part of closure.

// w3schools: "A closure is a function having access to the parent scope, even after the parent function has closed."

// A closure is created when we define a function, not when a function is executed.

// Lexical scoping defines a function's accessible scope, while closure enables a function to access variables even after its scope closes.

// JavaScript uses lexical scoping to resolve the variable names when a function is created inside another function. It determines the function's parent scope by looking at where the function was created instead of where it was invoked.

// global scope
let x = 1;

const parentFunction = () => {
  // local scope
  // myValue is a private variable, not accessible from the global scope
  let myValue = 2;
  console.log(x);
  console.log(myValue);

  const childFunction = () => {
    console.log(x += 5);
    console.log(myValue += 1);
  }

  return childFunction;
}

const result = parentFunction();
// logs the arrow function:
console.log(result);
// prints 6 and 3, the results of childFunction:
result();

// IIFE (Immediately Invoked Function Expression)

//this prints "initial value: 0"
const privateCounter = (() => {
  let count = 0;
  console.log(`initial value: ${count}`);
  return () => { count += 1; console.log(count)}
})();

privateCounter(); // prints counter 1
privateCounter(); // prints counter 2
privateCounter(); // prints counter 3

///////////////// 
// closure with an IFFE and a parameter

const credits = ((num) => {
  let credits = num;
  console.log(`initial credits value: ${credits}`);
  return () => {
    credits -= 1;
    if (credits > 0) console.log(`playing game, ${credits} credit(s) remaining`);
    if (credits <= 0) console.log('not enough credits');
  }     
})(3);

credits();

