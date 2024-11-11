import { Inscripto } from "./ClaseInscriptos.js";
import { buscarEntidadEnLocalStorage, buscarEntidadEnSessionStorage } from "./ayudante.js";


// Inicializar variables y arrays
const inscriptos = [];
const inscripcion= [];
let contadorP = 1;
let importe_nuevo = 0;
let importe_curso = 0;

// CARRITO

// Recuperar el carrito para guardar datos
let carrito = JSON.parse(sessionStorage.getItem("carrito"));
let botonCarrito = document.querySelector(".header__principal-carrito");
let textoCarrito = botonCarrito.querySelector(".texto-carrito");

// Verificar si carrito no existe y modifica contador carrito


if (sessionStorage.getItem("carrito") == null) {
    sessionStorage.setItem("carrito", JSON.stringify(new Carrito()));
}
textoCarrito.innerHTML = carrito.cantidad_total;

// Buscar curso presencial segun el curso seleccionado
let indiceCursoPresencial =JSON.parse(sessionStorage.getItem("indiceCursoAVer"));
let cursoPresencialBuscado = buscarPorIdCursoDB(indiceCursoPresencial); 

ponerDatosDelCursoSeleccionado(cursoPresencialBuscado);


function buscarPorIdCursoDB(indice){
    let cursosDB = buscarEntidadEnLocalStorage("curso");
    for (let i = 0; i < cursosDB.length; i++) {
        if (cursosDB[i].id == indice)
            return cursosDB[i];
    }
    return null;
}

// Funcionalidad agregar campos de personas en el form
const btn_agregar_persona = document.querySelector('.person-btn.add');
btn_agregar_persona.addEventListener('click',agregar_persona);


function agregar_persona(event) {

    contadorP += 1;
    const person_data = document.createElement("div");
    person_data.className = `person-data i${contadorP} `;
    person_data.innerHTML = `
    <div class="input-group">
        <label for="nombre${contadorP}">Nombre:</label>
        <input type="text" id="nombre${contadorP}" name="nombre" required>
    </div>
    <div class="input-group">
        <label for="apellido${contadorP}">Apellido:</label>
        <input type="text" id="apellido${contadorP}" name="apellido" required>
    </div>
    <div class="input-group">
        <label for="dni${contadorP}">DNI:</label>
        <input type="number" id="dni${contadorP}" name="dni" required>
    </div>
    <div class="input-group">
        <label for="email${contadorP}">Email:</label>
        <input type="email" id="email${contadorP}" name="email" required>
    </div>
    <div class="input-group">
        <label for="telefono${contadorP}">Teléfono:</label>
        <input type="tel" id="telefono${contadorP}" name="telefono" placeholder="1122224444"   pattern="[0-9]{10}" required>
    </div>
    <div class="input-group">
        <label for="importe${contadorP}">Importe:</label>
        <input type="text" id="importe${contadorP}" name="importe" value="${importe_curso}" disabled required>
    </div>
    <div class="delete-person">
        <button type="button" class="person-btn delete" name="btn-delete${contadorP}" onclick="eliminar_persona(${contadorP})" > − </button>
    </div>`

    const form = document.querySelector('.person-container');
    form.appendChild(person_data);

    //recalcular importe total
    importe_nuevo +=importe_curso;
    
    let contenedor_importe = document.querySelector('.payment-info');
    let importe_total = contenedor_importe.querySelector('p');
    importe_total.textContent=`$${importe_nuevo}.-`;

}


// Funcionalidad eliminar campos de personas en el form

function eliminar_persona(indice) {
    let personaActual = 0;

    if (indice==1) {
        personaActual = document.querySelector('.person-data.i' + indice);
        let nombre = personaActual.querySelector("input[name='nombre']");
        nombre.value="";
        let apellido = personaActual.querySelector("input[name='apellido']");
        apellido.value="";
        let dni = personaActual.querySelector("input[name='dni']");
        dni.value="";
        let email = personaActual.querySelector("input[name='email']");
        email.value="";
        let telefono = personaActual.querySelector("input[name='telefono']");
        telefono.value="";
      
    } else {
        personaActual = document.querySelector('.person-data.i' + indice);
        personaActual.parentNode.removeChild(personaActual);
        
        //recalcular importe total
        importe_nuevo -=importe_curso;
        let contenedor_importe = document.querySelector('.payment-info');
        let importe_total = contenedor_importe.querySelector('p');
        importe_total.textContent=`$${importe_nuevo}.-`;
        
    }

}



let contadorEnvio = 0; // evitar que ingrese dos veces a la funcion del boton agregar carrito y duplique los datos

// funcion de evitar envio formulario y tomar los datos de los inscriptos para el carrito

