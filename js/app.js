var userInput = document.getElementById("user-input");
var removeVowelsButton = document.getElementById("remove-vowels")
var removeSpacesButton = document.getElementById("remove-spaces")
var outputElement = document.getElementById("output-container")
var outputString;

var userString; // define global variable for user string

userInput.addEventListener("keyup", function() {
  userString = document.getElementById("user-input").value;
})

removeVowelsButton.onclick = function() {
  outputString = ""
  outputString = "<p>Output: "
  outputString += userString.replace(/[aeiou]/gi,"")
  outputElement.innerHTML = outputString + "</p>"
}

removeSpacesButton.onclick = function() {
  outputString = ""
  outputString = "<p>Output: "
  outputString += userString.replace(/ /gi,"")
  outputElement.innerHTML = outputString + "</p>"
}
