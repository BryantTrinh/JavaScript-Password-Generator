// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create an array of characters for password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

console.log(numericCharacters);
// Create an array of characters for Lowercase letters

var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'm', 'o', 'p', 'q', 'r', ' s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

console.log(lowerCasedCharacters);

// Create an array of characters for Uppercase letters

var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];

// Create an array for Special characters

// var specialCharacters = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// The parseInt() function parses a string argument and returns an integer of the specified

function getPasswordOptions() {
  var length = parseInt(
    alert('How many characters do you want your password to contain?'),
    // numeric value
    1
  );
}

// Create conditional statement to see if password length matches "number". length refering to parseInt's numeric value. 

if (Number.isNaN(length)) {
  alert('Password length must be a number');
  return null;
}

// Create conditional state to see if password is at least 9 characters long.

if (length < 8) {
  alert('Password length must be at least 8 characters long');
  return null;
}

// Create conditional to have no more than 128 characters

if (length > 128) {
  alert('Password cannot be more than 129 characters long');
  return null;
}

// Create a new variable, if user wants special characters or not, yes/no, boolean

var hasSpecialCharacters = confirm('Click on OK to add special characters');

// boolean variable, if user wants to include lowercase characters

var hasLowerCasedCharacters = confirm('Click on OK to add lower cased characters');

// boolean variable, if user wants to include uppercase characters
var hasUpperCasedCharacters = confirm('Click on OK to add upper cased characters');

// boolean variable, if user wants to include numeric characters

var hasNumericCharacters = confirm('Click on OK to add numeric characters');

// Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false

if (
  hasLowerCasedCharacters === false &&
  hasUpperCasedCharacters === false &&
  hasNumericCharacters === false &&
  hasSpecialCharacters === false
) {
  alert('You must select at least one character type');
  return null;
}

// store inputs in Object

var passwordOptions = {
  length: length,
  hasLowerCasedCharacters: hasLowerCasedCharacters,
  hasUpperCasedCharacters: hasUpperCasedCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasSpecialCharacters: hasSpecialCharacters,
};
return passwordOptions;
}

// Function for pulling random element from an array

function getRandomElement(array) {
  var randIndex = Math.floor() * array.length);
  var randElement = array[randIndex];
  return randElement;
}

// Function where we can generate password

function generatePassword() {
  var options = getPasswordOptions();
  // variable to store password
  var result = [];

  // array to store types of characters to include in password

  var possibleCharacters = [];

  // array to contain one of each type of chosen character so they will all be used

  var guaranteedCharacters = [];

  // create if statement to see if options exist

  if (!options) return null;

  // Conditional statement to add lowerCasedCharacters into array of characters based on input. Use concat

  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat (specialCharacters);
    guaranteedCharacters.push(getRandomElement(lowerCasedCharacters));
  }



















  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
