import { Inscripto } from "./ClaseInscriptos.js";

const inscriptos = [];
const inscripcion= [];
// Funcionalidad agregar campos de personas en el form
const btn_agregar_persona = document.querySelector('.person-btn.add');
btn_agregar_persona.addEventListener('click',agregar_persona);

let contadorP = 1;
let importe_nuevo = 25000

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
        <input type="text" id="importe${contadorP}" name="importe" value="25000" disabled required>
    </div>
    <div class="delete-person">
        <button type="button" class="person-btn delete" name="btn-delete${contadorP}" onclick="eliminar_persona(${contadorP})" > − </button>
    </div>`

    const form = document.querySelector('.person-container');
    form.appendChild(person_data);

    //recalcular importe total
    importe_nuevo +=25000;
    
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
        importe_nuevo -=25000;
        let contenedor_importe = document.querySelector('.payment-info');
        let importe_total = contenedor_importe.querySelector('p');
        importe_total.textContent=`$${importe_nuevo}.-`;
        
    }

}

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
    //console.log(inscripcion);

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
        guardarInscripcionLocalStorage();
        form.submit();
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

function guardarInscripcionLocalStorage() {
    localStorage.setItem('inscripcion', JSON.stringify(inscripcion));
}


// fix import
window.eliminar_persona = eliminar_persona;





