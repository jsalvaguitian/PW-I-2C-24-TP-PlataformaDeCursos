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
const todosBotonesComprarSelector = document.querySelectorAll(".js-card_curso-carrito");

localStorage.setItem("curso", JSON.stringify(cursoList));  //persisto los datos de cada curso en localstorage

guardarIdEnlaceCursoEnSessionStorage();

if (sessionStorage.getItem("botones") == null) 
    crearBotonesEnSessionStorage();

dirigirBotonCarrito();

if(sessionStorage.getItem("usuarioLogueado") != "")
    incrementarContadorBotonComprarPorCurso();

/****  FUNCIONES********************/

function dirigirBotonCarrito() {
    let botonesComprarCursosOnline = document.querySelectorAll(".js-online-curso");
    let botonesComprarCursosPresencial = document.querySelectorAll(".js-presencial-curso");
    let enlacePago = '/pages/medio_pago.html';
    let enlaceFormulario = '/pages/inscripcion_curso_presencial.html';
    let enlaceInicioSesion = '/pages/InicioSesionIndividuo.html';

    if (JSON.stringify(ayudante.buscarEntidadEnSessionStorage("usuarioLogueado")) == JSON.stringify([])) {
        dirigirEnlace(todosBotonesComprarSelector, enlaceInicioSesion);
    } else {
        dirigirEnlace(botonesComprarCursosOnline, enlacePago);
        dirigirEnlace(botonesComprarCursosPresencial, enlaceFormulario);
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

function incrementarContadorBotonComprarPorCurso() {

    todosBotonesComprarSelector.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            console.log(index);//me devuelve el indice del boton

            let botonesStorage = ayudante.buscarEntidadEnSessionStorage("botones");
            botonesStorage[index].contador += 1;
            sessionStorage.setItem("botones", JSON.stringify(botonesStorage));
            console.log("cont " + cont);
        })
    })

}

function crearBotonesEnSessionStorage() {
    let botonesCarritos = [];

    for (let i = 0; i < todosBotonesComprarSelector.length; i++) {
        let unboton = {
            indexBtn: i,
            contador: 0,
        }
        botonesCarritos.push(unboton);
    }

    console.log(botonesCarritos);
    sessionStorage.setItem("botones", JSON.stringify(botonesCarritos));
}


function guardarIdEnlaceCursoEnSessionStorage() {
    const enlacesTarjetas = document.querySelectorAll(".js-enlace-card");

    console.log(enlacesTarjetas);

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











