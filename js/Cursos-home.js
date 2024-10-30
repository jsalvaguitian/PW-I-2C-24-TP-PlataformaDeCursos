/*ToDo 
1. escribir en cada parte del curso destacado nombre, precio, etc, sin borrar la estructura html
2. sacar incrementador de cada botones
3. en Carrito cursos a comprar [{cant:2, curso},]

*/
import { Curso } from "./ClaseCurso.js";
import * as ayudante from "./ayudante.js";

let curso1 = new Curso(0, "./assets/curso-1-Microsoft-Power-BI.jpg", "Curso Power BI- Analisis de Datos y Business Intelligence", "Online", "Analisis de datos", 210900, 152, 25000, 4.7, "Frink Smith");
let curso2 = new Curso(1, "./assets/curso-2-html-js-css.jpg", "Aprende Html5, Javascript y CSS3 desde cero", "Online", "Desarrollo web", 323000, 200, 40000, 4.7, "Javier Gonzalez");
let curso3 = new Curso(2, "./assets/curso-3-pandas.jpg", "Curso Python: Manejo de datos con Pandas", "Presencial", "Analisis de datos", 156982, 40, 15000, 4.7, "Leandro Martinez");
let curso4 = new Curso(3, "./assets/curso-4-angular.jpg", "Aprende Angular desde cero a experto", "Online", "Desarrollo web", 345222, 52, 89000, 4.7, "Geraldine Keller");
let curso5 = new Curso(4, "./assets/curso-5-hacking.jpg", "Curso Ethical Hacking y Ciberseguridad", "Online", "Ciberseguridad", 456744, 220, 90000, 4.7, "Pablo Lopez");
let curso6 = new Curso(5, "./assets/curso-6-java.jpg", "Curso Completo de Java Desde Cero", "Presencial", "Desarrollo web", 789900, 300, 99000, 4.7, "Juan Benitez");
let curso7 = new Curso(6, "./assets/curso-7-docker.jpg", "Curso Docker de Principiante a Experto", "Online", "DevOps", 250000, 100, 66000, 4.7, "Bart Simpson");
let curso8 = new Curso(7, "./assets/curso-8-jest.jpg", "Curso Test Driven Development con Jest", "Online", "Testing QA", 766900, 100, 90000, 4.7, "Homero Simpson");

let cursoList = [curso1, curso2, curso3, curso4, curso5, curso6, curso7, curso8];

localStorage.setItem("curso", JSON.stringify(cursoList));  //persisto los datos de cada curso en localstorage

hacerDinamicoLosCursosDestacados();

actualizarClaseBoton()

guardarIdEnlaceCursoEnSessionStorage();

dirigirBotonCarrito();

/****  FUNCIONES********************/

function dirigirBotonCarrito(){
    let todosBotonesComprar = document.querySelectorAll(".js-card-curso-carrito");
    let botonesComprarCursosOnline = document.querySelectorAll(".js-online-curso");
    let botonesComprarCursosPresencial = document.querySelectorAll(".js-presencial-curso");

    let enlaceInicioSesion = '/pages/InicioSesionIndividuo.html';
    let enlacePago = '/pages/medio_pago.html';
    let enlaceFormulario = '/pages/inscripcion_curso_presencial.html';

    console.log(botonesComprarCursosOnline);
    console.log(todosBotonesComprar)

    if (sessionStorage.getItem("usuarioLogueado") == "" || sessionStorage.getItem("usuarioLogueado") == null) {
        dirigirEnlace(todosBotonesComprar, enlaceInicioSesion)
    } else {
        dirigirEnlace(botonesComprarCursosOnline, enlacePago);
        dirigirEnlace(botonesComprarCursosPresencial,enlaceFormulario);
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
                                <p>Comprar</p>
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




/*function (){
    let storageCurso = buscarEntidadEnLocalStorage("curso");   
}*/

/*let contenidoVirtual = [
    {
        temaPrincipal: "Introduccion",
        clases: [
            {
                subtema: "Interfaz Power BI Desktop",
                duracion: 10,
                url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
            }
        ]
        
    },
    {
        temaPrincipal: "Unidad 1",
        clases: [
            {
                subtema: "Interfaz Power BI Desktop",
                duracion: 10,
                url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
            }
        ]
    },
    {
        temaPrincipal: "Unidad 2",
        clases: [
            {
                subtema: "Interfaz Power BI Desktop",
                duracion: 10,
                url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
            }
        ]
    }
]

let contenidoPresencial=[
    {
        temaPrincipal: "Introduccion",
        clases:[
            "Introducción a la programación.", 
            "Estructura general de un algoritmo.", 
            "Diseño de Algoritmos.", 
            "Estructuras Algorítmicas. Secuenciales. Condicionales. Cíclicas. Repetitivas.",
            "Compiladores e interpretes"
        ]
    },
    {
        temaPrincipal: "Unidad 1 - Introducción al Lenguaje JAVA.",
        clases:[
            "Características del Lenguaje JAVA.",
            "Estructura de un programa en JAVA",
            "Compilación. Depuración.",
            "Herramientas y Tecnologías Java: JRE, JDK, JVM",
        ]
    },
    {
        temaPrincipal: "Unidad 2 - Variables, constantes, operadores y expresiones",
        clases: [
            "La declaración de variables y tipos de variables (locales, globales, estáticas).",
            "Operadores (asignacion, aritméticos, relacionales, lógicos, condicionales,precedencia).",
            "Tipos de datos objetos",
            "Conversión de tipos",
            "Tipos de datos objetos"
        ]
    }
]
*/

