// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create an array of characters for password
var numericCharacters = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Create an array of characters for Lowercase letters

var lowerCasedCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'm', 'o', 'p', 'q', 'r', ' s', 't', 'u', 'v', 'w', 'x','y', 'z' ];

// Create an array of characters for Uppercase letters

var upperCasedCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];

// Create an array for Special characters

var specialCharacters = [ '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
