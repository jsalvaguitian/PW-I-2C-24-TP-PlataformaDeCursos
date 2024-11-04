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
    if (esValido) {
        formulario.submit(); // Envía el formulario
    }
});
function cargaDinamica() {
    if(carrito){
        let total=document.getElementById('subtotal');
        console.log(total);
        total.innerHTML=`<strong>El total es: $${carrito.precio_total}</strong>`;
    }
    
    //const listaUsuarios = ayudante.buscarEntidadEnLocalStorage("usuario")//.metodoDePago || [];
    const usuarioActualLS = listaUsuarios.find(usuario => usuario.mail == usuarioActual.mail);
    
    if(usuarioActualLS){
        const listaTarjetas = usuarioActualLS.metodoDePago || [];
        console.log(listaTarjetas);
        //const tarjetaSelect = document.getElementById("tarjetaSelect");
        const cardInfoDiv = document.querySelector(".card-info");

        // Si hay tarjetas, llenar el combo box
        if (listaTarjetas.length > 0) {
            const divTarjeta = document.createElement("div");
            divTarjeta.className = "input-group comboIn";

            const labelTarjeta = document.createElement("label");
            labelTarjeta.textContent = "Selecciona una tarjeta";
            labelTarjeta.setAttribute("for", "tarjetaSelect");

            let tarjetaSelect = document.createElement("select");
            tarjetaSelect.id = "tarjetaSelect";

            listaTarjetas.forEach(tarjeta => {
                const option = document.createElement("option");
                option.value = tarjeta.numeroTarjeta;
                option.textContent = tarjeta.numeroTarjeta;
                tarjetaSelect.appendChild(option);
            });
            labelTarjeta.appendChild(tarjetaSelect);
            divTarjeta.appendChild(labelTarjeta);
            console.log(divTarjeta);
            cardInfoDiv.querySelector("h2").insertAdjacentElement("afterend", divTarjeta);
            
            // Manejo del cambio en el combo box
            tarjetaSelect.addEventListener("change", function() {
            let tarjetaSeleccionada = listaTarjetas.find(tarjeta => tarjeta.numeroTarjeta === this.value);
            if (tarjetaSeleccionada) {
                document.getElementById("cardNumber").value = tarjetaSeleccionada.numeroTarjeta;
                document.getElementById("expiryDate").value = tarjetaSeleccionada.fechaVenc; 
                document.getElementById("cardName").value = tarjetaSeleccionada.nombreTarjeta; 
            } else {
                document.getElementById("cardNumber").value = '';
                document.getElementById("expiryDate").value = '';
                document.getElementById("cardName").value = '';
            }
            });
        }

    }
    
};

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


