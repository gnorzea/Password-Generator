var characters = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeric: '0123456789',
  special: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
}

var addLowercase = false;
var addUppercase = false;
var addNumeric = false;
var addSpecial = false;


function generatePassword() {
  var password = [];
  var passLength = [];

  var passLength = window.prompt("How long would you like your password to be? Please enter a number between 8 and 128")
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = window.prompt("Please enter a number between 8 and 128");
  }

  addNumeric = confirm("Would you like to add numbers?");
  addUppercase = confirm("Would you like to add uppercase letters?");
  addLowercase = confirm("Would you like to add lowercase letters?");
  addSpecial = confirm("Would you like to add symbols?");

  if (!addNumeric && !addUppercase && !addLowercase && !addSpecial) {
    choices = alert("You must choose a criteria!");

  }
  while (password.length < passLength) {
    if (addNumeric && password.length < passLength) {
      password += characters.numeric[Math.floor(Math.random() * characters.numeric.length)];
    }
    if (addUppercase && password.length < passLength) {
      password += characters.uppercase[Math.floor(Math.random() * characters.uppercase.length)];
    }
    if (addLowercase && password.length < passLength) {
      password += characters.lowercase[Math.floor(Math.random() * characters.lowercase.length)];
    }
    if (addSpecial && password.length < passLength) {
      password += characters.special[Math.floor(Math.random() * characters.special.length)];
    }
  }
  var passwordText = document.querySelector("#password")
  passwordText.value = password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
