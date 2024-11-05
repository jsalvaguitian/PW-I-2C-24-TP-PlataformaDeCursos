import { CursoPresencial } from "./ClaseCursoPresencial.js";
import { CursoVirtual } from "./ClaseCursoVirtual.js";

export function llenarDatosEnLaBBDDCursos(){
    let curso1 = new CursoVirtual(0,"Microsoft Power BI es uno de los programas con tecnologías de Business Intelligence más robusto en el mercado, y al mismo tiempo es uno de los más baratos ¡incluso gratuito! Cualquiera puede iniciar a desarrollar reportes con visualizaciones interactivas gratis. Si eres dueño de un negocio, gerente de un departamento, o simplemente tienes interés en analizar y dar seguimiento a tus actividades y objetivos, entonces este curso es para ti.",
        "../assets/curso-1-Microsoft-Power-BI.jpg", "Curso Power BI- Analisis de Datos y Business Intelligence",
        "Curso de Power BI en Español - Datos desde Excel, Dashboards, y DAX en Microsoft Power BI ¡Power BI Desktop es gratis!",
        "Online", "Analisis de datos", 210900, 152, 25000, 4.7, "Frink Smith","Soy un MBA, certificado como Microsoft Expert, y Project Manager por el PMI. Con vasta experiencia en Data Analysis y Business Intelligence, forma parte del equipo Udemy para contribuir con la misión de ayudar a individuos a lograr sus metas y perseguir sus sueños.",
        [
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
    
    ],"../assets/Frink2.png");
    let curso2 = new CursoVirtual(1,"Un curso paso a paso si deseas comenzar en el mundo de la Programación Web.En este curso aprenderás 10 Lenguajes y Tecnologías Web:HTML, CSS, SASS, Workflows, JavaScript, Fetch (Antes AJAX), PHP, POO - MVC, MySQL - SQL y API's. El Curso Incluye 4 proyectos finales, puedes ver los videos con los demos totalmente gratis!",
         "../assets/curso-2-html-js-css.jpg", "Aprende Html5, Javascript y CSS3 desde cero","Aprende HTML5, CSS3 y JavaScript: Curso Completo de Desarrollo Web desde Principiante hasta Avanzado", "Online", "Desarrollo web", 323000, 200, 40000, 4.7, "Javier Gonzalez","Soy diseñador y programador web desde hace más de 15 años.No te aburriré ni te contaré la típica historia de que soy programador desde los 6 años porque eso sería mentir.Empecé a los 18 años y la programación cambió mi vida.Aprendí con tutoriales en video, por eso creo en este formato de enseñanza; el problema es que muchos cursos hablaban con términos confusos, extraños y no creaban un proyecto real, es por eso que enseño Creando Proyectos Reales.",
         [
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
    ], "../assets/carl2.jpeg");
    
    let curso3 = new CursoPresencial(2,"En este curso, aprenderás cómo usar la biblioteca de Pandas y las herramientas para el análisis y la estructuración de datos. Vas a aprender sobre DataFrames, series, gráficos básicos, indexación, ordenamiento, agrupación, iteración, localización, apilación, etc.Todo esto te ayudará a trabajar con datos de manera muy efectiva, eficiente y práctica.El mercado está repleto de analistas competentes, ¡y sin estas herramientas siempre estarás por detrás de tu competencia!",
        "../assets/curso-3-pandas.jpg", "Curso Python: Manejo de datos con Pandas","Maneja y grafica datos utilizando los módulos mas utilizados en el mundo del Data Science", "Presencial", "Analisis de datos", 156982, 40, 15000, 4.7, "Leandro Martinez","Soy el fundador de Escuela Directa, una usina de contenido que promueve la educación ACCESIBLE para TODOS.Hasta los 42 años, mi profesión formal era la Psicología (con más de 20 años de experiencia clínica y especializado en Drogadependencias).Mi profesión me ha llevado a trabajar mucho en docencia y en especial con jóvenes.También soy Licenciado en Artes Plásticas, y me paso horas dibujando cómics, programando, o tomando fotos. He cantado en coros, he bailado en murgas, he militado en política, me apasiona la buena cocina, viajar mucho, participar en mi comunidad y tener mis sentidos siempre abiertos.",
        [
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
    ],"../assets/herbert2.jpeg");
    
    let curso4 = new CursoVirtual(3,"Este curso te ayudará a aprender Angular (la última versión) a profundidad mediante ejercicios y tareas que tú mismo harás. Partiendo de cero conocimiento de TypeScript hasta crear un sistema robusto de autenticación, uso de mapas, consumo de servicios y mucho más. Puntualmente tocamos estos temas.Este es un curso robusto y fuerte, que contiene todo lo que necesitarás para trabajar en Angular y poder desenvolverte como deseas en el Framework, eso incluye poder leer la documentación, errores y optimizaciones de código para mejorar la forma de escribir nuestras aplicaciones.", 
        "../assets/curso-4-angular.jpg", "Aprende Angular desde cero a experto","Signals, componentes, directivas, servicios, mapas, JWT, autenticación, despliegues, mongo, Git, GitHub y mucho más", "Online", "Desarrollo web", 345222, 52, 89000, 4.7, "Geraldine Keller","Soy un analista programador de sistemas de computo, con poco más de 19 años en el mundo del desarrollo de aplicaciones frontend y backend.Durante mis últimos años me he dedicado a la enseñanza en línea,  mientras trabajo en una empresa en Canadá.Me encanta enseñar y programar, son mis dos pasatiempos favoritos que a su vez, es mi trabajo.",[
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
    ],"../assets/lisa.jpeg");
    let curso5 = new CursoVirtual(4,"Lo primero que debes saber sobre este curso es que su enfoque es eminentemente práctico, el 95% de las horas del curso se corresponden con casos de uso reales en los que se muestra como llevar a cabo las técnicas de Hacking más populares mediante el uso de Kali Linux y las herramientas más utilizadas en la actualidad.", "../assets/curso-5-hacking.jpg", "Curso Ethical Hacking y Ciberseguridad","Aprende Hacking Ético y Ciberseguridad de manera práctica, ¡conviértete en un experto en Hacking Ético y Ciberseguridad!", "Online", "Ciberseguridad", 456744, 220, 90000, 4.7, "Pablo Lopez","Soy ingeniero informático por la Universidad de Salamanca, con un máster en seguridad de la información y de las comunicaciones por la Universidad Europea y doctorando en seguridad de la información e inteligencia artificial por la Universidad de Zaragoza. Su experiencia profesional abarca diferentes posiciones en el ámbito de la Ciberseguridad y de la la Inteligencia Artificial en compañías como Endesa, Telefónica/11paths o BBVA. Además, es profesor universitario en la UEM, en la UCLM y UCAM en diferentes postgrados relacionados con la Inteligencia Artificial y la seguridad de la información y ponente habitual en conferencias especializadas",
        [
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
    ],"../assets/lenny.png");
    let curso6 = new CursoPresencial(5,"Aprenderemos las mejores practicas en desarrollo utilizando programación orientado a objetos y patrones de diseños (GoF), recursividad, programación funcional, expresiones lambda y API stream de Java 8, hilos (threads), concurrencia, unit testing con JUnit 5, Mockito, Java EE 9 Web Servlets/JSP, Weld CDI, JPA/Hibernate, JavaServer Faces (JSF), PrimeFaces, AJAX, Enterprise JavaBeans (EJB), API RESTful (JAX-RS), Web Services SOAP (JAX-WS), Seguridad JAAS, Servidor de Aplicaciones JBoss Wildfly y mucho más.", "../assets/curso-6-java.jpg", "Curso Completo de Java Desde Cero","Aprende con el mejor curso Java de cero con las mejores prácticas POO, Java EE 9, CDI, JPA, EJB, JSF, Web Services, JAAS", "Presencial", "Desarrollo web", 789900, 300, 99000, 4.7, "Juan Benitez","Ingeniero informatico, durante mi carrera he trabajado en diferentes empresas de desarrollo y tecnologías TI, en diferentes cargos como desarrollador, líder de proyecto y arquitecto.Entusiasta de las nuevas tecnologías, gran parte de mi tiempo la dedico a la investigación y desarrollo, más de 25 años de experiencia desarrollando, aprendiendo y enseñando diversas tecnologías relacionadas al mundos de la programación y desarrollo de aplicaciones.",[
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
    ],"../assets/herbert2.jpeg");
    
    let curso7 = new CursoVirtual(6,"Este curso te dará las más que las bases para poder utilizar Docker de una forma productiva y funcional, aprenderemos mediante ejercicios prácticos y tareas. También cuenta con una sección introductoria a Kubernetes (K8s) para que adicionalmente puedas seguir explorando todo lo que el mundo de los contenedores ofrece.","../assets/curso-7-docker.jpg", "Curso Docker de Principiante a Experto","Aprende desde los fundamentos, arquitectura, hasta despliegue de aplicaciones con multiples contenedores", "Online", "DevOps", 250000, 100, 66000, 4.7, "Bart Simpson","Me encanta enseñar y programar, son mis dos pasatiempos favoritos que a su vez, es mi trabajo.",
    [
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
    ], "../assets/Bart_Simpso2.png");
    let curso8 = new CursoVirtual(7,"Aprende a escribir código de alta calidad y confiable con Jest. En este curso, dominarás las técnicas de TDD para crear pruebas unitarias sólidas y automatizadas. Desde los conceptos básicos hasta estrategias avanzadas, te guiaremos paso a paso para mejorar tus habilidades en JavaScript y React.", "../assets/curso-8-jest.jpg", "Curso Test Driven Development con Jest","Mejora tus habilidades en React usando TDD - Jest, React Testing Library, MSW, React Router, React Query, Hooks y más!", "Online", "Testing QA", 766900, 100, 90000, 4.7, "Homero Simpson","Un apasionado del desarrollo de software que lleva años perfeccionando sus habilidades en TDD. Su experiencia en Jest te guiará a través de los conceptos y prácticas más importantes para escribir código de alta calidad.",[
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
    ],"../assets/homer2.png");
    
    let cursoList = [curso1, curso2, curso3, curso4, curso5, curso6, curso7, curso8];
    
    localStorage.setItem("curso", JSON.stringify(cursoList));  //persisto los datos de cada curso en localstorage
    
}