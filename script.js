// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var askSize = prompt("Enter the size of your password (min. 8 / max. 128):");
  var askLowercase = confirm("Do you want Lower Case in your password?");
  var askUppercase = confirm("Do you want Upper Case in your password?");
  var askNumber = confirm("Do you want numbers in your password?");
  var askSpecialCharacter = confirm("Do you want Special Character in your password?");


  var lowercases = 'abcdefghijklmnopqrstuvwxyz';
  var uppercases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var specialCharacters = '!"#$%&\]()*+,-./:;<=>?@[^_`{|}~';
  
  
  function generatePassword() {
     var password = '';
     var passwordCharacter = '';
  
     if (askLowercase === true) {
       passwordCharacter += lowercases;
     }
     if (askUppercase === true) {
       passwordCharacter += uppercases;
     }
     if (askNumber === true) {
       passwordCharacter += numbers;
     }
     if (askSpecialCharacter === true){
       passwordCharacter += specialCharacters;
     }
  
     for (let i = 0; i < askSize; i++) {
       password += passwordCharacter.charAt(Math.floor(Math.random() *passwordCharacter.length))
     }
     return password
  }

  if (askSize >= 8 && askSize <= 128) {
    var password = generatePassword();
  } else {
    alert("Error: The password size has to be between 8 and 128 characters");
  }
  
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


