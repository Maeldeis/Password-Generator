var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function getPasswordOptions() {
  var length = parseInt(prompt("Enter password length (between 8 and 128):"));
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128.");
    return getPasswordOptions();
  }

  var includeSpecial = confirm("Include special characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");

  return {
    length: length,
    includeSpecial: includeSpecial,
    includeNumeric: includeNumeric,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase
  };
}

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generatePassword() {
  var options = getPasswordOptions();

  var allChars = [];
  if (options.includeSpecial) allChars = allChars.concat(specialCharacters);
  if (options.includeNumeric) allChars = allChars.concat(numericCharacters);
  if (options.includeLowercase) allChars = allChars.concat(lowerCasedCharacters);
  if (options.includeUppercase) allChars = allChars.concat(upperCasedCharacters);

  var password = '';
  for (var i = 0; i < options.length; i++) {
    password += getRandom(allChars);
  }

  return password;
}

var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');

function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);
