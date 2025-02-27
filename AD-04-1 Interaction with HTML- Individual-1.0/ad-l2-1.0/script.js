// Al hacer clic en "COME TO BURGER TOWN!", mostrar alerta
document.getElementById("burger-town").onclick = function() {
    alert("ITS BURGERTIME");
};

// Al hacer clic en "BURGER TOWN!", imprimir mensaje en consola
document.getElementById("burger-click").onclick = function() {
    console.log("Someone clicked on BURGER TOWN!");
};

// Al hacer clic en "RICE!!", cambiar el color del título
document.getElementById("rice").onclick = function() {
    document.getElementById("burger-title").style.color = "red";
};
