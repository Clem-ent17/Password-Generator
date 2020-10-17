// Assignment Code
var generateBtn = document.querySelector("#generate");


// Series of prompts and questions to define the specificity of the password
function writePassword() {
  // Password size
  var askSize = prompt("Enter the size of your password (min. 8 / max. 128):");
  // Password lower case
  var askLowercase = confirm("Do you want lower case in your password?");
  // Password upper case
  var askUppercase = confirm("Do you want UPPER CASE in your password?");
  // Password number
  var askNumber = confirm("Do you want numbers in your password?");
  // Password special character
  var askSpecialCharacter = confirm("Do you want Special Character in your password?");


  // Variable lower case
  var lowercases = 'abcdefghijklmnopqrstuvwxyz';
  // Variable upper case
  var uppercases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // Variable numbers
  var numbers = '0123456789';
  // Variable special character
  var specialCharacters = '!"#$%&\]()*+,-./:;<=>?@[^_`{|}~';
  
  
  // Function to generate a Password 
  function generatePassword() {
     var password = '';
     var passwordCharacter = '';
  
     //Conditional to select variables for the password
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
  
     //Loop to generate the password with the correct variable and lenght 
     for (let i = 0; i < askSize; i++) {
       password += passwordCharacter.charAt(Math.floor(Math.random() *passwordCharacter.length))
     }
     return password
  }

  //If Password size is correct: generate password, else: error
  if (askSize >= 8 && askSize <= 128) {
    var password = generatePassword();
  } else {
    alert("Error: The password size has to be between 8 and 128 characters");
  }
  
  //Display password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Action on button click
generateBtn.addEventListener("click", writePassword); 


