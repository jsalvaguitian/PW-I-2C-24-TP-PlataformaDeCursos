import { buscarEntidadEnLocalStorage, buscarEntidadEnSessionStorage } from "./ayudante.js";
import { Carrito } from "./ClaseCarrito.js"

let botonCarrito = document.querySelector(".header__principal-carrito");
let textoCarrito = botonCarrito.querySelector(".texto-carrito");
let todosBotonesComprarSelector = document.querySelectorAll(".js-card-curso-carrito");
let cont = 0;
/*console.log(usuarioLogueado);
console.log(usuarioLogueado.nombre);*/



if (sessionStorage.getItem("usuarioLogueado") != "") {
    let usuarioLogueado = buscarEntidadEnSessionStorage("usuarioLogueado");

    if (sessionStorage.getItem("carrito") == null)
        sessionStorage.setItem("carrito", JSON.stringify(new Carrito(usuarioLogueado.id)));

    let carrito = buscarEntidadEnSessionStorage("carrito");
    textoCarrito.innerHTML = carrito.cantidad_total;

    todosBotonesComprarSelector.forEach(boton => {
        boton.addEventListener("click", () => {

            carrito.cantidad_total += 1; //imcremento el contador general del carrito
            ponerUnCursoEnElCarrito(boton.parentNode, carrito);
            sessionStorage.setItem("carrito", JSON.stringify(carrito));
            console.log("cont " + cont);
            
        })

    })

} else {
    textoCarrito.innerHTML = 0;
}




function ponerUnCursoEnElCarrito(divUnaCard, carrito) {
    let nombreCursoClickeado = divUnaCard.querySelector(".card_curso-titulo").innerText;
    let cursoBuscado = buscarPorNombreCursoEnDB(nombreCursoClickeado);

    if(JSON.stringify(carrito.cursos_a_comprar)==JSON.stringify([])){
        let filaCarrito= {
            cantidad: 1,
            curso: cursoBuscado
        };
        carrito.cursos_a_comprar.push(filaCarrito);
    }else{
        let idFilaCarrito = buscarIdFilaCarrito(carrito,cursoBuscado);
        if(idFilaCarrito != null){
            carrito.cursos_a_comprar[idFilaCarrito].cantidad+=1;
        }else{
            let filaCarrito= {
                cantidad: 1,
                curso: cursoBuscado
            };
            carrito.cursos_a_comprar.push(filaCarrito);

        }

    }
    
    console.log(localStorage.setItem("prueba",true));
}

function buscarIdFilaCarrito(carrito, cursoBuscado){
    for(let i=0; i<carrito.cursos_a_comprar.length ; i++){
        if(carrito.cursos_a_comprar[i].curso.id == cursoBuscado.id)
            return i;
    }
    return null;

}

function buscarPorNombreCursoEnDB(nombreCursoClickeado){
    let cursosDB = buscarEntidadEnLocalStorage("curso");

    for(let i=0; i< cursosDB.length; i++){
        if(cursosDB[i].nombre== nombreCursoClickeado)
            return cursosDB[i];

    }
    return null;
}