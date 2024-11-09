// Accedemos al contenedor donde se mostrará los estudiantes
const containerArreglo = document.querySelector("#idContainerArreglo");
const containerArregloOrdenado = document.querySelector("#idContainerArregloOrdenado");

// Accedemos a cada botón por medio de la API DOM
const btnAgregar = document.querySelector("#idBtnAgregar");
const btnOrdenar = document.querySelector("#idBtnOrdenar");

// Agregamos el evento click a los botones, adicionalmente
// se le asigna la función que realizará la operación
btnAgregar.addEventListener("click", agregarElemento);
btnOrdenar.addEventListener("click", ordenarElementos);

let arreglo = new Array();

function agregarElemento() {
    const numero = parseInt(document.querySelector("#inputNumero").value);
    // Verificando que sea un número
    if (isNaN(numero)) {
        alert("Debe ingresar un número válido");
    } else {
        // Agregamos un nuevo elemento al arreglo
        arreglo.push(numero);

        // Utilizamos la API DOM para crear un elemento HTML
        let caja = document.createElement("div"); // Creamos un elemento <div></div>
        caja.className = "col-4 col-1 col-md-1"; // Agregamos una clase al elemento <div></div>
        let valor = document.createElement("h3"); // Creamos un elemento <h3></h3>
        valor.textContent = numero; // Asignamos texto al elemento <h3></h3>
        caja.appendChild(valor); // Le pasamos como hijo al elemento <h3></h3> a nuestro <div></div>

        // Insertamos los nuevos elementos en el contenedor
        // Se utiliza beforeend para insertar el nuevo
        // elemento dentro del idContainerArreglo y después de su último hijo
        containerArreglo.insertAdjacentElement("beforeend", caja);
    }
}

function ordenarElementos() {
    // Utilizamos un for...of para recorrer el arreglo
    // A su vez se utilizará .sort() para ordenarlo
    for (let i of arreglo.sort((a, b) => a - b)) {
        let caja = document.createElement("div");
        caja.className = "col-md-1 col-sm-1 col-lg-1 col-1";
        let valor = document.createElement("h3");
        valor.className = "col-md-1 col-sm-1 col-lg-1 col-1 text-center";
        valor.textContent = i;
        caja.appendChild(valor);
        containerArregloOrdenado.insertAdjacentElement("beforeend", caja);
    }
}