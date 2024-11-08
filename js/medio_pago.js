import * as ayudante from "./ayudante.js";
import * as validaciones from "./validar-medio-pago.js";

const listaUsuarios = ayudante.buscarEntidadEnLocalStorage("usuario");
const usuarioActual = ayudante.buscarEntidadEnSessionStorage("usuarioLogueado");
const carrito = ayudante.buscarEntidadEnSessionStorage("carrito");

document.addEventListener("DOMContentLoaded", cargaDinamica);
const formulario =  document.querySelector(".js-formulario");

formulario.addEventListener("submit",event =>{
    event.preventDefault();
    
    const esValido = validarGiftCard();
    document.getElementById("incorrectoCVV").textContent = '';
    const esCVVValido = validarCVVSeleccionado();

    if (esValido && esCVVValido) {
        formulario.submit(); 
    }
});

function cargaDinamica() {
    if (carrito) {
        let total = document.getElementById('subtotal');
        console.log(total);
        total.innerHTML = `<strong>El total es: $${carrito.precio_total}</strong>`;
    }

    const listaUsuarios = ayudante.buscarEntidadEnLocalStorage("usuario")//.metodoDePago || [];
    const usuarioActualLS = listaUsuarios.find(usuario => usuario.mail == usuarioActual.mail);
    if (usuarioActualLS) {
        const listaTarjetas = usuarioActualLS.metodoDePago || [];
        console.log(listaTarjetas);

        if (listaTarjetas.length > 0) {
            crearComboBoxTarjetas(listaTarjetas);
        }
    }
}

function crearComboBoxTarjetas(listaTarjetas) {
    const cardInfoDiv = document.querySelector(".card-info");

    // Crear el contenedor y el combo box
    const divTarjeta = document.createElement("div");
    divTarjeta.className = "input-group comboIn";

    const labelTarjeta = document.createElement("label");
    labelTarjeta.textContent = "Selecciona una tarjeta";
    labelTarjeta.setAttribute("for", "tarjetaSelect");

    const tarjetaSelect = document.createElement("select");
    tarjetaSelect.id = "tarjetaSelect";

    // Si hay tarjetas, agregar la opción "Seleccionar tarjeta" al combo box
    if (listaTarjetas.length > 1) {
        const optionDefault = document.createElement("option");
        optionDefault.value = "";
        optionDefault.textContent = "Selecciona tarjeta"; // La opción predeterminada
        tarjetaSelect.appendChild(optionDefault);
    }

    // Llenar el combo box con las tarjetas disponibles
    listaTarjetas.forEach(tarjeta => {
        const option = document.createElement("option");
        option.value = tarjeta.numeroTarjeta;
        option.textContent = tarjeta.numeroTarjeta;
        tarjetaSelect.appendChild(option);
    });

    // Agregar los elementos al DOM
    labelTarjeta.appendChild(tarjetaSelect);
    divTarjeta.appendChild(labelTarjeta);
    console.log(divTarjeta);
    cardInfoDiv.querySelector("h2").insertAdjacentElement("afterend", divTarjeta);

    // Manejar la selección de la tarjeta en el combo box
    if (listaTarjetas.length === 1) {
        // Si solo hay una tarjeta, seleccionarla automáticamente
        setTarjetaSeleccionada(listaTarjetas[0]);
        tarjetaSelect.value = listaTarjetas[0].numeroTarjeta; // Asegurarse de que el select esté seleccionado correctamente
    } else {
        tarjetaSelect.addEventListener("change", function() {
            // Si selecciona la opción "Selecciona tarjeta", limpiar los campos
            if (this.value === "") {
                limpiarCamposTarjeta();
            } else {
                const tarjetaSeleccionada = listaTarjetas.find(tarjeta => tarjeta.numeroTarjeta === this.value);
                if (tarjetaSeleccionada) {
                    setTarjetaSeleccionada(tarjetaSeleccionada);
                } else {
                    limpiarCamposTarjeta();
                }
            }
        });
    }
}

function setTarjetaSeleccionada(tarjeta) {
    document.getElementById("cardNumber").value = tarjeta.numeroTarjeta;
    document.getElementById("expiryDate").value = tarjeta.fechaVenc;
    document.getElementById("cardName").value = tarjeta.nombreTarjeta;
    document.getElementById("cvv").value = '';
}
function limpiarCamposTarjeta() {
    document.getElementById("cardNumber").value = '';
    document.getElementById("expiryDate").value = '';
    document.getElementById("cardName").value = '';
    document.getElementById("cvv").value = '';
}

function validarGiftCard(){
    const valorInputGift = document.getElementById('couponCode').value;
    console.log(valorInputGift);
    if(valorInputGift != ""){
        //momentaneamente return true
        return true;
    }else{
        console.log("entre");
        
        const esValido = validaciones.validacionesMp();
        return esValido;
    }
}




// Función para validar el CVV ingresado por el usuario
function validarCVV(tarjeta) {
    const cvvIngresado = document.getElementById("cvv").value;
    let mensajeParrafo = document.getElementById("incorrectoCVV");
    console.log("aqi"+mensajeParrafo);
    // Si el mensaje ya existe, lo eliminamos antes de mostrar uno nuevo
    if (mensajeParrafo) {
        mensajeParrafo.remove();
    }

    if (cvvIngresado != tarjeta.cvv) {
        console.log("aqui"+mensajeParrafo);
        mensajeParrafo.textContent = "CVV incorrecto";
        return false;
    }
    return true;
}

function validarCVVSeleccionado() {
    
    const usuarioActualTS = listaUsuarios.find(usuario => usuario.mail == usuarioActual.mail);
    if(usuarioActualTS){
        const listaTarjetas = usuarioActualTS.metodoDePago || [];
        console.log("lista"+JSON.stringify(listaTarjetas));
        const NumTarjeta = document.getElementById("cardNumber").value;
        const cvvIngresado = document.getElementById("cvv").value;
        console.log(NumTarjeta);

        const tarjetaEncontrada = listaTarjetas.filter((tarj)=>
            tarj.numeroTarjeta === NumTarjeta
        );
        console.log("xq"+JSON.stringify(tarjetaEncontrada));
        if(tarjetaEncontrada.length > 0){
            console.log("rjt"+JSON.stringify(tarjetaEncontrada));
            const cvvValido = tarjetaEncontrada[0].cvv;
            console.log("este oficial "+cvvValido+" y "+ cvvIngresado+" este");
            if(cvvValido != cvvIngresado){
                console.log("entre cvv inc");
                let mensajeParrafo = document.getElementById("incorrectoCVV");
                mensajeParrafo.textContent = "CVV incorrecto";
                return false;
            }
            return true;
        }
        return true;
    }
}   
    


