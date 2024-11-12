const nodoForm = document.getElementById("registrationForm");
const nodoError = document.querySelector("#mensaje_error");

function validarFormularioInscripcion(){
    nodoError.innerHTML = ""; 

    //Obtengo todos los input de los datos de las personas 
    const personas = document.querySelectorAll('.person-data');
    
    //recorro y tomo los datos
    for(let i=0;i<personas.length;i++) {
        const nombre = personas[i].querySelector("input[name='nombre']").value.trim();
        const apellido = personas[i].querySelector("input[name='apellido']").value.trim();
        const dni = personas[i].querySelector("input[name='dni']").value.trim();
        const email = personas[i].querySelector("input[name='email']").value.trim();
        const telefono = personas[i].querySelector("input[name='telefono']").value.trim();
        
        // verificar que los campos no esten vacíos
        if (!nombre || !apellido || !dni || !email || !telefono) {
            mostrarError("Los campos no pueden estar vacios, complete todos los campos que esten vacios");
            return false;
        }

        
        // verificar que el dni sea correcto
        if(dni.length < 7 || dni.length > 8 ) {
            mostrarError("El dni debe tener entre 7 y 8 digitos");
            return false;
        }

        // verificar que el mail sea correcto
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            mostrarError("Por favor, ingrese un email válido.");
            return false;
        }
        // /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

        
        // Validación de teléfono (solo números de 10 dígitos)
        if (!/^\d{10}$/.test(telefono)) {
            mostrarError("el telefono debe tener 10 digitos y ser solo numeros.");
            return false;
        }
    }

    return true;
}


function mostrarError(mensaje) {
    nodoError.innerHTML = `
    <p>${mensaje}</p>
    `;
    nodoError.style.display = "block";
}


