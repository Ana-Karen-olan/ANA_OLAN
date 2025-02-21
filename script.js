// 1. Modificar el primer "Hello world!" para que diga "GoodBye"
document.getElementById("red").textContent = "GoodBye";

// 2. Cambiar el color de un encabezado a naranja
document.addEventListener("DOMContentLoaded", function() {
    let headers = document.getElementsByTagName("h1"); 
    if (headers.length > 1) {
        headers[1].style.color = "orange"; // Cambia el segundo H1 a naranja
    }
});

// 3. Hacer que al hacer clic en el "Click me!" cambie el color de la fuente a marrón, enlazado con el index
document.getElementById("clickable").addEventListener("click", function() {
    this.style.color = "brown";
});
