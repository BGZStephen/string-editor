let userInput = document.getElementById("user-input");
const removeVowelsButton = document.getElementById("remove-vowels")
const removeSpacesButton = document.getElementById("remove-spaces")
const outputElement = document.getElementById("output-container")
let outputString;

let userString; // define global variable for user string

userInput.addEventListener("keyup", () => {
  userString = document.getElementById("user-input").value;
})

removeVowelsButton.onclick = () => {
  outputString = ""
  outputString = "<p>Output: "
  outputString += userString.replace(/[aeiou]/gi,"")
  outputElement.innerHTML = outputString + "</p>"
}

removeSpacesButton.onclick = () => {
  outputString = ""
  outputString = "<p>Output: "
  outputString += userString.replace(/ /gi,"")
  outputElement.innerHTML = outputString + "</p>"
}
