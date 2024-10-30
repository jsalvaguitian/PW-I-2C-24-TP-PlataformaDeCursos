import { buscarEntidadEnSessionStorage } from "./ayudante.js";
import{Carrito} from "./ClaseCarrito.js"

let botonCarrito = document.querySelector(".header__principal-carrito");
let textoCarrito = botonCarrito.querySelector(".texto-carrito");
let todosBotonesComprarSelector = document.querySelectorAll(".js-card_curso-carrito");
let cont =0;
/*console.log(usuarioLogueado);
console.log(usuarioLogueado.nombre);*/
console.log(botonCarrito);
console.log(textoCarrito);


if(sessionStorage.getItem("usuarioLogueado") != ""){
    let usuarioLogueado = buscarEntidadEnSessionStorage("usuarioLogueado");
    
    if(sessionStorage.getItem("carrito")==null)
        sessionStorage.setItem("carrito",JSON.stringify(new Carrito(usuarioLogueado.id)));

    let carrito = buscarEntidadEnSessionStorage("carrito");
    textoCarrito.innerHTML = carrito.cantidad_total;

    todosBotonesComprarSelector.forEach(boton => {
        boton.addEventListener("click", ()=>{
            
            carrito.cantidad_total += 1;
            sessionStorage.setItem("carrito", JSON.stringify(carrito));
            console.log("cont " + cont);
        })

    })

}else{
    textoCarrito.innerHTML = 0;
}