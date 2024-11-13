/*
Necesito:
*destinatario
*mailDestino
//////////////////
monto
generarCodigo
////////////////
*/

import { buscarEntidadEnLocalStorage } from "./ayudante.js";
import { Carrito } from "./ClaseCarrito.js"
import { GiftCard } from "./ClaseGiftCard.js";
import { validarDatosDestinatario } from "./validacion-gift-card.js";

let giftCard = buscarEntidadEnLocalStorage("giftCardsCompradas");// creo la bbdd de gift cards []
let botonCarrito = document.querySelector(".header__principal-carrito");
let textoCarrito = botonCarrito.querySelector(".texto-carrito");


document.querySelector(".boton-enviar-formulario").addEventListener("click",verificarUsuarioLogueado);

////////////// FUNCIONES ////////////
function verificarUsuarioLogueado(event){
    if(sessionStorage.getItem("usuarioLogueado") != null){
        event.preventDefault();

        if(sessionStorage.getItem("carrito")==null)
            sessionStorage.setItem("carrito",  JSON.stringify(new Carrito()));

        if(validarDatosDestinatario()==true){
            sessionStorage.setItem("prueba", "estoy en vslidscion");
            let formulario = document.querySelector("#js-form");
            let mail= document.querySelector("#correo-destinatario").value;
            let nombre = document.querySelector("#destinatario").value;
            let monto = parseInt(document.querySelector("#monto").value);
            let codigoGenerado = generarCodigo(nombre);
            let nuevaGiftCard = new GiftCard(nombre,mail,monto,codigoGenerado);

            sessionStorage.setItem("prueba3", nuevaGiftCard)

            agregarGiftCardAlCarrito(nuevaGiftCard);
            sessionStorage.setItem("prueba7", "estoy en vslidscion");
            mostrarModalExitoso(nuevaGiftCard,formulario);
        }
        
    }else{
        event.preventDefault();
        mostrarModal();
    }
    
}
function mostrarModalExitoso(nuevaGiftCard,formulario) {
    prepararModal();
    let divTexto = document.querySelector(".texto-modal");
    divTexto.innerHTML = `<h3>😊 El código de la giftCard para ${nuevaGiftCard.nombreDestinatario} es ${nuevaGiftCard.codigo}</h3>
                        <p>Este código será válido luego de ser pagado. Haga clic en el botón para continuar.</p>
                        <button class ="boton-modal">Ir al carrito</button>`

    let botonCarrito = document.querySelector(".boton-modal");
    botonCarrito.addEventListener("click", ()=>{
        formulario.submit();
    })

    return true;    
}

function agregarGiftCardAlCarrito(nuevaGiftCard){
    sessionStorage.setItem("prue", "estoy carritp")
    let carrito = JSON.parse(sessionStorage.getItem("carrito"));
    carrito.gift_card.push(nuevaGiftCard);
    carrito.cantidad_total+=1;
    carrito.precio_total += nuevaGiftCard.monto;
    sessionStorage.setItem("prueba2", JSON.stringify(nuevaGiftCard));

    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    textoCarrito.innerHTML = carrito.cantidad_total;
}

function generarCodigo(nombre){
    let letraInicial = nombre.charAt(0).toUpperCase();
    let codigo = letraInicial+(Math.round(Math.random()*9000)+1000);
    return codigo;
}

function mostrarModal() {
    prepararModal();
    let divTexto = document.querySelector(".texto-modal");
    divTexto.innerHTML = `<h3>😊Por favor inicie sesión <a href="../pages/InicioSesionIndividuo.html"><strong>aqui</strong></a></h3> `
    return false;

}

function prepararModal(){
    const modal = document.getElementById("modalAviso");
    modal.style.display = "block";

    const spanCerrarModal = document.getElementById("cerrarModal");

    spanCerrarModal.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

