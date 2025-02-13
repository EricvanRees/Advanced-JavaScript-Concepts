// Using the "test" method, returns true or false

l/* et sentence = "The dog chased the cat."

let regex = /the/ 

let myString = "Hello World!";
let myRegex = /Hello/;
let result = myRegex.test(myString)

console.log(result); // logs true */

// Match literal strings - case sensitive

/* let waldoIsHiding = "Somewhere Waldo is hiding in this text";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding); */

// test for multiple words at once using pipe char
/* let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
 */
// Ignore Case While Matching

/* let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString); */ // logs true

// the "i" flag ignores case

// Extract Matches
// use the match method to extract matches

l/* et extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex); */ // logs "coding"

// Find More Than the First Match
// the "g" flag helps to find multiple matches

/* let testStr = "Repeath, Repeath, Repeat";
let ourRegex = /Repeat/g;
testStr.match(ourRegex); // returns array of 3 elements

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // combines two flags 
let result = twinkleStar.match(starRegex);  

console.log(result); // returns ["Twinkle", "twinkle"] */ 

// Match Anything with Wildcard Period
// a "." is a wildcard char

/* let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // returns ["hum"]
hugStr.match(huRegex); // returns ["hug"]

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.text(exampleStr);

console.log(result); // returns true */

// Match Single Character with Multiple Possibilities

// match from a predefined group of chars

/* let bgRegex = /b[aiu]g/; // would match bag, big or bug

let quoteSample = "Beware of bugs in the above code; I have only proved it correct...";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex);

console.log(result); // logs all vowels in string */

// Match Letters of the Alphabet
// match a range of letters

/* let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // = match all upper and lowercase letters in the entire string
let result = quoteSample.match(alphabetRegex);

console.log(result); // matches every letter in the string */

// Match Numbers and Letters of the Alphabet

/* let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[2-6h-s]/ig;
let result = quoteSample.match(myRegex);

console.log(result); // logs every number and letter in the defined range */

// Match Single Characters Not Specified










