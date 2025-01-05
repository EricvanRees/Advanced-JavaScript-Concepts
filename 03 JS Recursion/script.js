// Official definition of recursion:
// In computer science, recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem.

// Unofficial definition of recursion:
// "Any situation where you do something, and depending the results, you might do it again."

// In programming, recursion occurs when a function calls itself.

// Any iterator function (aka function with a loop) can be recursive instead

// iterator function
const countToTen = (num = 1) => {
  while (num <= 10) {
    console.log(num);
    num++;
  }
}

// countToTen(); // logs 1 - 10

// recursive functions have 2 parts:
// 1) the recursve call to the function
// 2) at least one condition to exit

 // same function but recursive:

 const recurToTen = (num = 1) => {
  // The return statement ends function execution and specifies a value to be returned to the function caller.
  // Without the return statement, the loop is endless.
  if (num > 10) return;
  console.log(num);
  num++;
  recurToTen(num);
 }

 recurToTen(); // logs 1 - 10

 // "With power comes great responsibility"
 // Reasons to use (not abuse) recursion:
 // 1) There's less code
 // 2) It has elegant cod (aka pleasing to look at)
 // 3) It offers increases readability

 // Reasons to NOT use recursion:
 // 1) Performance
 // 2) Possbility of code becoming more difficult to debug (aka follow the logic)
 // 3) Is the readibility improved?

 // The standard recursion example: the Fibonacci sequence
 // 0, 1, 1, 2, 3, 5, 8, 13, 21, etc.

 // Without recursion:
 const fibonacci = (num, array) = [0, 1] => {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);
    num -= 1;
  }
  return array;
 }

console.log(fibonacci(12));

// With recursion:
const fib = (num, array = [0, 1]) => {
  if (num <= 2) return array;
  const [nextToLast, last] = array.slice(-2);
  return fib(num - 1, [...array, nextToLast + last]);
}

fib(12);

// What number is in the nth position of the Fibonacci Sequence?

// Without recursion:
const fibonacciPos = (pos) => {
   if (pos <= 1) return pos;
   const seq = [0, 1];
   for (let i = 2; i <= pos; i++) {
    const [nextToLast, last] = seq.slice(-2);
    seq.push(nextToLast + last);
   }
   return seq[pos];
}

console.log(fibonacciPos(8)); // logs 21

// With recursion: the example below uses recursion twice in the return statement:
// const fibPos = (pos) => {
//   if (pos < 2) return pos;
//   return fibPos(pos - 1) + fibPos(pos - 2);
// }

// same function written as one line:
const fibPos = pos => pos < 2 ? pos : fibPos(pos - 1) + fibPos(pos - 2);

console.log(fibPos(8));