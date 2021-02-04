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
  const password = {
    passString: "",
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
  const charType = ["lowercase", "uppercase", "numeric", "special"];
  const passType = ["isLower", "isUpper", "isNum", "isSpec"];
  var valid = false;
  const characters = {
    lower: [97, 122],
    upper: [65, 90],
    numeric: [48, 57],
    special: [33,35,36,37,39,40,41,43,44,45,46,47,58,63,64,91,92,93,94,95,123,125,126]
  };

  do {
    // Prompts for password length
    var passLength = prompt("Enter a password length between 8 and 128 characters.");
    // console.log(passLength + ": Line 50");
    // Validates user entered length
    if (passLength) {
      if (passLength >= 8 && passLength <= 128) {
        password.pLength = passLength;
        valid = true;
        // console.log("Line 56");
      }
    }
  } while(valid !== true);


  alert("From the following, please choose at least one (1) type of character.")
  // Prompts for character types to include
  while(!password.hasTrue()) {
    for (var i=0; i < 4; i++) {
      password[passType[i]] = confirm("Would you like to include " + charType[i] + " characters?");
    }
  }

  let counter = 0;
  // Used for switch case to generate a random type of character
  const type = [];

  // Adds one of each selected types of characters to the password object's passString
  if (password.isLower) {
    password.passString += String.fromCharCode(getRanNum(characters.lower[0], characters.lower[1]));
    type.push("lower");
    counter++;
  }
  if (password.isUpper) {
    password.passString += String.fromCharCode(getRanNum(characters.upper[0], characters.upper[1]));
    type.push("upper");
    counter++;
  }
  if (password.isNum) {
    password.passString += String.fromCharCode(getRanNum(characters.numeric[0], characters.numeric[1]));
    type.push("numeric");
    counter++;
  }
  if (password.isSpec) {
    var specLength = characters.special.length;
    password.passString += String.fromCharCode(characters.special[getRanNum(0, specLength - 1)]);
    type.push("special");
    counter++;
  }

  var neededChars = password.pLength - counter;
  for (var i = 0; i < neededChars; i++) {
    var newTypeNum = getRanNum(0, counter - 1); // randomly chooses a type of chosen characters

    // Switch case to add random character to passString
    switch (type[newTypeNum]) {
      case "lower":
        password.passString += String.fromCharCode(getRanNum(characters.lower[0], characters.lower[1]));
        break;
      case "upper":
        password.passString += String.fromCharCode(getRanNum(characters.upper[0], characters.upper[1]));
        break;
      case "numeric":
        password.passString += String.fromCharCode(getRanNum(characters.numeric[0], characters.numeric[1]));
        break;
      case "special":
        password.passString += String.fromCharCode(characters.special[getRanNum(0, specLength - 1)]);
        break;
    }
  } return password.passString; // temporary, would like to shuffle


  function getRanNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
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