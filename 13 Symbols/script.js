// create a Symbol
const sym = Symbol();
const sym1 = Symbol("foo"); // symbol with an identifier
const sym2 = Symbol("bar");

console.log(sym, sym1, sym2);
console.log(typeof sym); // logs symbol
console.log(sym1.description); // logs foo

/* Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique. */

console.log(Symbol('sym') === Symbol('sym')); // false

/* Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object. */

const user = {
  [Symbol('id')]: 1,
  name: 'John Doe',
  email: 'john@gmail.com',
};

console.log(user[Symbol('id')]);

// Symbols are NOT enumerable - symbols are not listed 
console.log(Object.keys(user));
console.log(Object.values(user));

// symbols are not listed either:
for(let key in user) {
  console.log(key);
}

// getOwnPropertySymbols shows symbol id;
console.log(Object.getOwnPropertySymbols(user));

// another way to create symbols, using Symbol.for()
// checks Symbol registry before creating a new one:
const sym3 = Symbol.for('foo');
const sym4 = Symbol.for('foo');

console.log(sym3 === sym4); // returns true

console.log(Symbol.keyFor(sym3)); // logs foo

// returns string representation of the symbol:
console.log(sym1.toString());
// logs string representation of symbol:
console.log(sym1.valueOf());
// log Symbol properties:
console.log(Object.getOwnPropertyNames(Symbol));
