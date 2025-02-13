// Basics of Regular Expressions (Regex) - JavaScript Tutorial

// link: https://www.youtube.com/watch?v=ArxOzeAONHg 

// A "regular expression" is a pattern to search through text.

// It is used for:
// 1) validating text input
// 2) extracting information from text

// let re = /\w{3}/; // matches 3 alphanumeric chars

// 1) Test and Search method examples:

//console.log(re.test('dom')); // logs true

//console.log('dom'.search(re)); // logs an index (0 in this case)

//console.log('hi my name is dom'.search(re)); // logs 6

// Search method returns -1 if nothing has been found

// 2) Execute method - returns an array with more details on the actural match

// logs ["dom", index: 3, input: "hi dom", groups: undefined]:

//console.log(re.exec('hi dom'));

/* Possible matches:
- Hello, Dom. You have 5 tasks remaining.
- Greeting, Johnny. You have 1 task remaining.
*/  

//
let re = /^(\w+), (\w+)\. You have (\d+) tasks? remaining\.$/;

console.log(re.test('Hello, Dom. You have 5 tasks remaining.'));
console.log(re.test('Greeting, Johnny. You have 1 task remaining.'));

// the exec method allows you to access individual capture groups 

console.log(re.exec('Hello, Dom. You have 5 tasks remaining.'));
console.log(re.exec('Greeting, Johnny. You have 1 task remaining.'));

// if (re.exec() === null) { means there's no match}

// 3) Match method

console.log(re.exec('Hello, Dom. You have 5 tasks remaining.'.match(re)));

// returns the same as console.log(re.exec('Hello, Dom. You have 5 tasks remaining.'));

