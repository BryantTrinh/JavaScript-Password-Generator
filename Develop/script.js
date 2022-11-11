// Create an array of characters for password
var numericCharactersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Create an array of characters for Lowercase letters

var lowerCaseCharacterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


console.log(lowerCaseCharacterArray);

// Create an array of characters for Uppercase letters

var upperCaseCharactersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];

// Create an array for Special characters

var specialCharactersArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

console.log(specialCharactersArray);


// The parseInt() function parses a string argument and returns an integer of the specified

function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters do you want your password to contain?'),
    10
  );
  console.log("length =" + length);




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
  alert('Password cannot be more than 128 characters long');
  return null;
}

// Create a new variable, if user wants special characters or not, yes/no, boolean

var hasSpecialCharacters = confirm('Click on OK to add special characters');

  console.log("SpecialCharacters = " + hasSpecialCharacters);

// boolean variable, if user wants to include lowercase characters

var hasLowerCasedCharacters = confirm('Click on OK to add lower cased characters');

  console.log("LowercasedCharacters = " + hasLowerCasedCharacters);

// boolean variable, if user wants to include uppercase characters
var hasUpperCasedCharacters = confirm('Click on OK to add upper cased characters');

  console.log("UpperCasedCharacters = " + hasUpperCasedCharacters);

// boolean variable, if user wants to include numeric characters

var hasNumericCharacters = confirm('Click on OK to add numeric characters');

  console.log("NumericCharacters = " + hasNumericCharacters);


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

function getRandom(array) {
  var randIndex = (Math.floor(Math.random() * array.length));
  var randElement = array[randIndex];
  return randElement;

}

// Function where we can generate password

function generatePassword() {
  var options = getPasswordOptions();
  // variable to store password

  console.log('passwordOptions');
  console.log(options);
  var result = [];

  // array to store types of characters to include in password

  var possibleCharacters = [];

  // array to contain one of each type of chosen character so they will all be used

  var guaranteedCharacters = [];

  // create if statement to see if options exist

  if (!options) return null;

  // Conditional statement to add lowerCasedCharacters into array of characters based on input. Use concat. Push characters guaranteedCharacters.

  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacterArray);
    guaranteedCharacters.push(getRandom(lowerCaseCharacterArray));
    console.log("addinglowercasecharacters to possible arrays");
    console.log("possibleCharacters = " + possibleCharacters);
    console.log("guaranteedCharacters = " + guaranteedCharacters);
  }

 

  // Conditional statement that is an array of possible upper cased characters based on user input, push to guaranteedCharacters as well.

  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCaseCharactersArray);
    guaranteedCharacters.push(getRandom(upperCaseCharactersArray));
    console.log("addinguppercasecharacters to possible arrays");
    console.log("possibleCharacters = " + possibleCharacters);
    console.log("guaranteedCharacters = " + guaranteedCharacters);
  }

  // Conditional statement that is an array of numeric characters based on user input, push to guaranteedCharacters as well.box

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharactersArray);
    guaranteedCharacters.push(getRandom(numericCharactersArray));
    console.log("adding numeric characters to possible arrays");
    console.log("possibleCharacters = " + possibleCharacters);
    console.log("guaranteedCharacters = " + guaranteedCharacters);
  }

  // Conditional statement that is an array of special characters based on user input, push to guaranteedCharacters as well.

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharactersArray);
    guaranteedCharacters.push(getRandom(specialCharactersArray));
    console.log("adding special characters to possible arrays");
    console.log("possibleCharacters = " + possibleCharacters);
    console.log("guaranteedCharacters = " + guaranteedCharacters);
  }

  // Add a for loop to go over password length from the options object and itselects random indexes from each of those arrays of possible Characters and combining into one result.box

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }


  // Adding in at least one of each guaranteed character in the results array

  for (var i = 0; i< guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // take result and pass to writePassword

  return result.join('');

}

// #generate element reference

var generateBtn = document.querySelector('#generate');

// function to write the password to #password input
function writePassword() {
  console.log("ping");
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;

}

// Click button even listener

generateBtn.addEventListener('click', writePassword);
