/* What is bind?

1. Bind an object to a function.
2. Reference it using 'this' 

Video tutorial: https://www.youtube.com/watch?v=g2WcckBB_q0. 

*/ 

let c1 = {
  x: 1,
  y: 10
};

let c2 = {
  x: 25,
  y: 235
};

function printCoordinates() {
  console.log(this.x + ', ' + this.y);
}

// bind c1 and c2 objects to function printCoordinates
let c1_func = printCoordinates.bind(c1)
let c2_func = printCoordinates.bind(c2);

// call the objects
c1.func();
c2.func();