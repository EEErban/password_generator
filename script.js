// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password character arrays

const UppercaseChar =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const LowercaseChar =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const NumbersChar =["0","1","2","3","4","5","6","7","8","9"];

const SpecialChar =["!","?","@","£","$","%","&","+","#"];

// Variable for user input
// Prompt user to use at least 8 characters
// Alert user if character length doesn't meet the requirement
function generateOptions () {
  var length = parseInt(prompt("How many characters would you like to use?"))

  if (length < 8) {
    alert("Your password must contain at least 8 characters!")
    return;
  }
  if (length > 128) {
    alert("Your password must contain under 128 characters!")
    return;
  }


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
