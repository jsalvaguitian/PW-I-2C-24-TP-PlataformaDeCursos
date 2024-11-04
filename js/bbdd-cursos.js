import { CursoPresencial } from "./ClaseCursoPresencial.js";
import { CursoVirtual } from "./ClaseCursoVirtual.js";

export function llenarDatosEnLaBBDDCursos(){
    let curso1 = new CursoVirtual(0, "../assets/curso-1-Microsoft-Power-BI.jpg", "Curso Power BI- Analisis de Datos y Business Intelligence",
        "Curso de Power BI en Español - Datos desde Excel, Dashboards, y DAX en Microsoft Power BI ¡Power BI Desktop es gratis!",
        "Online", "Analisis de datos", 210900, 152, 25000, 4.7, "Frink Smith",[
        {
            temaPrincipal: "Introduccion",
            clases: [
                {
                    subtema: "Interfaz Power BI Desktop",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "Interfaz Power BI Desktop",
                    duracion: 20,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
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
                },
                {
                    subtema: "Interfaz Power BI Desktop",
                    duracion: 20,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
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
                },
                {
                    subtema: "Interfaz Power BI Desktop",
                    duracion: 20,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "Interfaz Power BI Desktop",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        }
    
    ]);
    let curso2 = new CursoVirtual(1, "../assets/curso-2-html-js-css.jpg", "Aprende Html5, Javascript y CSS3 desde cero","Aprende HTML5, CSS3 y JavaScript: Curso Completo de Desarrollo Web desde Principiante hasta Avanzado", "Online", "Desarrollo web", 323000, 200, 40000, 4.7, "Javier Gonzalez",[
        {
            temaPrincipal: "Introduccion",
            clases: [
                {
                    subtema: "html parte 1",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "html parte 2",
                    duracion: 20,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "html part 3",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        },
        {
            temaPrincipal: "Unidad 1",
            clases: [
                {
                    subtema: "css part 1",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "css part 2",
                    duracion: 20,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "css part 3",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        },
        {
            temaPrincipal: "Unidad 2",
            clases: [
                {
                    subtema: "js parte 1",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "js parte 2",
                    duracion: 20,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "js parte 3",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        }
    ]);
    
    let curso3 = new CursoPresencial(2, "../assets/curso-3-pandas.jpg", "Curso Python: Manejo de datos con Pandas","Maneja y grafica datos utilizando los módulos mas utilizados en el mundo del Data Science", "Presencial", "Analisis de datos", 156982, 40, 15000, 4.7, "Leandro Martinez",[
        {
            Titulo: "Introduccion", 
            tema:["Introducción a la programación.", "Estructura general de un algoritmo.", "Diseño de Algoritmos."]
    
        },
        {
            Titulo: "Unidad 1 - Introducción al Lenguaje Pythom.", 
            tema:["Historia, características y aplicaciones.", "Entorno de desarrollo (IDE), librerías básicas", " Variables, tipos de datos, operadores, comentarios.", "Función print(), función input()."]
    
        },
        {
            Titulo: "Unidad 2",
            tema: ["Condicionales: if, else, elif.", "Bucles: for, while.", "Listas: Creación, acceso, modificación, métodos.", "Tuplas: Creación, acceso, inmutabilidad"]
        }
    ]);
    
    let curso4 = new CursoVirtual(3, "../assets/curso-4-angular.jpg", "Aprende Angular desde cero a experto","Signals, componentes, directivas, servicios, mapas, JWT, autenticación, despliegues, mongo, Git, GitHub y mucho más", "Online", "Desarrollo web", 345222, 52, 89000, 4.7, "Geraldine Keller",[
        {
            temaPrincipal: "Introduccion",
            clases: [
                {
                    subtema: "Angular 1",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "Angular 2",
                    duracion: 20,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "Angular 3",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        },
        {
            temaPrincipal: "Unidad 1",
            clases: [
                {
                    subtema: "Angular 4",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "Angular 5",
                    duracion: 20,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "Angular 6",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        },
        {
            temaPrincipal: "Unidad 2",
            clases: [
                {
                    subtema: "Angular parte avanzada",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "Angular con typescript",
                    duracion: 20,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "Angular integrando backend Springboot",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        }
    ]);
    let curso5 = new CursoVirtual(4, "../assets/curso-5-hacking.jpg", "Curso Ethical Hacking y Ciberseguridad","Aprende Hacking Ético y Ciberseguridad de manera práctica, ¡conviértete en un experto en Hacking Ético y Ciberseguridad!", "Online", "Ciberseguridad", 456744, 220, 90000, 4.7, "Pablo Lopez",[
        {
            temaPrincipal: "Introduccion",
            clases: [
                {
                    subtema: "Los 3 pilares de la ciberseguridad",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "zero trust parte 1",
                    duracion: 20,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "zero trust part 2",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        },
        {
            temaPrincipal: "Unidad 1",
            clases: [
                {
                    subtema: "Kali Linux part 1",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "Kali Linux part 2",
                    duracion: 20,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "Kali Linux part 3",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        },
        {
            temaPrincipal: "Unidad 2",
            clases: [
                {
                    subtema: "SQL- Inyeccion",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "Metasploit",
                    duracion: 20,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "Metasploit part 2",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        }
    ]);
    let curso6 = new CursoPresencial(5, "../assets/curso-6-java.jpg", "Curso Completo de Java Desde Cero","Aprende con el mejor curso Java de cero con las mejores prácticas POO, Java EE 9, CDI, JPA, EJB, JSF, Web Services, JAAS", "Presencial", "Desarrollo web", 789900, 300, 99000, 4.7, "Juan Benitez", [
        {
            Titulo:"Introduccion",
            tema: ["Introducción a la programación.","Estructura general de un algoritmo.", "Diseño de Algoritmos.", "Estructuras Algorítmicas. Secuenciales. Condicionales. Cíclicas. Repetitivas."]
        },
        {
            Titulo:"Unidad 1 - Introducción al Lenguaje JAVA.",
            tema: ["Estructura básica de un programa Java:","Sintaxis básica: Variables, tipos de datos, operadores, comentarios.", "Entrada y salida: Scanner, System.out.println().", "Condicionales: if, else if, switch.", "Bucles: for, while, do-while."]
        },
        {
            Titulo:"Unidad 2 - Conceptos Fundamentales de Programación Orientada a Objetos (POO)",
            tema: ["Clases y objetos: Creación, atributos, métodos.","Encapsulación: Modificadores de acceso (public, private, protected).", "Herencia: Clases base, clases derivadas, sobreescritura de métodos.", "Polimorfismo: Sobrecarga de métodos."]
        }
    ]);
    
    let curso7 = new CursoVirtual(6, "../assets/curso-7-docker.jpg", "Curso Docker de Principiante a Experto","Aprende desde los fundamentos, arquitectura, hasta despliegue de aplicaciones con multiples contenedores", "Online", "DevOps", 250000, 100, 66000, 4.7, "Bart Simpson", [
        {
            temaPrincipal: "Introduccion",
            clases: [
                {
                    subtema: "docker inicial 1",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "docker inicial 2",
                    duracion: 20,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "docker inical 3",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        },
        {
            temaPrincipal: "Unidad 1",
            clases: [
                {
                    subtema: "docker intermedio 1",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "docker 2",
                    duracion: 20,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "docker 3",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        },
        {
            temaPrincipal: "Unidad 2",
            clases: [
                {
                    subtema: "docker avanzado",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "Docker avanzado 1",
                    duracion: 20,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "Docker avanzado 2",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        }
    ]);
    let curso8 = new CursoVirtual(7, "../assets/curso-8-jest.jpg", "Curso Test Driven Development con Jest","Mejora tus habilidades en React usando TDD - Jest, React Testing Library, MSW, React Router, React Query, Hooks y más!", "Online", "Testing QA", 766900, 100, 90000, 4.7, "Homero Simpson",[
        {
            temaPrincipal: "Introduccion",
            clases: [
                {
                    subtema: "teoria testing 1",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "teoria testing 2",
                    duracion: 20,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "teoria testing 3",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        },
        {
            temaPrincipal: "Unidad 1",
            clases: [
                {
                    subtema: "js parte 1",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "js part 2",
                    duracion: 20,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "js part 3",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        },
        {
            temaPrincipal: "Unidad 2",
            clases: [
                {
                    subtema: "jest 1",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "jest 2",
                    duracion: 20,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    subtema: "jest 3",
                    duracion: 10,
                    url_video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        }
    ]);
    
    let cursoList = [curso1, curso2, curso3, curso4, curso5, curso6, curso7, curso8];
    
    localStorage.setItem("curso", JSON.stringify(cursoList));  //persisto los datos de cada curso en localstorage
    
}