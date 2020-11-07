import cipher from "./cipher.js";

let encodeButton = document.getElementById("encode-button");
encodeButton.addEventListener("click", cipher.encode);

let decodeButton = document.getElementById("decode-button");
decodeButton.addEventListener("click", cipher.decode);
