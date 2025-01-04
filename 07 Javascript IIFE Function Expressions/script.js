// IIFE - Immediately-invoked Function Expression

// Pronounced 'iffy' by Ben Alman who introduced the acronym

// Variations:

// with anonymous arrow function inside:

(() => {
  // do stuff
})();

// with a function name (allows for recursion):
(function myIIFE() {
  num++;
  console.log(num);
  return num !== 5 ? myIIFE(num): console.log('finished');
})(num = 0);

// Reason 1 for using IIFEs: It does not pollute the global object namespace

// global
const x = "whatever";

const helloWorld = () => "Hello World!";

// isolate declarations within the function
// logs "iife wathever" and "hello IIFE!"
(() => {
  const x = "iife whatever";
  const helloWorld = () => "Hello IIFE!";
  console.log(x);
  console.log(helloWorld());
})();

// logs "whatever" and "Hello World!"
console.log(x);
console.log(helloWorld());

// Reason 2 to use IIFEs is to create private variables and methods from a closure

const increment = (() => {
  let counter = 0;
  console.log(counter);
  const credits = (num) => console.log(`I have ${num} credit(s).`);
  return () => { counter++; credits(counter); }
})

increment(); // logs 0 and "I have 1 credit(s)."
increment(); // logs "I have 2 credit(s)" - credits anonymous function has access to counter variable (lexical scope)
// credits(3); reference error

// Reason 3 to use an IIFE is the module pattern (will probably come up in legacy code)

const Score = (() => {
  let count = 0;

  return {
    current: () => { return count },
    increment: () => { count++},
    reset: () => { count = 0 }
  }
})();

Score.increment();
console.log(Score.current()); // logs 1
Score.increment();
console.log(Score.current()); // logs 2
Score.reset();
console.log(Score.current()); // logs 0

// The example above is a module pattern that creates a namespace as the different methods are referenced inside the object, which is the Score namespace. 

// The Revealing Pattern is a variation of the Module Pattern (which uses pointers in the return statement)

const Game = (() => {
  let count = 0;
  const current = () => { return `Game score is ${count}.`};
  const increment = () => { count++ };
  const reset = () => { count = 0 };

  return {
    current: current,
    increment: increment,
    reset: reset
  }
})();

Game.increment();
console.log(Game.current());  // logs Game score is 1.

// A second variation is injecting a namespace object, similar to the earlier examples but there's no const ar the beginning of the IIFE

((namespace) => {
  namespace.count = 0;
  namespace.current = function () { return `App count is ${this.count}.`}
  namespace.increment = function () { this.count++};
  namespace.reset = function () {this.count = 0};
})(window.App = window.App || {});

App.increment();
console.log(App.current()); // logs "App count is 1"

