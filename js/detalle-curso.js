import * as ayudante from "./ayudante.js";
import { Carrito } from "./ClaseCarrito.js";

//1-me conecto a la ddbb cursos
let cursosDB = ayudante.buscarEntidadEnLocalStorage("curso");

let indiceCurso, nombreCurso, 
imagen, modalidad, sinopsis, 
cantidadAlumnos, horas, precio,
profNombres, descripcion, descripcionProf;

let botonCursoPrincipal = document.querySelector(".curso-carrito");

indiceCurso = ayudante.buscarEntidadEnSessionStorage("indiceCursoAVer");


nombreCurso = document.querySelector(".nombre-dinamico");
nombreCurso.innerHTML = cursosDB[indiceCurso].nombre;

imagen = document.querySelector(".imagen-dinamica");
imagen.src = cursosDB[indiceCurso].imagen_url;

modalidad = document.querySelector(".curso-modalidad");
modalidad.innerHTML = cursosDB[indiceCurso].modalidad;

sinopsis = document.querySelector(".sinopsis-dinamico");
sinopsis.innerHTML = cursosDB[indiceCurso].sinopsis;

cantidadAlumnos = document.querySelector(".curso-alumnos");
cantidadAlumnos.innerHTML = cursosDB[indiceCurso].cantidad_alumnos + " Estudiantes";


horas = document.querySelector(".hora-dinamica");
horas.innerHTML = cursosDB[indiceCurso].horas + " horas de video bajo demanda";

precio = document.querySelector(".precio-dinamico");
precio.innerHTML = "$ " + cursosDB[indiceCurso].precio;

descripcion = document.querySelector(".descripcion-texto");
descripcion.innerHTML = cursosDB[indiceCurso].descripcion;

let fotoprof = document.querySelector(".foto-prof");
fotoprof.src = cursosDB[indiceCurso].imagenProf;

descripcionProf = document.querySelector(".descripcion-texto-prof");
descripcionProf.innerHTML = cursosDB[indiceCurso].descripcionProf;
profNombres = document.querySelectorAll(".nombre-profe-dinamico");
profNombres.forEach(nombre => {
    nombre.innerHTML = cursosDB[indiceCurso].profNombre;
})

let textobotonCursoPrincipal = document.querySelector(".texto-enlace-carrito");
let textoModalidad = document.querySelector(".curso-modalidad").textContent;


console.log(textoModalidad);

//1 cambio el texto boton PRINCIPAL
if (textoModalidad == "Online") {
    textobotonCursoPrincipal.innerHTML = "Comprar";
} else {
    textobotonCursoPrincipal.innerHTML = "Inscribir";
}

hacerDinamicoElAcordionDeContenidoDelCurso();

////////////////////////////////////////////////////////////////////////////////////
hacerDinamicoLosCursosDestacados(0, 4);

actualizarClaseBoton();

agregarNombreAlosBotonesCarritos();


/*if (sessionStorage.getItem("btnCursos") == null)
    crearBotonesSessionStorage("btnCursos");*/

guardarIdEnlacesCursosEnSessionStorage();

dirigirbotonesCarritos();

///////////////////////////////// FUNCIONES ////////////////////////////////////
function hacerDinamicoElAcordionDeContenidoDelCurso() {
    let cursosDB = ayudante.buscarEntidadEnLocalStorage("curso")
    let unCurso = cursosDB[indiceCurso];

    let divContenidosCurso = document.querySelector(".contenido-curso");


    if (unCurso.modalidad == "Online") {
        for (let i = 0; i < unCurso.contenido.length; i++) {
            let nuevoDetail = document.createElement("details");
            nuevoDetail.className = "details-contenido";
            let nuevoSummary = document.createElement("summary");
            nuevoSummary.innerHTML = unCurso.contenido[i].temaPrincipal;

            nuevoDetail.appendChild(nuevoSummary);

            divContenidosCurso.appendChild(nuevoDetail);

            for (let j = 0; j < unCurso.contenido[i].clases.length; j++) {
                let nuevaDivFila = document.createElement("div");
                nuevaDivFila.className = "summary-fila";

                const nuevoDiv1ColumnaIconSubtem = document.createElement("div");
                nuevoDiv1ColumnaIconSubtem.className = "summary-columna";

                nuevoDiv1ColumnaIconSubtem.innerHTML = `<i class="fa-regular fa-circle-play"></i>
                                <p>${unCurso.contenido[i].clases[j].subtema}</p>`;

                const nuevoDiv2ColumnaTime = document.createElement("div");
                nuevoDiv2ColumnaTime.className = "summary-columna";
                nuevoDiv2ColumnaTime.innerHTML = `<i class="fa-regular fa-clock"></i>
                                <p>${unCurso.contenido[i].clases[j].duracion}</p>`;

                const nuevoDiv3ColumnCheck = document.createElement("i");
                nuevoDiv3ColumnCheck.className = "fa-regular fa-circle-check";

                nuevaDivFila.appendChild(nuevoDiv1ColumnaIconSubtem);
                nuevaDivFila.appendChild(nuevoDiv2ColumnaTime);
                nuevaDivFila.appendChild(nuevoDiv3ColumnCheck);

                nuevoDetail.appendChild(nuevaDivFila);

            }
        }
    }else if(unCurso.modalidad == "Presencial"){
        console.log(unCurso.programaAnalitico[0])

        for(let i=0; i< unCurso.programaAnalitico.length; i++){
            let nuevoDetail = document.createElement("details");
            nuevoDetail.className = "details-contenido";

            let nuevoSummary = document.createElement("summary");
            nuevoSummary.innerHTML = unCurso.programaAnalitico[i].Titulo;

            nuevoDetail.appendChild(nuevoSummary);

            divContenidosCurso.appendChild(nuevoDetail);

            for (let j = 0; j < unCurso.programaAnalitico[i].tema.length; j++) {
                let nuevaDivFila = document.createElement("div");
                nuevaDivFila.className = "summary-fila";

                nuevaDivFila.innerHTML=`<p>${unCurso.programaAnalitico[i].tema[j]}</p>`;

                nuevoDetail.appendChild(nuevaDivFila);

            }


        }
    }

}

