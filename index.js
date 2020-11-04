// let insertedTextEncode = document.getElementById("inserted-text-encode").value.toUpperCase();
// let numberOffsetEncode = document.getElementById("number-offset-encode").valueAsNumber;
// let cipherText = "";

// let insertedTextDecode = document.getElementById("inserted-text-decode").value.toUpperCase();
// let numberOffsetDecode = document.getElementById("number-offset-decode").valueAsNumber;
// let decipherText;


function encode() {
    let insertedTextEncode = document.getElementById("inserted-text-encode").value.toUpperCase();
    let numberOffsetEncode = document.getElementById("number-offset-encode").valueAsNumber;
    let cipherText = "";

    for (let i = 0; i <insertedTextEncode.length; i++){
      let letterCodeChipher = (((insertedTextEncode[i].charCodeAt(0) - 65 + Number(numberOffsetEncode)) % 26) + 65);
      let resultCipher = String.fromCharCode(letterCodeChipher);
      cipherText += resultCipher;
    }
    alert(insertedTextEncode);
    alert(numberOffsetEncode);
    alert(cipherText);
    //document.getElementById("final-text-decode").innerHTML = cipherText;
  }

  function decode() {

    for (let i = 0; i <insertedTextDecode.length; i++){
      const letterCodeDechipher = (((insertedTextDecode[i].charCodeAt(0) - 90 - Number(numberOffsetDecode)) % 26) + 90);
      const resultDecipher = String.fromCharCode(letterCodeDechipher);
      decipherText += resultDecipher;
    }
    document.getElementById("final-text-decode").innerHTML = decipherText;
  }

let encodeButton = document.getElementById("encode-button");
encodeButton.addEventListener("click", encode);
