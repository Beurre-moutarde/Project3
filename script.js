// Assignment Code
var generateBtn = document.querySelector("#generate");


//Validate the user input
function getPasswordOptions(userNumCharacters) {
    if (isNaN(userNumCharacters)) {
      alert("Please enter a valid number.");
      return false;
    } else if (parseInt(userNumCharacters) < 8) {
      alert("Password length must be at least 8 characters long.");
      return false;
    } else if (parseInt(userNumCharacters) >= 128) {
      alert("Password must be less than 129 characters.");
      return false;
    }
    return true;
  }
  
  //Get random characters from each chosen character type
  function getRandomElementFromArray(collection) {
    return collection[Math.floor(Math.random() * collection.length)];
  }
  
  //Function to prompt user for password options
  function generatePassword() {
    var userNumCharacters = prompt(
      "How many characters do you want your password to contain?"
    );
    var passwordValid = getPasswordOptions(userNumCharacters);
    if (passwordValid) {
      var hasSpecialCharacters = confirm(
        "Press OK to confirm special characters."
      );
      var hasNumbers = confirm("Click OK to confirm adding numeric characters.");
      var hasLowerCase = confirm(
        "Press OK to confirm adding lowercase characters."
      );
      var hasUpperCase = confirm(
        "Press OK to confirm adding uppercase characters."
      );
    }
    
    if (
      [hasSpecialCharacters, hasNumbers, hasLowerCase, hasUpperCase].includes(
        true
      )
    )
      
      var chosenChar = [];
  
    
    var guaranteedChar = [];
  
    
    if (hasSpecialCharacters) {
      chosenChar = chosenChar.concat(specialCharacters);
      guaranteedChar.push(
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
      );
    }
    if (hasNumbers) {
      chosenChar = chosenChar.concat(numericCharacters);
      guaranteedChar.push(
        numericCharacters[Math.floor(Math.random() * numericCharacters.length)]
      );
    }
    if (hasLowerCase) {
      chosenChar = chosenChar.concat(lowerCasedCharacters);
      guaranteedChar.push(
        lowerCasedCharacters[
          Math.floor(Math.random() * lowerCasedCharacters.length)
        ]
      );
    }
    if (hasUpperCase) {
      chosenChar = chosenChar.concat(upperCasedCharacters);
      guaranteedChar.push(
        upperCasedCharacters[
          Math.floor(Math.random() * upperCasedCharacters.length)
        ]
      );
    }
  
    //For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
    var randomChar = [];
    for (var i = 0; i < userNumCharacters; i++) {
      var index = Math.floor(Math.random() * chosenChar.length);
      randomChar.push(chosenChar[index]);
    }
    var replacedPosition = {};
    //While loop to ensure an index position that has already been replaced with a guaranteed character is not replaced with another guaranteed character.
    while (guaranteedChar.length > 0) {
      var replaceChar = Math.floor(Math.random() * randomChar.length);
      if (!replacedPosition[replaceChar]) {
        randomChar[replaceChar] = guaranteedChar.pop();
        replacedPosition[replaceChar] = true;
      }
    }
    return randomChar.join("");
  }


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var characterCount;

//Numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Special Characters
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "?", "/", ","];

//Letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Upper Letters
var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];