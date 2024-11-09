document.addEventListener("DOMContentLoaded", function () {
    const containerResultado = document.querySelector("#idContainerResultado");

    // Accedemos a cada boton por medio de la API DOM
    const btnCalcular = document.querySelector("#idBtnCalcular");

    // Agregamos el evento click al boton calcular
    // Se le asigna la funcion que realizará la operación
    btnCalcular.addEventListener("click", calcularTabla);

    function calcularTabla() {
        // Capturando el valor del campo
        const inputTabla = document.querySelector("#inputTabla").value;

        // Inicializamos nuestro contador
        let contador = 1;
        let tabla = "";

        // Verificamos que el dato colocado sea un número entero positivo
        if (inputTabla > 0) {
            tabla += `<h2>Tabla de multiplicar del ${inputTabla}</h2>`;
            // Utilizamos un bucle para generar la tabla de multiplicar
            do {
                let resultado = contador * inputTabla;
                tabla += `<div class="row text-center">`;
                tabla += `<div class="col-md-1 col-sm-1">${contador}</div>`;
                tabla += `<div class="col-md-1 col-sm-1">x</div>`;
                tabla += `<div class="col-md-1 col-sm-1">${inputTabla}</div>`;
                tabla += `<div class="col-md-1 col-sm-1">=</div>`;
                tabla += `<div class="col-md-1 col-sm-1">${resultado}</div>`;
                tabla += `</div>`;
                // Incrementamos el valor del contador
                contador++;
            } while (contador <= 12);

            document.querySelector("#inputTabla").value = 1;
            document.querySelector("#inputTabla").focus();
            containerResultado.innerHTML = tabla;
        } else {
            alert("No se ha ingresado un número válido");
        }
    }
});