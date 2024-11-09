// Accedemos al contenedor donde se mostrara los estudiantes
const containerEstudiantes = document.querySelector("#idContainerEstudiantes");

// Accedemos a cada boton por medio de la API DOM
const btnPromedio = document.querySelector("#idBtnPromedio");

// Agregamos el evento click a los botones, adicionalmente
// se le asigna la funcion que realizará la operación
btnPromedio.addEventListener("click", generarEstudiantes);
function generarEstudiantes() {
    // Utilizaremos un arreglo para guardar la información del estudiante
    let arrayEstudiantes = new Array();

    let totalEstudiantes = document.querySelector("#inputNumeroEstudiantes").value;
    let contador = 1;

    // Utilizamos un while para recorrer el total de estudiantes
    let estudiante, calificacion, convertir = 0;
    while (contador <= totalEstudiantes) {
        estudiante = prompt(`Ingrese el nombre del estudiante ${contador}`);

        // Verificando que sea un número entero positivo y que se encuentre en el rango de 0 - 10
        do {
            calificacion = prompt(`Ingrese la calificación del estudiante ${contador}`);
            convertir = parseFloat(calificacion);
        } while (isNaN(convertir) || convertir < 0 || convertir > 10);

        // Asignando los valores al arreglo
        arrayEstudiantes[contador - 1] = new Array(estudiante, parseFloat(calificacion).toFixed(2));
        contador++;
    }

    // Recorriendo el arreglo con for...of
    // Verificaremos cuál es el promedio de las calificaciones
    // y cuál de los estudiantes posee la calificación más alta
    let calificacionAlta = 0, promedio = 0, posicion = 0;

    let listado = "<b>Listado de estudiantes registrados</b><hr><ol>";
    for (let indice of arrayEstudiantes) {
        let nombre = indice[0];
        let nota = indice[1];
        listado += `<li><b>Nombre:</b> ${nombre} - <b>Calificación:</b> ${nota}</li>`;

        // Verificación de calificación más alta
        if (nota > calificacionAlta) {
            calificacionAlta = nota;
            posicion = indice;
        }

        // Calculando el promedio
        promedio += parseFloat(nota);
    }

    listado += "</ol>";
    promedio = parseFloat(promedio / arrayEstudiantes.length).toFixed(2);
    listado += `<p><b>Promedio de calificaciones:</b> ${promedio}</p>`;
    listado += `<p><b>Estudiante con mejor calificación:</b> ${posicion[0]} - <b>Nota:</b> ${calificacionAlta}</p>`;

    // Imprimiendo resultados
    containerEstudiantes.innerHTML = listado;
}