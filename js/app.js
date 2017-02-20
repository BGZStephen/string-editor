let userInput = document.getElementById("user-input");
const removeVowelsButton = document.getElementById("remove-vowels")
const removeSpacesButton = document.getElementById("remove-spaces")
const reverseStringButton = document.getElementById("reverse-string")
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


reverseStringButton.onclick = () => {
  const textArray = userString.split(``)
  const reversedArray = textArray.reverse();
  let newString = `<p>`
  for(i = 0; i < reversedArray.length; i++) {
    newString += reversedArray[i]
  }
  newString += `</p>`
  outputElement.innerHTML = newString
}
