import validator from './validator.js';

let inputValue
let inputName
let CardValidation

document.querySelector("#buttonv").addEventListener("click",theFunction);
function theFunction() {
    inputName = document.getElementById("Username").value;
    document.getElementById("nombre").innerHTML = inputName;
    inputValue = document.getElementById("Cardnumber").value;
    // console.log(inputValue);
    let maskifycc = validator.maskify(inputValue);
    document.getElementById("resultado").innerHTML = maskifycc;
    if (inputValue == ""  || isNaN(inputValue)){
      document.getElementById("resultado").innerHTML = "Los datos que ingresaste no son válidos, por favor ingresa un número";
    }
    else {
      CardValidation = validator.isValid(inputValue);
      if (CardValidation == true){
        document.getElementById("validornot").innerHTML = "es un número de tarjeta VÁLIDO";
      } else {
        document.getElementById("validornot").innerHTML = "es un número de tarjeta NO VÁLIDO";
      }

    }
}
// console.log(validator);