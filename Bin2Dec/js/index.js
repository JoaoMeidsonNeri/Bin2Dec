// Activate the convert() function with an enter key or numpad enter
const input = document.getElementById("binary");
input.addEventListener("keyup", function(event) {
  if ( event.code === "Enter" ||event.code === "NumpadEnter" ) {
    event.preventDefault();
    document.getElementById("btn").click();
  }
})


// Converter
function convert() {
  const char = document.getElementById("binary").value;

  if ( validate(char) ) {
    const decimal = parseInt(char, 2)
    document.getElementById("result").value = decimal;
  }
  else {
    document.getElementById("result").value = "";    
  }
}


function validate(value) {

  removeSpaces(value)
  
  const binary = value.split('')
  for ( let i = 0; i < value.length; i++ ) {
    if ( binary[i] !== "1" && binary[i] !== "0" ) {
      return alert("Please, enter only 0 or 1.");
    }
  }
  return value;
}


// Remove blank spaces
function removeSpaces(value) {
  if ( value === ' ' ) {
    return alert("Please, dont use spaces.");
  }
  else if ( value === '' ) {
    return alert("Please, input a binary value.")
  }
}