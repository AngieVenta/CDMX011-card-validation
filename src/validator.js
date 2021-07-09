const validator = {
  isValid(inputValue){
    let numberOfDigits = inputValue.split("").map(Number).reverse();
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
    let digitsInput = inputValue.split("");
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
  }
};

export default validator;
