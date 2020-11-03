let insertedTextEncode = document.getElementById("inserted-text-encode").value;
let numberOffsetEncode = document.getElementById("number-offset-encode").value;
let cipherText;

let insertedTextDecode = document.getElementById("inserted-text-decode").value;
let numberOffsetDecode = document.getElementById("number-offset-decode").value;
let decipherText;

function encode () {

    for (let i = 0; i <insertedTextEncode.length; i++){
      const letterCodeChipher = (((insertedTextEncode[i].charCodeAt(0) - 65 + Number(numberOffsetEncode)) % 26) + 65);
      const resultCipher = String.fromCharCode(letterCodeChipher);
      cipherText += resultCipher;
    }
    document.getElementById("final-text-encode").innerHTML = cipherText;
  }

  function decode() {

    for (let i = 0; i <insertedTextDecode.length; i++){
      const letterCodeDechipher = (((insertedTextDecode[i].charCodeAt(0) - 90 - Number(numberOffsetDecode)) % 26) + 90);
      const resultDecipher = String.fromCharCode(letterCodeDechipher);
      decipherText += resultDecipher;
    }
    document.getElementById("final-text-decode").innerHTML = decipherText;
  }
