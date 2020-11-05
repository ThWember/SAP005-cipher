let insertedTextEncode;
let numberOffsetEncode;
let cipherText = " ";
let firstUnicode = 65;

let insertedTextDecode;
let numberOffsetDecode;
let decipherText = " ";
let lastUnicode = 90;

let alphabetNumber = 26;

function encode() {
  insertedTextEncode = document.getElementById("inserted-text-encode").value.toUpperCase();
  numberOffsetEncode = Number(document.getElementById("number-offset-encode").value);

  for (let i = 0; i <insertedTextEncode.length; i++){
    let letterCodeChipher = (((insertedTextEncode[i].charCodeAt(0) - firstUnicode + Number(numberOffsetEncode)) % alphabetNumber) + firstUnicode);
    let resultCipher = String.fromCharCode(letterCodeChipher);
    cipherText += resultCipher;
  }
  document.getElementById("final-text-encode").innerHTML = cipherText;
}

let encodeButton = document.getElementById("encode-button");
encodeButton.addEventListener("click", encode);

function decode() {
  insertedTextDecode = document.getElementById("inserted-text-decode").value.toUpperCase();
  numberOffsetDecode = Number(document.getElementById("number-offset-decode").value);
  decipherText = " ";

  for (let i = 0; i <insertedTextDecode.length; i++){
    const letterCodeDechipher = (((insertedTextDecode[i].charCodeAt(0) - lastUnicode - Number(numberOffsetDecode)) % alphabetNumber) + lastUnicode);
    const resultDecipher = String.fromCharCode(letterCodeDechipher);
    decipherText += resultDecipher;
  }
  document.getElementById("final-text-decode").textContent = decipherText;
}

let decodeButton = document.getElementById("decode-button");
decodeButton.addEventListener("click", decode);
