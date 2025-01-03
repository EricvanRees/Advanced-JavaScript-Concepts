// Foundational knowledge for writing pure functions

// JS data types

// Primitive vs structural

/* Primitive:
  1) undefined
  2) Boolean
  3) Number
  4) String
  5) BigInt
  6) Symbol
*/ 

/* Structural 
  1) Object: (new) Object, Array, Map, Set, WeakMap, Date
  2) Function

*/ 

// Passing values vs passing references
// Primitives pass values:
let x = 2;
let y = x;
y += 1;
console.log(y);
console.log(x);

// Structural types use references:
let xArray = [1, 2, 3];
let yArray = xArray;
yArray.push(4);
console.log(yArray); // [1, 2, 3, 4]
// prints [1, 2, 3, 4] even though 4 was not added to xArray:
console.log(xArray); 
// this is because both xArray and yArray point to the same memory spot for storing the array

// Mutable vs Immutable

// Primitives are immutable
let myName = "Dave";
myName[0] = "W"; // does not work, strings are immutable

// Reassignment is not the same as mutable
myName = "David";
console.log(myName);

// Structures contain mutable data
yArray[0] = 9;
console.log(yArray); // [9, 2, 3, 4]
console.log(xArray); // [9, 2, 3, 4]

// Pure functions require you to avoid mutating the data

// An example of an in impure function that mutates the data
const addToScoreHistory = (array, score) => {
  array.push(score); // this mutates the original array
  return array;
}

const scoreArray = [44, 23, 12];
console.log(addToScoreHistory(scoreArray, 14));
// logs [44, 23, 12, 14]

// This mutates the original array.
// This is considered to be a side-effect

// Note: "const" does not make the array immutable

// We need to modify our function so it does not mutate the original data

// This brings us to making copies of data

// Shallow copy vs. Deep copy (clones)
const zArray = [...yArray, 10];
// both arrays do not share the same memory reference and contain different values:
console.log(zArray); // [9, 2, 3, 4, 10]
console.log(yArray); // [9, 2, 3, 4]

console.log(xArray === yArray); // true
console.log(yArray === zArray); // false, as zArray is a shallow copy of yArray

// clone an existing array with Object.assign()
const tArray = Object.assign([], zArray);
console.log(tArray);
console.log(tArray === zArray); // false, they do not use the same reference in memory
tArray.push(11); // 11 is only added to tArray, not zArray
console.log(zArray);

// But if there are nested arrays or objects...
yArray.push(8, 9, 10);
const vArray = [...yArray];
console.log(vArray); // [9, 2, 3, 4, [8, 9, 10]];
vArray[4].push(5); 
console.log(vArray); 
console.log(yArray); // both arrays are now equal, which is not logical as we've made a copy using the spread operator with yArray. 
// the problem is that nested structural data types still a reference when you use a shallow copy!
// a shallow copy does not go levels deep when it comes to structural data types, so any nested data types still share a reference though the types that are not nested do not. That's why it is "shallow".

// Note: Array.from() and slice() create shallow copies too!

// How to shallow freeze an object:

// When it comes to objects, what...
// ...Object.freeze() ??

// Object.freeze() still mutates, it is a shallow freeze:

const scoreObj = {
  "first": 44,
  "second": 12,
  "third": {"a": 1, "b": 2}
}

Object.freeze(scoreObj);
scoreObj.third.a = 8;
console.log(scoreObj);

// Deep copy is needed to avoid this

// Several libraries like lodash, Ramda, and others have this feature built-in

/* Here is a one line Vanilla JS solution,
but it does not work with Dates, functions, undefined, Infinity, RegExps, Maps, Sets, Blobs, FileLists, ImageDatas, and other complex data types:
*/

const newScoreObj = JSON.parse(JSON.stringify(scoreObj));
console.log(newScoreObj);
console.log(newScoreObj === scoreObj); // returns fale, as you've made a deep copy and not a shallow one

// deep clone function without having to use a library:

const deepClone = (obj) => {

  if (typeof obj !== "object" || obj === null) return obj;

  // Create an array or object to hold the values
  const newObject = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];
    // recursive call for nested objects & arrays
    newObject[key] = deepClone(value);
  }
  return newObject;
}

const newScoreArray = deepClone(scoreArray);
console.log(newScoreArray); // [44, 23, 12, 14]
console.log(newScoreArray === scoreArray); // false

const myScoreObj = deepClone(scoreObj);
console.log(myScoreObj); // {first: 44, second: 12, third: {...}}
console.log(myScoreObj === scoreObj); // false

// With the deep clone function, you can now make a pure function

// A pure function is a function where the return value is only determined by its arguments without any side effects.

const pureAddToScoreHistory = (array, score, cloneFunc) => {
  const newArray = cloneFunc(array);
  newArray.push(score);
  return newArray;
}

const pureScoreHistory = pureAddToScoreHistory(scoreArray, 18, deepClone);

console.log(pureScoreHistory); // returns [44, 23, 12, 14, 18]
console.log(scoreArray); // original array was never mutated

// Review:

// Primitive vs Structural Data Types

// Primitives data ypes pass values

// Structural data types pass references

// Primitive data types are immutable

// Reassignment is not the same as mutable

// Structural data types contain mutable data

// Shallow copy vs. deep copy (clones of data structures)

// Shallow copies still share references of nested structures which allows for mutation of the original data

// Object.freeze() creates a shallow freeze

// Deep copies share no reference

// All of this is important to know when constructing Pure Functions because they require you to avoid mutating the original data