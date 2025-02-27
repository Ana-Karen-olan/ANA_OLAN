document.addEventListener("DOMContentLoaded", function () {
    // Crear el botón dinámicamente
    let button = document.createElement("button");
    button.textContent = "EL BOTON";
    button.className = "btn btn-primary mt-3"; // Estilo de Bootstrap
  
    // Insertar el botón en el body
    document.body.insertBefore(button, document.body.firstChild);
  
    // Evento para mostrar la alerta
    button.addEventListener("click", function () {
      let alertDiv = document.createElement("div");
      alertDiv.className = "alert alert-warning alert-dismissible fade show mt-3";
      alertDiv.role = "ALERTA";
      alertDiv.innerHTML = `
        <strong>ALERTA!</strong> PRESIONASTE EL BOTON.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      `;
  
      document.body.insertBefore(alertDiv, button.nextSibling);
    });
  });
  