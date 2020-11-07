let insertedTextEncode;
let numberOffsetEncode;
let cipherText = " ";
let upperFirstASC = 65;

let insertedTextDecode;
let numberOffsetDecode;
let decipherText = " ";
let upperLastASC = 90;

let alphabetLength = 26;


const cipher = {
  encode: function () {
    insertedTextEncode = document.getElementById("inserted-text-encode").value.toUpperCase();
    numberOffsetEncode = Number(document.getElementById("number-offset-encode").value);
    for (let i = 0; i <insertedTextEncode.length; i++){
      let letterCodeChipher = (((insertedTextEncode[i].charCodeAt(0) - upperFirstASC+ Number(numberOffsetEncode)) % alphabetLength) + upperFirstASC);
      let resultCipher = String.fromCharCode(letterCodeChipher);
      cipherText += resultCipher;
    }
    document.getElementById("final-text-encode").innerHTML = cipherText;
  },
  decode: function () {
      insertedTextDecode = document.getElementById("inserted-text-decode").value.toUpperCase();
      numberOffsetDecode = Number(document.getElementById("number-offset-decode").value);
      decipherText = " ";
    
      for (let i = 0; i <insertedTextDecode.length; i++){
        const letterCodeDechipher = (((insertedTextDecode[i].charCodeAt(0) - upperLastASC - Number(numberOffsetDecode)) % alphabetLength) + upperLastASC);
        const resultDecipher = String.fromCharCode(letterCodeDechipher);
        decipherText += resultDecipher;
      }
      document.getElementById("final-text-decode").textContent = decipherText;
    }
};

export default cipher;