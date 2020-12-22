// Aciona a função convert() com a tecla enter ou numpad enter
const input = document.getElementById("binary");
input.addEventListener("keyup", function(event) {
  if ( event.code === "Enter" ||event.code === "NumpadEnter" ) {
    event.preventDefault();
    document.getElementById("btn").click();
  }
})


// Faz a conversão de decimal para binário
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


// Valida os dados do input
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


// Remove os espaços em branco do input
function removeSpaces(value) {
  if ( value === ' ' ) {
    return alert("Please, dont use spaces.");
  }
  else if ( value === '' ) {
    return alert("Please, input a binary value.")
  }
}