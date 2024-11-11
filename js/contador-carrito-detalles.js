import { buscarEntidadEnLocalStorage, buscarEntidadEnSessionStorage } from "./ayudante.js";
import { Carrito } from "./ClaseCarrito.js"

let botonCarrito = document.querySelector(".header__principal-carrito");
let textoCarrito = botonCarrito.querySelector(".texto-carrito");
let botonCursoPrincipal = document.querySelector(".curso-carrito");
let botonesComprarCursoOnline = document.querySelectorAll(".js-online-curso");



if (sessionStorage.getItem("usuarioLogueado") != null) {

    if (sessionStorage.getItem("carrito") == null) {
        sessionStorage.setItem("carrito", JSON.stringify(new Carrito()));
    }
    let carrito = buscarEntidadEnSessionStorage("carrito");
    textoCarrito.innerHTML = carrito.cantidad_total;

    agregarCursoPrincipalEspecifico(carrito);
    agregarCursoRelacionadoEnElCarrito(carrito);

    //console.log(JSON.parse(sessionStorage.getItem("carrito")).cursos_a_comprar.length);

} else {
    textoCarrito.innerHTML = 0;
}
function agregarCursoPrincipalEspecifico(carrito){
    botonCursoPrincipal.addEventListener("click", () => {
        ponerCursoPrincipalEspecificoEnCarrito(carrito);
        sessionStorage.setItem("carrito", JSON.stringify(carrito));

        textoCarrito.innerHTML = carrito.cantidad_total;
    })
}

function ponerCursoPrincipalEspecificoEnCarrito(carrito){
    let indiceCursoPrincipal =JSON.parse(sessionStorage.getItem("indiceCursoAVer"));
    let cursoBuscado = buscarPorIdCursoDB(indiceCursoPrincipal);
    let modalidadPrincipal = document.querySelector(".curso-modalidad");

    if(modalidadPrincipal.textContent == "Online"){
        if (carrito.cursos_a_comprar.length == 0) {
            agregarUnaFilaACarrito(carrito, cursoBuscado);
            calcularPrecioTotal(carrito,cursoBuscado);
        } else {
            if (existeCursoEnCarrito(carrito, cursoBuscado) == false) {
                agregarUnaFilaACarrito(carrito, cursoBuscado);
                calcularPrecioTotal(carrito,cursoBuscado);
            }
        }
        
    }
}

function buscarPorIdCursoDB(indice){
    let cursosDB = buscarEntidadEnLocalStorage("curso");

    for (let i = 0; i < cursosDB.length; i++) {
        if (cursosDB[i].id == indice)
            return cursosDB[i];
    }
    return null;
}

function agregarCursoRelacionadoEnElCarrito(carrito){
    botonesComprarCursoOnline.forEach(unBotonOnline => {
        unBotonOnline.addEventListener("click", () => {
            ponerCursoOnlineCarrito(carrito, unBotonOnline.parentNode);
            sessionStorage.setItem("carrito", JSON.stringify(carrito));

        })
    })
}

function calcularPrecioTotal(carrito,cursoBuscado) {
    carrito.precio_total +=cursoBuscado.precio
}

function ponerCursoOnlineCarrito(carrito, divDescripcionCardOnline) {
    let nombreCursoClickeado = divDescripcionCardOnline.querySelector(".card_curso-titulo").innerText;
    let cursoBuscado = buscarPorNombreCursoEnDB(nombreCursoClickeado);

    if (carrito.cursos_a_comprar.length == 0) {
        agregarUnaFilaACarrito(carrito, cursoBuscado);
        calcularPrecioTotal(carrito,cursoBuscado);
    } else {
        if (existeCursoEnCarrito(carrito, cursoBuscado) == false) {
            agregarUnaFilaACarrito(carrito, cursoBuscado);
            calcularPrecioTotal(carrito,cursoBuscado);
        }

    }
}

function agregarUnaFilaACarrito(carrito, cursoBuscado) {
    carrito.cantidad_total += 1;
    let filaCarrito = crearFilaTablaCarrito(1, cursoBuscado);
    carrito.cursos_a_comprar.push(filaCarrito);
}

function existeCursoEnCarrito(carrito, cursoBuscado) {
    localStorage.setItem("prueba20", "Si existen en el carrito");
    for (let i = 0; i < carrito.cursos_a_comprar.length; i++) {
        if (carrito.cursos_a_comprar[i].curso.id == cursoBuscado.id) {
            return true;
        }
    }
    return false;
}
function crearFilaTablaCarrito(cantidad, cursoBuscado) {
    let filaCarrito = {
        cantidad: cantidad,
        curso: cursoBuscado
    }

    return filaCarrito

}

function buscarPorNombreCursoEnDB(nombreCursoClickeado) {
    let cursosDB = buscarEntidadEnLocalStorage("curso");

    for (let i = 0; i < cursosDB.length; i++) {
        if (cursosDB[i].nombre == nombreCursoClickeado)
            return cursosDB[i];

    }
    return null;
}