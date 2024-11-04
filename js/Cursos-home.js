import * as ayudante from "./ayudante.js";
import { llenarDatosEnLaBBDDCursos } from "./bbdd-cursos.js";

llenarDatosEnLaBBDDCursos();

hacerDinamicoLosCursosDestacados();

actualizarClaseBoton();

agregarNombreAlosBotonesCarritos();

guardarIdEnlaceCursoEnSessionStorage();



if (sessionStorage.getItem("btnCursos") == null)
    crearBotonesSessionStorage("btnCursos");

dirigirBotonCarrito();

//FUNCIONES
function dirigirBotonCarrito() {
    let todosBotonesComprar = document.querySelectorAll(".js-card-curso-carrito");
    let botonesComprarCursosPresencial = document.querySelectorAll(".js-presencial-curso");

    let enlaceInicioSesion = '/pages/InicioSesionIndividuo.html';
    let enlacePago = '/pages/medio_pago.html';
    let enlaceFormulario = '/pages/inscripcion_curso_presencial.html';
    let enlaceCarrito = '/pages/carrito.html';

    if (sessionStorage.getItem("usuarioLogueado") == "" || sessionStorage.getItem("usuarioLogueado") == null) {
        dirigirEnlace(todosBotonesComprar, enlaceInicioSesion)

    } else {
        console.log(botonesComprarCursosPresencial)
        dirigirEnlace(botonesComprarCursosPresencial, enlaceFormulario);

        cambiarEstadoBtnOnlineClickeado(todosBotonesComprar);

        let botonesStorage = JSON.parse(sessionStorage.getItem("btnCursos"));

        for(let i=0; i<botonesStorage.length; i++){
            if(botonesStorage[i].tipo == "Online"){
                if (botonesStorage[i].estado == true) {
                    todosBotonesComprar[i].querySelector(".btn-texto").innerHTML = " Verlo en el Carrito";
    
                    todosBotonesComprar[i].addEventListener("click", (event) => {
                        event.preventDefault();
                        window.location.href = enlaceCarrito;
                    })
                } else {
                    todosBotonesComprar[i].addEventListener("click", (event) => {
                        event.preventDefault();
                        window.location.href = enlacePago;
                    })
    
                }
            }
            
        }

    }
}

function cambiarEstadoBtnOnlineClickeado(botonesComprar) {
    let modalidadesH4 = document.querySelectorAll(".modalidad-curso");
    let botonesStorage = ayudante.buscarEntidadEnSessionStorage("btnCursos");

    botonesComprar.forEach((boton, index) => {
        if (modalidadesH4[index].textContent == "Online") {
            boton.addEventListener("click", () => {
                botonesStorage[index].estado = true;
                sessionStorage.setItem("btnCursos", JSON.stringify(botonesStorage));
 
            })

        }

    })

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

function crearBotonesSessionStorage(keySession) {
    let botonesComprarCursos = document.querySelectorAll(".js-card-curso-carrito");
    let modalidadesH4 = document.querySelectorAll(".modalidad-curso");
    let botonesCarritos = [];

    for (let i = 0; i < botonesComprarCursos.length; i++) {
        if (modalidadesH4[i].textContent == "Online") {
            let boton = {
                tipo: "Online",
                estado: false,
            }
            botonesCarritos.push(boton);
            sessionStorage.setItem(keySession, JSON.stringify(botonesCarritos));


        } else {
            let boton = {
                tipo: "Presencial",
                estado: false,
            }
            botonesCarritos.push(boton);
            sessionStorage.setItem(keySession, JSON.stringify(botonesCarritos));

        }
    }
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


function guardarIdEnlaceCursoEnSessionStorage() {
    const enlacesTarjetas = document.querySelectorAll(".js-enlace-card");//la tarjeta esta dentro de la etiqueta a

    enlacesTarjetas.forEach((cardEnlace, index) => {
        cardEnlace.addEventListener("click", () => {
            let indiceCard = index;

            sessionStorage.setItem("indiceCursoAVer", JSON.stringify(indiceCard));
        });
    })
}

function actualizarClaseBoton() {
    let botonesComprar = document.querySelectorAll(".js-card-curso-carrito");
    let modalidadesH4 = document.querySelectorAll(".modalidad-curso");

    for (let i = 0; i < modalidadesH4.length; i++) {
        if (modalidadesH4[i].innerText === "Online") {
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
