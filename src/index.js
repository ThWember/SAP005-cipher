// let insertedTextEncode;
// let numberOffsetEncode;
// let cipherText = " ";
// let upperFirstASC = 65;
// //let lowerFirstASC = 97;

// let insertedTextDecode;
// let numberOffsetDecode;
// let decipherText = " ";
// let upperLastASC = 90;
// //let lowerLastASC = 122;

// let alphabetLength = 26;

// function encode() {
//   insertedTextEncode = document.getElementById("inserted-text-encode").value.toUpperCase();
//   numberOffsetEncode = Number(document.getElementById("number-offset-encode").value);
// //colocar if e else para tratar letras minúsculas e caracteres especiais
//   for (let i = 0; i <insertedTextEncode.length; i++){
//     let letterCodeChipher = (((insertedTextEncode[i].charCodeAt(0) - upperFirstASC+ Number(numberOffsetEncode)) % alphabetLength) + upperFirstASC);
//     let resultCipher = String.fromCharCode(letterCodeChipher);
//     cipherText += resultCipher;
//   }
//   document.getElementById("final-text-encode").innerHTML = cipherText;
// }

import cipher from "./cipher.js";

let encodeButton = document.getElementById("encode-button");
encodeButton.addEventListener("click", cipher.encode);

// function decode() {
//   insertedTextDecode = document.getElementById("inserted-text-decode").value.toUpperCase();
//   numberOffsetDecode = Number(document.getElementById("number-offset-decode").value);
//   decipherText = " ";

//   for (let i = 0; i <insertedTextDecode.length; i++){
//     const letterCodeDechipher = (((insertedTextDecode[i].charCodeAt(0) - upperLastASC - Number(numberOffsetDecode)) % alphabetLength) + upperLastASC);
//     const resultDecipher = String.fromCharCode(letterCodeDechipher);
//     decipherText += resultDecipher;
//   }
//   document.getElementById("final-text-decode").textContent = decipherText;
// }

let decodeButton = document.getElementById("decode-button");
decodeButton.addEventListener("click", cipher.decode);
