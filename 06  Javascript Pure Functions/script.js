// Pure Functions

// A part of the Functional Programming Paradigm

// Why write Pure Functions?
// 1) Clean Code
// 2) Easy to test
// 3) Easy to debug
// 4) Decoupled and independent
// 5) Could be added to your utility functions

// Rules for Pure functions:
// 1) The same input ALWAYS gives the same output

const add = (x, y) => $`${first} ${last}`;
console.log(fullName("Dave", "Gray"));

// We can replace the function with the output.
// This is called "referential transparency"

// 1A. A pure function should have at least one parameter. 

// Otherwise, it is the same as a constant because they only work with their input.

const firstName = () => "Dave";

const firstName= "Dave";

// 2) No side effects:

// This also means accessing the scope outside the function makes the function impure:

const z = 5;
const sum = (x, y ) => x + y + z;
console.log(sum(2, 2)); // logs 9, example of an impure function

// Pure functions cannot:
// Access a dataase, API, file system, storage, etc.
// Modify the DOM
// Or even log to the console

// That said, clearly "impure" functions are necessary, but they are harder to test and debug.

// Further, no input state can be modified
// That is, no data should be "mutated"
// Consider all input data to be immutable

// Impure Example 1:
let x = 1;
const increment = () => x += 1;
console.log(increment()); // logs 2
console.log(x); // logs 2

// Impure Example 2:
const myArray = [1, 2, 3];
const addToArray = (array, data) => {
  array.push(data);
  return array;
}

console.log(addToArray(myArray, 4)); // logs [1, 2, 3, 4]
console.log(myArray); // logs [1, 2, 3, 4], mutates original array

// Refactored Example 1:
const pureIncrement = (num) => num += 1;
console.log(pureIncrement(x)); // logs 3
console.log(x); // logs 2, pureIncrement does not mutate x

// Refactored Example 2:
const pureAddToArray = (array, data) => [...array, data];
console.log(pureAddToArray(myArray, 5)); // [1, 2, 3, 4, 5]
console.log(myArray); // [1, 2, 3, 4]

// Also notice how Pure Functions always return something.
// No return means you definately do not have a pure function.

// These common Higher Order functions are Pure Functions:

const oneToFive = [1, 2, 3, 4, 5];
const oddToFive = oneToFive.filter(elem => elem % 2 !== 0);
console.log(oddToFive); // [1, 3, 5]

const doubled = oneToFive.map(elem => elem * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const summed = oneToFive.reduce((acc, elem) => acc + elem);
console.log(summed); // logs 15

console.log(oneToFive); // logs [1, 2, 3, 4, 5]

// Review the Rules for Pure Functions:
// 1) The same input ALWAYS gives the same output
// 2) No side effects (no mutations!)

// The goal: write small, pure functions when you can for code that is clean, easy to test, and easy to debug.