function dirigirbotonesCarritos() {
    let todosBotonesComprar = document.querySelectorAll(".js-card-curso-carrito");
    let botonesComprarCursosPresencial = document.querySelectorAll(".js-presencial-curso");
    let modalidadCursoPrincipal = document.querySelector(".curso-modalidad");
    let modalidadesCursitos = document.querySelectorAll(".modalidad-curso");
    let btnText = document.querySelectorAll(".btn-texto");

    let enlaceInicioSesion = '../pages/InicioSesionIndividuo.html';
    let enlaceFormulario = '../pages/inscripcion_curso_presencial.html';
    let enlaceCarrito = '../pages/carrito.html';

    console.log(todosBotonesComprar)

    if (sessionStorage.getItem("usuarioLogueado") == "" || sessionStorage.getItem("usuarioLogueado") == null) {
        dirigirEnlace(todosBotonesComprar, enlaceInicioSesion);
        dirigirCualquierBotonPrincipalAUnEnlace(enlaceInicioSesion);

    } else {
        dirigirEnlace(botonesComprarCursosPresencial, enlaceFormulario);
        if (sessionStorage.getItem("carrito") == null) {
            sessionStorage.setItem("carrito", JSON.stringify(new Carrito()));
        }

        let carrito = JSON.parse(sessionStorage.getItem("carrito"));

        if(existeElCursoPrincipalOnlineEnCarrito(carrito)){
            textobotonCursoPrincipal.innerHTML = "Ya esta en el carrito";
            botonCursoPrincipal.addEventListener("click", (event) => {
                event.preventDefault();
                window.location.href = enlaceCarrito;
            })
        }else{
            console.log("estoy aqui en false");
            //if(modalidadCursoPrincipal )
            if(modalidadCursoPrincipal.textContent=== "Presencial"){
                actualizarInfoModal(indiceCurso, enlaceFormulario);
                botonCursoPrincipal.addEventListener("click", () => {
                    mostrarModal(); 
                })
                
            }else{//para cursos virtuales
                actualizarInfoModal(indiceCurso, enlaceCarrito);
                botonCursoPrincipal.addEventListener("click", () => {
                    textobotonCursoPrincipal.innerHTML = "Ya esta en el carrito";
                    mostrarModal(); 
                })
            }            
        }


        //BOTONCITOS

        for (let i = 0; i < todosBotonesComprar.length; i++) {
            console.log(modalidadesCursitos[i])
            if (modalidadesCursitos[i].textContent === "Online") {
                console.log(modalidadesCursitos[i])
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

function existeElCursoPrincipalOnlineEnCarrito(carrito){
    let modalidadOnline = document.querySelector(".curso-modalidad");
    for (let i = 0; i < carrito.cursos_a_comprar.length; i++) {
        if (carrito.cursos_a_comprar[i].curso.id == indiceCurso && modalidadOnline.textContent == "Online") {
            return true;
        }
    }
    return false;

}

function actualizarInfoModal(indicePrincipal, enlace) {
    document.getElementById("nombre-curso").innerHTML = cursosDB[indicePrincipal].nombre;
    document.getElementById("descripcion-curso").innerHTML = cursosDB[indicePrincipal].sinopsis;
    document.getElementById("paso-siguiente").href = enlace;
}
function mostrarModal() {
    const modal = document.getElementById("modalFelicitaciones");
    modal.style.display = "block";

    const span = document.getElementById("cerrarModal");

    // Cuando se hace clic en <span> (x), se cierra el modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Cuando se hace clic fuera del modal, se cierra
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}


function dirigirEnlace(botones, enlace) {
    botones.forEach(boton => {
        boton.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = enlace;
        })
    })
}

function dirigirCualquierBotonPrincipalAUnEnlace(enlace) {
    botonCursoPrincipal.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = enlace;
    })
}


function guardarIdEnlacesCursosEnSessionStorage() {
    const enlacesTarjetas = document.querySelectorAll(".js-enlace-card");//la tarjeta esta dentro de la etiqueta a

    enlacesTarjetas.forEach((cardEnlace, index) => {
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

/*function crearBotonesSessionStorage(keySession) {
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
*/

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
function hacerDinamicoLosCursosDestacados(inicio, fin) {
    let divCursosDestacados = document.querySelector(".cursos_destacados");
    let cursosDB = ayudante.buscarEntidadEnLocalStorage("curso")

    for (let i = inicio; i < fin; i++) {
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

                            <button class="card_curso-carrito js-card-curso-carrito ">
                                <span class="material-symbols-outlined">shopping_cart</span>
                                <p class= "btn-texto">Comprar</p>
                            </button>
                        </div>
                    </article>`;


        nuevaTarjeta.href = "../pages/detalles_de_un_curso_virtual.html";


        divCursosDestacados.appendChild(nuevaTarjeta);
    }

}