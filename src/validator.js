const validator = {
  isValid(inputValue){
    const numberOfDigits = inputValue.split("").map(Number).reverse();
    for(let i = 0; i < numberOfDigits.length; i++) {
      if (i%2 !== 0){
        numberOfDigits[i] = numberOfDigits[i]*2;
          if (numberOfDigits[i] > 9){
          numberOfDigits[i] = numberOfDigits[i] - 9;
          }
       }
    }
    let suma = 0;
    for(let i = 0; i < numberOfDigits.length; i++){
      suma =  suma + numberOfDigits[i];
      
    }
    let cardValidation = false;
      if (suma%10 == 0){
        cardValidation = true;
       }
    return cardValidation;
  }, 


  maskify(inputValue){
    const digitsInput = inputValue.split("");
      if (digitsInput.length < 4){
        return inputValue;
      } else {
        let ccnomask = "";
        for(let i = digitsInput.length-4; i < digitsInput.length; i++){
          ccnomask += digitsInput[i];
        }
        let mask = "";
        for(let i = 0; i < digitsInput.length-4; i++){
          mask += "#";
        }
        return mask + ccnomask;
      }
  },

  getIssuer(inputValue){
    const cardLength = inputValue.length;   
    let cardType = "";
    if (inputValue.startsWith("4") && (cardLength == 15 || cardLength == 16)){
      cardType = "Visa";
      } else if (inputValue.startsWith("300") || inputValue.startsWith("301") || inputValue.startsWith("302") || inputValue.startsWith("303") || inputValue.startsWith("304") || inputValue.startsWith("305") || inputValue.startsWith("36") || inputValue.startsWith("38") && (cardLength > 13 || cardLength < 20)){
        cardType = "Diner's Club";
      } else if (inputValue.startsWith("34")|| inputValue.startsWith("37") && (cardLength == 15)){
        cardType = "American Express";
      } else if (inputValue.startsWith("1800") || inputValue.startsWith("2131") || inputValue.startsWith("3") && (cardLength > 15 || cardLength < 20)){
        cardType = "JCB";
      } else if (inputValue.startsWith("51") || inputValue.startsWith("52") || inputValue.startsWith("53") || inputValue.startsWith("54") || inputValue.startsWith("55") && (cardLength == 16)){
        cardType = "MasterCard";
      } else if (inputValue.startsWith("6011") && (cardLength > 15 || cardLength < 20)){
        cardType = "Discover";
      } else {
        cardType = "no reconocido"
      }
    return cardType;
  }
};

export default validator;
