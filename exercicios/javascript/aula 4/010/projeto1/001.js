var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var a = window.document.getElementById("text");
a.innerHTML += `${hora}:${minutos}`
var foto = window.document.querySelector("#foto")
var fundo = document.querySelector("body")
if (hora >= 22 || hora <= 6 ) {
    foto.src="noite2.webp";
    fundo.style.backgroundColor = "#023373"
} else if (hora >= 6 && hora <= 12) {
    foto.src="manha.webp";
    fundo.style.backgroundColor = "#F2B705"
} else {

    foto.src="tarde.webp";
    fundo.style.backgroundColor = "#F25C05"
}