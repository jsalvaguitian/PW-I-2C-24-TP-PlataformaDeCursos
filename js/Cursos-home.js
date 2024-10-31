import * as ayudante from "./ayudante.js";
import { llenarDatosEnLaBBDDCursos } from "./bbdd-cursos.js";

llenarDatosEnLaBBDDCursos();

hacerDinamicoLosCursosDestacados();

actualizarClaseBoton()

if (sessionStorage.getItem("btnCursoOnline") == null)
    crearBotonesOnlineSessionStorage("btnCursoOnline");

guardarIdEnlaceCursoEnSessionStorage();

dirigirBotonCarrito();



/****  FUNCIONES********************/
function crearBotonesOnlineSessionStorage(keySession) {
    let botonesComprarCursosOnline = document.querySelectorAll(".js-online-curso");
    let botonesCarritosVirtual = [];

    for (let i = 0; i < botonesComprarCursosOnline.length; i++) {
        let fueClickeado = false
        botonesCarritosVirtual.push(fueClickeado);
    }
    sessionStorage.setItem(keySession, JSON.stringify(botonesCarritosVirtual));
}

function dirigirBotonCarrito() {
    let todosBotonesComprar = document.querySelectorAll(".js-card-curso-carrito");
    let botonesComprarCursosOnline = document.querySelectorAll(".js-online-curso");
    let botonesComprarCursosPresencial = document.querySelectorAll(".js-presencial-curso");

    let enlaceInicioSesion = '/pages/InicioSesionIndividuo.html';
    let enlacePago = '/pages/medio_pago.html';
    let enlaceFormulario = '/pages/inscripcion_curso_presencial.html';
    let enlaceCarrito = '/pages/carrito.html';

    console.log(botonesComprarCursosOnline);
    console.log(todosBotonesComprar)

    if (sessionStorage.getItem("usuarioLogueado") == "" || sessionStorage.getItem("usuarioLogueado") == null) {
        dirigirEnlace(todosBotonesComprar, enlaceInicioSesion)
    } else {
        dirigirEnlace(botonesComprarCursosPresencial, enlaceFormulario);

        cambiarEstadoBtnStorageClickeado(botonesComprarCursosOnline);

        let botonesStorage = JSON.parse(sessionStorage.getItem("btnCursoOnline"));

        for (let i = 0; i < botonesStorage.length; i++) {
            if (botonesStorage[i] == true) {
                botonesComprarCursosOnline[i].querySelector(".btn-texto").innerHTML= " Verlo en el Carrito";
                
                botonesComprarCursosOnline[i].addEventListener("click", (event) => {
                    event.preventDefault();
                    window.location.href = enlaceCarrito;
                })
            }else{
                botonesComprarCursosOnline[i].addEventListener("click", (event) => {
                    event.preventDefault();
                    window.location.href = enlacePago;
                })

            }
        }
    }
}


function cambiarEstadoBtnStorageClickeado(botonesComprarCursoOnline) {
    botonesComprarCursoOnline.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            let botonesStorage = ayudante.buscarEntidadEnSessionStorage("btnCursoOnline");
            //let cont = botonesStorage[index] + 1;
            botonesStorage[index] = true;
            sessionStorage.setItem("btnCursoOnline", JSON.stringify(botonesStorage));
        })
    })

}

function dirigirEnlace(botones, enlace) {
    botones.forEach(boton => {
        boton.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = enlace;
        })
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
                                <p class= "btn-texto">Comprar</p>
                            </button>
                        </div>
                    </article>`;

        if (cursosDB[i].modalidad == "Online") {
            nuevaTarjeta.href = "./pages/detalles_de_un_curso_virtual.html";
        } else {
            nuevaTarjeta.href = "./pages/detalles_de_un_curso_presencial.html"
        }

        divCursosDestacados.appendChild(nuevaTarjeta);
    }

}



function guardarIdEnlaceCursoEnSessionStorage() {
    const enlacesTarjetas = document.querySelectorAll(".js-enlace-card");
    enlacesTarjetas.forEach((cardEnlace, index) => {
        cardEnlace.addEventListener("click", () => {
            let indiceCard = index;

            sessionStorage.setItem("indiceCursoAVer", JSON.stringify(indiceCard));
        });
    })
}
