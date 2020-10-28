//aqui funções puras
function encode (numberOffset, text) {
  if (numberOffset.legth == 0 || numberOffset == " ") {
    TypeError("Insira o número escolhido para codificar a mensagem");
  } else if (text.legth == 0 || text == " ") {
    TypeError("Insira a mensagem");
  }

  let cipherText = ""

  for (let i = 0; i <text.length; i++) {
    const cipherLetter = (((text[i].charCodeAt(0) - 65 + Number(numberOffset)) % 26) + 65);
    const resultCipher = String.fromCharCode(cipherLetter);
    cipherText += resultCipher;
  }
}

export default function () {encode} 