const form = document.getElementById('registrationForm');
form.addEventListener('submit', evitarEnvio)
function evitarEnvio(evento) {
    
    evento.preventDefault();
   
    // Limpiar el array para evitar duplicados
    inscriptos.length = 0;
    inscripcion.length = 0;

    // Obtener todos los datos de personas
    const personas = document.querySelectorAll('.person-data');
    personas.forEach((persona) => {
        const nombre = persona.querySelector("input[name='nombre']").value;
        const apellido = persona.querySelector("input[name='apellido']").value;
        const dni = persona.querySelector("input[name='dni']").value;
        const email = persona.querySelector("input[name='email']").value;
        const telefono = persona.querySelector("input[name='telefono']").value;
    
        
        // Crear un objeto de persona
        const personaObj = new Inscripto(nombre,apellido,dni,email,telefono);

        // Agregar el objeto al array inscriptos
        inscriptos.push(personaObj);

    });
    
    // Agregar el array inscriptos y importe total al array inscripcion
    inscripcion.push(inscriptos);
    inscripcion.push(importe_nuevo);
    

    //modal box

    const modal = document.querySelector('.modal');
    const closeModalBtn = document.querySelector('.cancel-btn');

    modal.style.display = "block";
    mostrarResumenInscriptosModal();
    

    closeModalBtn.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none"
        }
    }


    const carritoBTN = document.querySelector('.add-cart-btn');
    carritoBTN.addEventListener('click', function() {
        contadorEnvio++;
        //solo hace una sola vez, en caso que llame 2 veces o mas
        if(contadorEnvio==1) {
            let cursoPresencial = agregarInscriptosAlCursoPresencial();
            guardarCursoPresencialCarrito(cursoPresencial,carrito);
            sessionStorage.setItem("carrito", JSON.stringify(carrito));
            textoCarrito.innerHTML = carrito.cantidad_total;
            form.submit();
        }
         

    });

} 

function mostrarResumenInscriptosModal() {
    const inscriptos_list = document.querySelector('.js-inscriptos-list');
    inscriptos_list.innerHTML = ""; 
    
    inscriptos.forEach((inscripto, index) => {
        let inscripto_data = document.createElement("div");
        inscripto_data.className = 'inscripto-data';
        inscripto_data.innerHTML =  `
        <p><strong>Inscripto ${index+1}:</strong></p>
        <p>Nombre: ${inscripto.nombre} </p>
        <p>Apellido: ${inscripto.apellido} </p>
        <p>DNI: ${inscripto.dni} </p>
        <p>Email: ${inscripto.email} </p>
        <p>Telefono: ${inscripto.telefono} </p>`;
    
        inscriptos_list.appendChild(inscripto_data);
    });

}


function agregarInscriptosAlCursoPresencial() {
    
    let inscriptosForm = inscripcion[0];
    let inscriptosCurso = cursoPresencialBuscado.inscriptos;

    // agrega los inscriptos al curso presencial
    inscriptosForm.forEach((inscripto, index) => {
        inscriptosCurso.push(inscripto);
    });
    //console.log(cursoPresencialBuscado);
    return cursoPresencialBuscado;
}


function guardarCursoPresencialCarrito(cursoPresencial,carrito) {

    if (carrito.cursos_a_comprar.length == 0) {
        agregarUnaFilaACarrito(carrito, cursoPresencial);
        calcularPrecioTotal(carrito, cursoPresencial);
    } else {
        if (existeCursoEnCarrito(carrito, cursoPresencial) == false) {
            agregarUnaFilaACarrito(carrito, cursoPresencial);
            calcularPrecioTotal(carrito, cursoPresencial);
        }
    } 

    
}

// agregar info/entrada al carrito

function agregarUnaFilaACarrito(carrito, cursoPresencial) {
    carrito.cantidad_total += 1;
    let filaCarrito = crearFilaTablaCarrito(1, cursoPresencial);
    carrito.cursos_a_comprar.push(filaCarrito);
}

function crearFilaTablaCarrito(cantidad, cursoPresencial) {
    let filaCarrito = {
        cantidad: cantidad,
        curso: cursoPresencial
    }

    return filaCarrito

}


function calcularPrecioTotal(carrito,cursoPresencial) {
    carrito.precio_total +=cursoPresencial.precio
}

// ver si existe duplicado
function existeCursoEnCarrito(carrito, cursoPresencial) {

    for (let i = 0; i < carrito.cursos_a_comprar.length; i++) {
        if (carrito.cursos_a_comprar[i].curso.id == cursoPresencial.id) {
            return true;
        }
    }
    return false;
}


function ponerDatosDelCursoSeleccionado(cursoPresencialBuscado) {
    const contenedor_titulo_curso = document.querySelector('.registration-titulos');
    const titulo_curso = contenedor_titulo_curso.querySelector("h1");
    let nombreCurso = cursoPresencialBuscado.nombre;
    titulo_curso.textContent = nombreCurso;

    let importeCurso = cursoPresencialBuscado.precio;
    importe_curso = importeCurso;
    importe_nuevo = importeCurso;

    const total_amount = document.getElementById("totalAmount");
    total_amount.textContent = `$${importe_curso}.`;

    const importe_primeraPersona = document.getElementById("importe1");
    importe_primeraPersona.value = importe_curso;
    
}





// fix import
window.eliminar_persona = eliminar_persona;




