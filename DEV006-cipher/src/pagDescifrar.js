import cipher from "./cipher.js";

// tomar los inputs y saber su valor. con getelementbyid 
const btnDescifrar = document.getElementById("btnSubmit");
const textDescifrar = document.getElementById("text");
const offsetDescifrar = document.getElementById("offset");
const resultadoCifrar = document.getElementById("result");

// event listener con un 'onchange' o "change'
btnDescifrar.addEventListener("click", e => {e.preventDefault();
  const textValue = textDescifrar.value;
  const offsetValue = offsetDescifrar.value;
  const resultado = cipher.decode(offsetValue,textValue);
  resultadoCifrar.value = resultado;
})

