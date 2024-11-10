import * as ayudante from "./ayudante.js";
import { llenarDatosEnLaBBDDCursos } from "./bbdd-cursos.js";
import { Carrito } from "./ClaseCarrito.js"

llenarDatosEnLaBBDDCursos();

hacerDinamicoLosCursosDestacados();

actualizarClaseBoton();

agregarNombreAlosBotonesCarritos();

guardarIdEnlaceCursoEnSessionStorage();

dirigirBotonCarrito();


//FUNCIONES
function dirigirBotonCarrito() {
    let todosBotonesComprar = document.querySelectorAll(".js-card-curso-carrito");
    let botonesComprarCursosPresencial = document.querySelectorAll(".js-presencial-curso");
    let botonesComprarCursosOnline = document.querySelectorAll(".js-online-curso");

    let enlaceInicioSesion = '/pages/InicioSesionIndividuo.html';
    let enlaceFormulario = '/pages/inscripcion_curso_presencial.html';
    let enlaceCarrito = '/pages/carrito.html';

    console.log(botonesComprarCursosOnline);
    if (sessionStorage.getItem("usuarioLogueado") == "" || sessionStorage.getItem("usuarioLogueado") == null) {
        dirigirEnlace(todosBotonesComprar, enlaceInicioSesion);
    } else {
        dirigirEnlace(botonesComprarCursosPresencial, enlaceFormulario);
        if (sessionStorage.getItem("carrito") == null) {
            sessionStorage.setItem("carrito", JSON.stringify(new Carrito()));
        }
        let carrito = JSON.parse(sessionStorage.getItem("carrito"));
        console.log(carrito);
        let modalidadH4 = document.querySelectorAll(".modalidad-curso");
        let btnText = document.querySelectorAll(".btn-texto");
        let textoCarrito = document.querySelector(".texto-carrito");
        textoCarrito.innerHTML = carrito.cantidad_total;


        for (let i = 0; i < todosBotonesComprar.length; i++) {
            if (modalidadH4[i].innerText === "Online") {
                if (estaCursoEnElCarrito(carrito, i)) {
                    btnText[i].innerText = "Ya esta en el carrito";
                    todosBotonesComprar[i].addEventListener("click", (event) => {
                        event.preventDefault();
                        window.location.href = enlaceCarrito;
                    })
                }else{

                    todosBotonesComprar[i].addEventListener("click", (event) => {
                        event.preventDefault();
                        window.location.href = enlaceCarrito;
                    })

                }
            }
        }
    }
}

function estaCursoEnElCarrito(carrito, indiceCurso){
    for (let i = 0; i < carrito.cursos_a_comprar.length; i++) {
        if (carrito.cursos_a_comprar[i].curso.id == indiceCurso) {
            return true;
        }
    }
    return false;


}

function dirigirEnlace(botones, enlace) {
    sessionStorage.setItem("dirigirenlaceformulario", true)
    botones.forEach(boton => {
        boton.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = enlace;
        })
    })
}

function guardarIdEnlaceCursoEnSessionStorage() {
    const enlacesTajetas = document.querySelectorAll(".js-enlace-card");

    enlacesTajetas.forEach((cardEnlace, index) => {
        cardEnlace.addEventListener("click", () => {
            let indiceCard = index;

            sessionStorage.setItem("indiceCursoAVer", JSON.stringify(indiceCard));
        });
    })
}

function agregarNombreAlosBotonesCarritos() {
    let botonesComprarCursos = document.querySelectorAll(".js-card-curso-carrito");
    let modalidadesH4 = document.querySelectorAll(".modalidad-curso");
    let btnText = document.querySelectorAll(".btn-texto");

    for (let i = 0; i < botonesComprarCursos.length; i++) {
        if (modalidadesH4[i].textContent == "Online") {
            btnText[i].innerText = "Comprar";
        } else {
            btnText[i].innerText = "Inscribir";
        }
    }
}

function actualizarClaseBoton() {
    let botonesComprar = document.querySelectorAll(".js-card-curso-carrito");
    let modalidadH4 = document.querySelectorAll(".modalidad-curso");

    for (let i = 0; i < modalidadH4.length; i++) {

        if (modalidadH4[i].innerText === "Online") {
            botonesComprar[i].className += " js-online-curso";
        } else {
            botonesComprar[i].className += " js-presencial-curso";
        }
    }
}

function hacerDinamicoLosCursosDestacados() {
    let divCursosDestacados = document.querySelector(".cursos_destacados");
    let cursosDB = ayudante.buscarEntidadEnLocalStorage("curso")

    for (let i = 0; i < 8; i++) {
        const nuevaTarjeta = document.createElement('a');
        nuevaTarjeta.className = "js-enlace-card";

        nuevaTarjeta.innerHTML =
            `<article class="cursos_destacados-card">
                        <div class="card_contenedor-imagen">
                            <img src="${cursosDB[i].imagen_url}" alt="" class="card-imagen">
                            <h4 class="modalidad-curso">${cursosDB[i].modalidad}</h4>
                        </div>
                        <div class="card_contenedor-descripcion">
                            <h3 class="card_curso-titulo">${cursosDB[i].nombre}</h3>
                            <p class="card_curso-mentor">${cursosDB[i].profNombre}</p>

                            <p class="card_curso-puntaje">${cursosDB[i].puntaje}
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </p>
                            <p class="card_curso-alumnos">
                                <i class="fa-solid fa-user"></i>
                                (${cursosDB[i].cantidad_alumnos})
                            </p>

                            <div class="card_curso-hora">
                                <span class="material-symbols-outlined">schedule</span>
                                <p>${cursosDB[i].horas}hrs</p>
                            </div>
                            <p class="card_curso-precio">$${cursosDB[i].precio}</p>

                            <button class="card_curso-carrito js-card-curso-carrito">
                                <span class="material-symbols-outlined">shopping_cart</span>
                                <p class= "btn-texto"></p>
                            </button>
                        </div>
                    </article>`;


        nuevaTarjeta.href = "../pages/detalles_de_un_curso_virtual.html";


        divCursosDestacados.appendChild(nuevaTarjeta);
    }
}

//Ah no se olviden al momento de iniciar sesion que lo mande al index
