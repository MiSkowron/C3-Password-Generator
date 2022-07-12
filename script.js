// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt('Desired Password Length Min:8 Max:128')
  if ((passwordLength < 8 || passwordLength > 128)) {
  
  alert('Please enter a valid number');
  exit();
  } else {
  var chars = prompt('List Desired Characters', '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  var password = "";
  var passwordTextEl = document.querySelector("#password");

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }}

    console.log(password);
    passwordTextEl.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
