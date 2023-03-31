import cipher from "./cipher.js";

// tomar los inputs y saber su valor. con getelementbyid 
const btnCifrar = document.getElementById("btnSubmit");
const textCifrar = document.getElementById("text");
const offsetCifrar = document.getElementById("offset");
const resultadoCifrar = document.getElementById("result");

// event listener con un 'onchange' o "change'
btnCifrar.addEventListener("click", e => {
  e.preventDefault();
  const textValue = textCifrar.value;
  const offsetValue = offsetCifrar.value;
  const resultado = cipher.encode(offsetValue,textValue);
  resultadoCifrar.value = resultado;
})



