// Prototypal Inheritance and the Prototype Chain

// ES6 introduced classes which is the modern way to construct objects

// That said, prototypal inheritance and the prototype chain are:
// 1) "under the hood", (ES6 classes are considered "syntactic sugar")
// 2) often brought up in interview questions, 
// 3) and are useful to understand.

// Object literals
const person = {
  alive: true
}

const musician = {
  plays: true
}
// example of inheritance: person in the parent of musician
musician.__proto__ = person;
console.log(musician.plays);
console.log(musician.alive);

// JS now has getPrototypeOf and setPrototypeOf methods instead of using __proto__
Object.setPrototypeOf(musician, person);
// logs "alive: true":
console.log(Object.getPrototypeOf(musician));
// "alive: true":
console.log(musician.__proto__);
// returns true
console.log(Object.getPrototypeOf(musician) === musician.__proto__);

console.log(musician.plays);
// missing property => go to person
console.log(musician.alive);

// Extending the prototype chain => general to specific to more specific
const guitarist = {
  strings: 6,
  // legacy code example:
  __proto__: musician
} 

console.log(guitarist.alive);
console.log(guitarist.plays);
console.log(guitarist.strings);
console.log(guitarist);

// 3 rules of Prototypal Inheritance
// No circular references are allowed (person.__proto__ can't be guitarist)
// The __proto__ value must be an object or null.
// An object can only directly inherit from one object

// object with getter and setter methods
// JavaScript getters and setters are special methods that provide access to object properties. Getters are used to read values of properties, while setters are used to write values to properties.

const car = {
  doors: 2,
  seats: "vinyl",
  get seatMaterial() {
    return this.seats;
  },
  set seatMaterial(material) {
    this.seats = material;
  }
}

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car); // note keyword "this" in setter
luxuryCar.seatMaterial = "leather"
console.log(luxuryCar);
console.log(luxuryCar.doors);
console.log(car);

// looping through direct and inherited keys
// getting the keys of an object:
console.log(Object.keys(luxuryCar));
// loop through each object key
Object.keys(luxuryCar).forEach(key => {
  console.log(key);
})

// But a for..in loop includes inherited props
for (let key in luxuryCar) {
  console.log(key);
}

// Object Constructor Functions and Prototypes
function Animal(species) {
  this.species = species;
  this.eats = true;
}

Animal.prototype.walks = function() {
  return `A ${this.species} is walking.`;
}

const Bear = new Animal("bear");

console.log(Bear.species);
console.log(Bear.walks());

// The prototype property is where inheritable props and methods are (in this case, "species" and "eats")
console.log(Bear.__proto__);
console.log(Bear.__proto__ === Animal.prototype);
console.log(Bear);

// Now an ES6 Classes example of inheritance

class Vehicle {
  constructor() {
    this.wheels = 4,
    this.motorized =  true
  }

  ready() {
    return "Ready to go!";
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super();
    this.wheels = 2
  }

  wheelie() {
    return "On one wheel now!"
  }
}

const myBike = new Motorcycle();
console.log(myBike);
console.log(myBike.wheels);
console.log(myBike.ready());
console.log(myBike.wheelie());

const myTruck = new Vehicle();
console.log(myTruck);