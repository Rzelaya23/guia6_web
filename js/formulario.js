//Accediendo a los elementos del formulario
const inputNombre = document.getElementById("idTxtNombre");
const inputApellido = document.getElementById("idTxtApellido");
const inputFechaNacimiento = document.getElementById("idTxtFechaNacimiento");
const inputRadMasculino = document.getElementById("idRdbMasculino");
const inputRadFemenino = document.getElementById("idRdbFemenino");
const cmpPais = document.getElementById("idCmbPais");
const inputDireccion = document.getElementById("idTxtDireccion");
const inputNombrePais = document.getElementById("idTxtNuevoPais");

const buttonAgregarPaciente = document.getElementById("idBtnGuardar");
const buttonLimpiarPaciente = document.getElementById("idBtnLimpiar");
const buttonMostrarPaciente = document.getElementById("idBtnMostrar");
const buttonAgregarPais = document.getElementById("idBtnAgregarPais");

const notificacion = document.getElementById("idToastNotificacion");
// Componente de Bootstrap
const toast = new bootstrap.Toast(notificacion);
const mensaje = document.getElementById("idMensaje");

//Componente modal
const idModal = document.getElementById("idModal");

//Arreglo global de pacientes
let arrayPaciente = [];

// Creando una función para que limpie el formulario
// siempre que se cargue la página o cuando se presione
// el botón limpiar del formulario
const limpiarForm = () => {
    inputNombre.value = "";
    inputApellido.value = "";
    inputFechaNacimiento.value = "";
    inputRadMasculino.checked = false;
    inputRadFemenino.checked = false;
    cmpPais.value = 0;
    inputDireccion.value = "";
    inputNombrePais.value = "";

    inputNombre.focus();
};
/*
Función para validar el ingreso del paciente
*/
const addPaciente = function () {
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let fechaNacimiento = inputFechaNacimiento.value;
    let sexo =
        inputRadMasculino.checked == true
            ? "Hombre"
            : inputRadFemenino.checked == true
                ? "Mujer"
                : "";
    let pais = cmpPais.value;
    let labelPais = cmpPais.options[cmpPais.selectedIndex].text;
    let direccion = inputDireccion.value;

    if (
        nombre !== "" &&
        apellido !== "" &&
        fechaNacimiento !== "" &&
        sexo !== "" &&
        pais != 0 &&
        direccion !== ""
    ) {
        //Agregando información al arreglo paciente
        arrayPaciente.push(
            new Array(nombre, apellido, fechaNacimiento, sexo, labelPais, direccion)
        );

        //Asignando un mensaje a nuestra notificación
        mensaje.innerHTML = "Se ha registrado un nuevo paciente";
        //Llamando al componente de Bootstrap
        toast.show();

        //Limpiando formulario
        limpiarForm();
    } else {
        //Asignando un mensaje a nuestra notificación
        mensaje.innerHTML = "Faltan campos por completar";
        //Llamando al componente de Bootstrap
        toast.show();
    }
};
// Función que imprime la ficha de los pacientes registrados
function imprimirFilas() {
    let fila = "";
    let contador = 1;

    arrayPaciente.forEach((element) => {
        fila += `<tr>
                    <td scope="row" class="text-center fw-bold">${contador}</td>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td>${element[2]}</td>
                    <td>${element[3]}</td>
                    <td>${element[4]}</td>
                    <td>${element[5]}</td>
                    <td>
                        <button onclick="editarPaciente(${contador})" type="button" class="btn btn-primary" alt="Editar">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button onclick="eliminarPaciente(${contador})" type="button" class="btn btn-danger" alt="Eliminar">
                            <i class="bi bi-trash-fill"></i>
                        </button>
                    </td>
                 </tr>`;
        contador++;
    });

    return fila;
}

const imprimirPacientes = () => {
    let tabla = `<div class="table-responsive">
                    <table class="table table-striped table-hover table-bordered">
                        <tr>
                            <th scope="col" class="text-center" style="width: 5%">#</th>
                            <th scope="col" class="text-center" style="width: 15%">Nombre</th>
                            <th scope="col" class="text-center" style="width: 15%">Apellido</th>
                            <th scope="col" class="text-center" style="width: 10%">Nacimiento</th>
                            <th scope="col" class="text-center" style="width: 10%">Sexo</th>
                            <th scope="col" class="text-center" style="width: 10%">País</th>
                            <th scope="col" class="text-center" style="width: 20%">Dirección</th>
                            <th scope="col" class="text-center" style="width: 15%">Opciones</th>
                        </tr>
                        ${imprimirFilas()}
                    </table>
                 </div>`;

    document.getElementById("idTablaPacientes").innerHTML = tabla;
};
// Contador global de los option correspondiente
// al select (cmpPais)
let contadorGlobalOption = cmpPais.children.length;
const addPais = () => {
    let paisNew = inputNombrePais.value;

    if (paisNew !== "") {
        // Creando nuevo option con la API DOM
        let option = document.createElement("option");
        option.textContent = paisNew;
        option.value = contadorGlobalOption + 1;

        // Agregando el nuevo option en el select
        cmpPais.appendChild(option);

        // Asignando un mensaje a nuestra notificación
        mensaje.innerHTML = "País agregado correctamente";
        // Llamando al componente de Bootstrap
        toast.show();
    } else {
        // Asignando un mensaje a nuestra notificación
        mensaje.innerHTML = "Faltan campos por completar";
        // Llamando al componente de Bootstrap
        toast.show();
    }
};

// Agregando eventos a los botones y utilizando funciones tipo flecha
buttonLimpiarPaciente.onclick = () => {
    limpiarForm();
};

buttonAgregarPaciente.onclick = () => {
    addPaciente();
};

buttonMostrarPaciente.onclick = () => {
    imprimirPacientes();
};

buttonAgregarPais.onclick = () => {
    addPais();
};

// Se agrega el focus en el campo nombre país del modal
idModal.addEventListener("shown.bs.modal", () => {
    inputNombrePais.value = "";
    inputNombrePais.focus();
});

// Ejecutar función al momento de cargar la página
limpiarForm();