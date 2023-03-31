//import cipher from "./cipher.js";


const btn1 = document.getElementById("btn1");
//EVENTO CON FUNCION
btn1.addEventListener("click", () => { navegarPagCifrar() })
const btn2 = document.getElementById("btn2");
//EVENTO CON WINDOW LOCATION 
btn2.addEventListener("click", () => { window.location.href = "pagDescifrar.html" });

function navegarPagCifrar() {
  window.location.href = "pagCifrar.html"
}
 
