//Generar fila
const generarFila = (fila, columnas) => {
    let tr = "<tr>";
    for (let c = 0; c < columnas; c++) {
        if (c === 0) {
            tr += `<th scope="row" class="text-center">${fila + 1}</th>`;
        } else {
            if (c % 2 === 0) {
                tr += `<td class="text-center text-success">${fila + 1}${c}</td>`;
            } else {
                tr += `<td class="text-center">${fila + 1}${c}</td>`;
            }
        }
    }
    tr += "</tr>";
    return tr;
};

//Generar tabla
const generarTabla = (filas, columnas) => {
    let tabla = `
    <table class="table table-striped table-hover table-bordered">
        <tbody>`;

    for (let f = 1; f <= filas; f++) {
        if (f % 2 === 0) {
            tabla += generarFila(f, columnas);
        } else {
            tabla += generarFila(f, columnas);
        }
    }

    tabla += `</tbody>
    </table>`;
    return tabla;
};

// Las funciones que se utilizarán serán llamadas desde HTML
// Por medio de eventos que se activan en el botón con el ID: idBtnCrearTabla
const crearTabla = () => {
    let filas = document.getElementById("idNumFilas").value;
    let columnas = document.getElementById("idNumColumnas").value;
    if (filas && columnas) {
        filas = parseInt(filas);
        columnas = parseInt(columnas);
        if (filas > 0 && columnas > 0) {
            document.getElementById("idDivResultado").innerHTML = generarTabla(filas, columnas);
        } else {
            alert("Ingrese valores válidos para filas y columnas.");
        }
    } else {
        alert("Ingrese valores para filas y columnas.");
    }
};