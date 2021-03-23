// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password character arrays

var UppercaseChar =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var LowercaseChar =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var NumbersChar =["0","1","2","3","4","5","6","7","8","9"];

var SpecialChar =["!","?","@","£","$","%","&","+","#"];

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

//Prompt for Uppercase character
var shouldIncludeUppercase = confirm("Do you want to use Uppercase letters?")

//Prompt for Lowercase character
var shouldIncludeLowercase = confirm("Do you want to use Lowercase letters?")

//Prompt for Special character
var shouldIncludeSpecial = confirm("Do you want to use Special characters?")

//Prompt for Numbers character
var shouldIncludeNumbers = confirm("Do you want to use Numerical characters?")
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
