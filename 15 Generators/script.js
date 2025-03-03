/* Generator functions
While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state. Generator functions provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. Generator functions are written using the function* syntax.

When called, generator functions do not initially execute their code. Instead, they return a special type of iterator, called a Generator. When a value is consumed by calling the generator's next method, the Generator function executes until it encounters the yield keyword.

The function can be called as many times as desired, and returns a new Generator each time. Each Generator may only be iterated once. 

see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators 

*/

// the following does the same as the iterator examples from before, but with less syntax as you don't have to create a next variable manually
const teams = ['Red Sox', 'Yankees', 'Astros', 'Dodgers'];

/* const iterator = createTeamIterator(teams);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
 
for (const team of createTeamIterator(teams)) {
  console.log(team);
}

console.log([...createTeamIterator(teams)]);

*/

const [first, second, third] = createTeamIterator(teams);

console.log(first, second, third);