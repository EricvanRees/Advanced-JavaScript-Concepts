document.getElementById("phoneNum").addEventListener("input", (event) => {
  // regex for finding a phone number:
  // may start with 3 digits or 3 digits inside of parentheses
  // next, we're looking for an optional char set: [-. ]?
  // next, looking for 3 more digits(\d{3}) followed by an optional charset
  // finally, looking for 4 more digits with an ending tag: (\d{4})$
  const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
  // select input element
  const input = document.getElementById("phoneNum");
  const format = document.querySelector(".phoneFormat");
  // user text input for number
  const phone = input.value;
  // here the regex is applied, regex.test will return true or false
  const found = regex.test(phone);
  if (!found && phone.length) {
    // when entering a non-valid number, JS displays the input as red and shows examples
    input.classList.add("invalid");
    format.classList.add("block");
    // when regex.test returns true, red text and examples of correct numbers are no longer visible 
  } else {
    input.classList.remove("invalid");
    format.classList.remove("block");
  }
});

document.getElementById("phoneForm").addEventListener("submit", (event) => {
  // prevent the page from reloading if there's a form
  event.preventDefault();
  const input = document.getElementById("phoneNum");
  // [()-. ] = char set with hypen, period and space
  const regex = /[()-. ]/g;
  // uses replaceAll instead of test to replace extra chars with empty strings to store only numbers
  const savedPhoneNum = input.value.replaceAll(regex, "");
  console.log(savedPhoneNum);
});

document.getElementById("textForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("textEntry");
  // regex that looks for occurances of more than one space
  // const regex = /\s /-> indicates spaces, tabs & line breaks
  // "2,"" means two or more
  const regex = / {2,}/g;
  // replace two or more whitespaces with a single one and trim whitespaces at the beginning and the end
  const newText = input.value.replaceAll(regex, " ").trim();
  console.log(newText);
  const encodedInputText = encodeURI(input.value);
  const encodedCleanText = encodeURI(newText);
  // spaces in the uncleaned text are represented as %20 when logging a text with spaces:
  console.log(encodedInputText);
  // cleaned text has only one space in the case of "Kansas City", this is how it should be done when creating a url for an API endpoint
  console.log(encodedCleanText);
});