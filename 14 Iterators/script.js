/* In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination. */

/* const app = {
  // index is required
  nextIndex: 0,
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'], next() {
    if (this.nextIndex >= this.teams.length) {
      return { done: true}
    }

    const returnValue = { value: this.teams[this.nextIndex], done: false };
    this.nextIndex++;
    return returnValue;
  },
}; */

/* console.log(app.next()); // these statements return each value of the teams array and the value of done
console.log(app.next());
console.log(app.next());
console.log(app.next());
console.log(app.next()); */

// iterators and iterables are not the same!

/* Iterators provide a standardized way to access elements sequentially, while iterables are objects that define the iteration behavior by implementing the iterator protocol. */

// the following won't work, which is iterating over the object:
/* for (const team of app) {
  console.log(team);
} */

const app = {
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length? { value: this.teams[nextIndex++], done: false} : { done: true};
      },
    };
  },
};

const iterator = app[Symbol.iterator]();
/* console.log(iterator.next().value); // each one logs an array value
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next()); // logs done .'true' */

// now the following works, using the iterator const
for (const team of app) {
  console.log(team);
}