// Currying

// Named after Haskell B. Curry

// see: https://javascript.info/currying-partials and https://builtin.com/software-engineering-perspectives/currying-javascript 

// Concept from lambda calculus

// Currying takes a function that receives more than one parameter and breaks it into a series of unary (one parameter) functions.

// Therefore, a curried function only takes one parameter at a time. 

// Currying can look like this:

const buildSandwich = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
    }
  }
}

const mySandwich = buildSandwich("Bacon")("Lettunce")("Tomato")
console.log(mySandwich); // logs "Bacon, Lettuce, Tomato"

// It works, but that's  getting ugly and nested the further we go

// Let's refactor:

const buildSammy = ingred1 => ingred2 => ingred3 => `${ingred1}, ${ingred2}, ${ingred3}`;

const mySammy = buildSammy("turkey")("cheese")("bread");

console.log(mySammy); // logs "turkey, cheese, bread"

// Another example of a curried function (2nd version)
const multiply = (x, y) => x * y;

const curriedMultiply = x => y => x * y;

console.log(multiply(2, 3)); // logs 6
console.log(curriedMultiply(2)); // logs "y => x * y", telling you what's still needed ( = y)
console.log(curriedMultiply(2)(3));

// Partially applied functions are a common use of currying
const timesTen = curriedMultiply(10);

console.log(timesTen); // logs "y => x * y"
console.log(timesTen(8)); // logs 80

// Another example
const updateElemText = id => content => document.querySelector(`#${id}`).textContent = content;
const updateHeaderText = updateElemText('header'); // id parameter
updateHeaderText('Hello Dave!'); // content parameter

// Another common use of currying is function composition, which allows for calling small functions in a specific order

const addCustomer = fn => (...args) => {
  console.log('saving customer info...')
  return fn(...args);
}

const processOrder = fn => (...args) => {
  console.log(`processing order #${args[0]}`)
  return fn(...args);
}

let completeOrder = (...args) => {
  console.log(`Order #${[...args].toString()}`);
}

// this is similar to using decorator functions:
completeOrder = (processOrder(completeOrder));
console.log(completeOrder); // logs anonymous function inside processOrder
completeOrder = (addCustomer(completeOrder));
completeOrder("1000"); // logs "saving customer info... processing order #1000 Order #1000"

// same functions written in standard way:
/* function addCustomer(...args) {
  return function processOrder(...args) {
    return function completeOrder(...args) {
    /// end 
    }
  }
} */

// Convert "normal" functions to curried functions with a curry function

// Requires a function with a fixed number of parameters
const curry = (fn) => {
  return curried = (...args) => {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args) 
      // bind creates new function, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind and https://www.w3schools.com/js/js_function_bind.asp 
    }
    return fn(...args);
  };
}

const total = (x, y, z) => x + y + z;

const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30)); // returns 60

