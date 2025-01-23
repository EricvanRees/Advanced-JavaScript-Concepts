// Functional programming

// Often uses pip and compose = higher order functions

/* A higher order function is any function which takes a function as an argument, returns a function, or both. */
 
// Here's how a "compose" function works:

/* a unary function is a simple function that operates on a single argument, performing some computation, and returning the output. */ 

/* To make it short, composition and piping are almost the same, the only difference being the execution order; If the functions are executed from left to right, it's a pipe, on the other hand, if the functions are executed from right to left it's called compose. see: https://dev.to/joelbonetr/js-functional-concepts-pipe-and-compose-1mho */

// Start with small unary (one parameter) functions:

const add2 = (x) => x + 2;
const subtract1 = (x) => x - 1;
const multiplyBy5 = (x) => x * 5;

// Notice how the functions execute from inside to outside & right to left:
const result = multiplyBy5(subtract1(add2(4)));
console.log(result);

// The above is NOT a compose function - let's make one

/* Note: Ramda.js and lodash libraries have their own built-in compose and pipe functions. lodash calls pipe "flow". */ 
  
/* The higher order function "reduce" takes a list of values and applies a function to each of those values, accumulating a single results. */ 

/* To get the compose order from right to left as we see with nested function calls in our example above, we need reduceRight... */ 

const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val);

const compResult = compose(multiplyBy5, subtract1, add2)(4);

console.log(compResult); // logs 25 

/* To do the same, but read from left to right...we use "pipe". It is the same concept but uses reduce instead of reduceRight. */

const pipe = (...fns) => (val) => fns.reduce((prev, fn) => fn(prev), val);

const pipeResult = pipe(add2, subtract1, multiplyBy5)(5);
console.log(pipeResult); // logs 30 

// You will often see the functions on separate lines
const pipeResult2 = pipe(
  add2,
  subtract1,
  multiplyBy5
)(6);

console.log(pipeResult2); // logs 35

/* This is a "pointer free" style where you do not see the unary parameter passed between each function */ 

// example with a 2nd parameter 
const divideBy = (divisor, num) => num / divisor; 

const pipeResult3 = pipe(
  add2,
  subtract1,
  multiplyBy5,
  x => divideBy(2, x)
)(5);
console.log(pipeResult); // logs 15 

// Or you could curry the divideBy function for a custom unary function - expecting two parameters at different times, in this case "divisor" and "num": 
const divBy = (divisor) => (num) => num / divisor; 
// custom  unary function partially applied:
const divideBy2 = divBy(2);

// this pipe function is called immediately, but this is not required:
const pipeResult4 = pipe(
  add2,
  subtract1,
  multiplyBy5,
  divideBy2
)(5);

console.log(pipeResult4); // logs 15

// Let's look at some examples beyond math functions 

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis molestiae sed non. Velit exercitationem quae deserunt illum excepturi, eos repellat obcaecati, voluptates saepe hic quisquam temporibus beatae reprehenderit. Quaerat ut ea assumenda corrupti, exercitationem recusandae? Iure sequi fugiat quod reiciendis."; 

const splitOnSpace = (string) => string.split(' ');
const count = (array) => array.length; 

const wordCount = pipe(
  splitOnSpace,
  count
)

console.log(wordCount(lorem)); // logs 40

// The pipe function is reusable
const egbdf = "Every good boy does fine."
console.log(wordCount(egbdf)); // logs 5 

// Combine processes: check for palindrome 
const pal1 = "taco cat";
const pal2 = "UFO tofu";
const pal3 =  "Dave"; 

const split = (string) => string.split('');
const join = (string) => string.join('');
const lower = (string) => string.toLowerCase();
const reverse = (array) => array.reverse();

const fwd = pipe(
  splitOnSpace,
  join,
  lower
);

const rev = pipe(
  fwd, // a nested pipe function 
  split,
  reverse,
  join
);

console.log(fwd(pal1) === rev(pal1)); // true
console.log(fwd(pal2) === rev(pal2)); // true
console.log(fwd(pal3) === rev(pal3)); // false

// Clone / Copy functions within a pipe or compose function

// 3 approaches

// 1) Clone the object before an impure function mutates it

const scoreObj = { home: 0, away: 0};

const shallowClone = (obj) => Array.isArray(obj) ? [...obj] : {...obj};

const incrementHome = (obj) => {
  obj.home += 1; // mutation
  return obj;
}

const homeScore = pipe(
  shallowClone,
  incrementHome
  // another function,
  // and another function, etc
);

console.log(homeScore(scoreObj)); // logs mutated copy of original object
console.log(scoreObj); // logs unmutated original object
console.log(homeScore(scoreObj === scoreObj)); // logs false as the copy is mutated and not equal to original object

// Positive: fewer function calls
// Negative: creates impure functions and testing difficulties

// 2) Curry the function to create a partial that is unary

let incrementHomeB = (cloneFn) => (obj) => {
  const newObj = cloneFn(obj);
  newObj.home += 1; // mutation
  return newObj;
}

// Creates the partial by applying the first argument in advance

/* !!! Currying is not partial application. It can be implemented using partial application. see: https://towardsdatascience.com/javascript-currying-vs-partial-application-4db5b2442be8 */ 


incrementHomeB = incrementHomeB(shallowClone);

const homeScoreB = pipe(
  incrementHomeB
  // another function,
  // and another function, etc 
)

console.log(homeScoreB(scoreObj)); // logs mutated shallow clone
console.log(scoreObj); // logs original object, both are not equal

// Positive: pure function with clear dependencies
// Netative: more calls to cloning function

// 3) Insert the clone function as a dependency

const incrementHomeC = (obj, cloneFn) => {
  const newObj = cloneFn(obj);
  newObj.home += 1; // mutation
  return newObj;
}

const homeScoreC = pipe(
  x => incrementHomeC(x, shallowClone)
  // another function,
  // and other function, etc
)

console.log(homeScoreC(scoreObj));
console.log(scoreObj);

// Positive: Pure function with clear dependencies
// Negative: Non-unary functions in your pipe / compose chain

