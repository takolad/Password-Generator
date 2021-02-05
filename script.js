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


  // Variables to make things a bit easier/cleaner
  const charType = ["lowercase", "uppercase", "numeric", "special"];
  const passType = ["isLower", "isUpper", "isNum", "isSpec"];
  var valid = false;
  // ASCII character codes
  const characters = {
    lower: [97, 122],
    upper: [65, 90],
    numeric: [48, 57],
    special: [33,35,36,37,39,40,41,43,44,45,46,47,58,63,64,91,92,93,94,95,123,125,126]
  };

  // Prompts for password length then validates
  do {
    var passLength = prompt("Enter a password length between 8 and 128 characters.");
    if (passLength) {
      if (passLength >= 8 && passLength <= 128) {
        password.pLength = passLength;
        valid = true;
      }
    }
  } while(valid !== true);


  // Confirms which character types to include
  while(!password.hasTrue()) {
    alert("From the following, please choose at least one (1) type of character.");
    for (var i=0; i < 4; i++) {
      password[passType[i]] = confirm("Would you like to include " + charType[i] + " characters?");
    }
  }

  // keeps track of how many types of characters were selected
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

  // Calculates how many more characters are still needed
  var neededChars = password.pLength - counter;
  // Gets the remaining needed characters
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
  } 
  
  shuffleString(password.passString);
  return password.passString;


  // Returns a random number between a range (inclusively)
  function getRanNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // Converts password string to array; shuffles array; reassigns shuffled array as string
  function shuffleString(basic) {
    var tempArr = basic.split("");
    for(let a = basic.length - 1; a > 0; a--) {
      let b = Math.floor(Math.random() * a);
      const temp = tempArr[a];
      tempArr[a] = tempArr[b];
      tempArr[b] = temp;
    }
    // Converts array to string with no separation and sets to password's passString attribute
    password.passString = tempArr.join("");
  }

}