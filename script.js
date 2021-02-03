// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // const type = {
  //   lowecase: 0,
  //   uppercase: 1,
  //   numerica: 2,
  //   special: 3
  // };
  let password = {
    password: "",
    pLength: 0,
    isLower: false,
    isUpper: false,
    isNum: false,
    isSpec: false,
    hasTrue: function() {
      if (this.isLower || this.isUpper) {
        return true;
      } else if (this.isNum || this.isSpec) {
        return true;
      } else {
        return false;
      }
    }
  };
  var i = 0;
  var type = ["lowercase", "uppercase", "numeric", "special"];
  var passType = ["isLower", "isUpper", "isNum", "isSpec"];
  var typeMsg = "Would you like to include " + type(i) + " characters?";
  var valid = false;

  do {
    // Prompts for password length
    var passLength = prompt("Enter a password length between 8 and 128 characters.");
    // Validates user entered length
    if (typeof(passLength) === 'string') {
      if (passLength.length >= 8 && passLength.length <= 128) {
        password.pLength = passLength;
        valid = true;
      }
    }
  } while(valid !== true);


  alert("From the following, please choose at least one (1) type of character.")
  
  for (i=0; i < 4; i++) {
    password.passType(i) = confirm(typeMsg);
  }
  
  


}

/* Don't forget
  PROMPT  - user entry
  CONFIRM - T/F
  ALERT   - message
*/

/*

Scratch

After click, prompt for password criteria
  1) PROMPT FOR:
      A) length ----> RECEIVE (8-128 characters)
      B) character types ----> RECEIEVE (lowercase, uppercase, numeric, and/or special char) **min of 1 type**
  2) VALIDATE
  3) GENERATE
  4) DISPLAY (alert or written to page)

******************************************************

Instructions:

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/