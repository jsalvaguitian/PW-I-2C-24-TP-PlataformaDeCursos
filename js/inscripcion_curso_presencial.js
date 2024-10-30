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
        <input type="text" id="nombre${contadorP}" name="nombre${contadorP}" required>
    </div>
    <div class="input-group">
        <label for="apellido${contadorP}">Apellido:</label>
        <input type="text" id="apellido${contadorP}" name="apellido${contadorP}" required>
    </div>
    <div class="input-group">
        <label for="dni${contadorP}">DNI:</label>
        <input type="number" id="dni${contadorP}" name="dni${contadorP}" required>
    </div>
    <div class="input-group">
        <label for="email${contadorP}">Email:</label>
        <input type="email" id="email${contadorP}" name="email${contadorP}" required>
    </div>
    <div class="input-group">
        <label for="telefono${contadorP}">Teléfono:</label>
        <input type="tel" id="telefono${contadorP}" name="telefono${contadorP}" placeholder="1122224444"   pattern="[0-9]{10}" required>
    </div>
    <div class="input-group">
        <label for="importe${contadorP}">Importe:</label>
        <input type="text" id="importe${contadorP}" name="importe${contadorP}" value="25000 ARS" disabled required>
    </div>
    <div class="delete-person">
        <button type="button" class="person-btn delete" name="btn-delete${contadorP}" onclick="eliminar_persona(${contadorP})"> − </button>
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
        let nombre = personaActual.querySelector("input[name='nombre1']");
        nombre.value="";
        let apellido = personaActual.querySelector("input[name='apellido1']");
        apellido.value="";
        let dni = personaActual.querySelector("input[name='dni1']");
        dni.value="";
        let email = personaActual.querySelector("input[name='email1']");
        email.value="";
        let telefono = personaActual.querySelector("input[name='telefono1']");
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

// modal box

const modal= document.querySelector('.modal');
const openModalBtn = document.querySelector('.form-btn');
const closeModalBtn = document.querySelector('.cancel-btn');

openModalBtn.onclick= function() {
    modal.style.display = "block";
}

closeModalBtn.onclick= function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target === modal) {
        modal.style.display = "none"
    }
}






