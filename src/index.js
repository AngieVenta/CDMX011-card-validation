import validator from './validator.js';

var inputValue

document.querySelector("#buttonv").addEventListener("click",theFunction);
function theFunction() {
    const inputName = document.getElementById("username").value;
    document.getElementById("nombre").innerHTML = inputName;
    inputValue = document.getElementById("cardnumber").value;
    // console.log(inputValue);
    const maskifyCC = validator.maskify(inputValue);
    document.getElementById("resultado").innerHTML = maskifyCC;
    if (inputValue == ""  || isNaN(inputValue)){
      document.getElementById("resultado").innerHTML = "Los datos que ingresaste no son válidos, por favor ingresa un número";
      document.getElementById("validornot").innerHTML = "";
    }
    else {
      const cardValidator = validator.isValid(inputValue);
      const cardIssuer = validator.getIssuer(inputValue); 
      if (cardValidator == true){
        document.getElementById("validornot").innerHTML = "es un número de tarjeta VÁLIDO y su emisor es " + cardIssuer;
        document.getElementById("theForm").reset(); 
      } else {
        document.getElementById("validornot").innerHTML = "es un número de tarjeta NO VÁLIDO, verifica los datos ingresados";
      }
    }
}
// console.log(validator);