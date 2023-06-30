function exportarRespuestas() {
    var form = document.getElementById("Formulario");
    var formData = new FormData(form);
    var data = "";

    // Verifica si todos los campos están completos
    var formComplete = true;
    for (var pair of formData.entries()) {
        if (!pair[1]) {
            formComplete = false;
            break;
        }
    }

    // Descarga el archivo si todos los campos están completos
    if (formComplete) {
        var nombreEstudiante = formData.get("Nombre Estudiante");
        var apellidoEstudiante = formData.get("Apellido Estudiante");

        for (var pair of formData.entries()) {
            data += pair[0] + ": " + pair[1] + "\n";
        }

        // Crea un elemento de enlace temporal
        var link = document.createElement("a");
        link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(data);

        // Genera el nombre del archivo utilizando el nombre y apellido del estudiante
        var nombreArchivo = nombreEstudiante + "_" + apellidoEstudiante + ".txt";
        link.download = nombreArchivo;

        // Simula hacer clic en el enlace para descargar el archivo
        link.click();

        // Muestra la alerta de éxito
        mostrarAlertaExitosa();
    } else {
        // Mostrar un mensaje de error o tomar la acción apropiada si algún campo no está completo
        alert("Por favor, completa todos los elementos del formulario.");
    }
}

function mostrarAlertaExitosa() {
    // Crea un elemento de alerta de éxito
    var alerta = document.createElement("div");
    alerta.classList.add("alert", "alert-success");
    alerta.textContent = "El formulario se ha enviado correctamente.";

    // Agrega la alerta al contenedor del formulario
    var contenedorFormulario = document.getElementById("Formulario");
    contenedorFormulario.appendChild(alerta);
}
