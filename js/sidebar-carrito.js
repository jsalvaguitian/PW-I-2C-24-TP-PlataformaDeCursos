import { buscarEntidadEnLocalStorage, buscarEntidadEnSessionStorage } from "./ayudante.js";
import { Carrito } from "./ClaseCarrito.js"


let btnCarrito = document.querySelector(".header__principal-carrito");
let sidebar = document.querySelector(".carrito-sidebar");

/////
estiloSidebar();
let contadorPresencial = 0; // sirve para que ponga los inscriptos en el curso presencial correcto
/////


const eliminarCursoDelCarritoSide = (index) => {
    let carrito = buscarEntidadEnSessionStorage("carrito");
    let textoCarrito = document.querySelector(".texto-carrito");
    console.log("estoy dentro de eliminar");
    if (carrito && carrito.cursos_a_comprar) {
        let modalidad = carrito.cursos_a_comprar[index].curso.modalidad;
        console.log("estoy dentro del if final");
        if (modalidad == "Online") {
            const precioCursoAEliminar = carrito.cursos_a_comprar[index].curso.precio;
            carrito.cursos_a_comprar.splice(index, 1); //eliminar el indice que le doy 
            carrito.cantidad_total -= 1;
            carrito.precio_total -= precioCursoAEliminar;

        }else{
            const precioCursoAEliminar = carrito.cursos_a_comprar[index].curso.precio * carrito.cursos_a_comprar[index].curso.inscriptos.length;
            carrito.cantidad_total -= carrito.cursos_a_comprar[index].curso.inscriptos.length;
            carrito.cursos_a_comprar.splice(index, 1); //eliminar el indice que le doy 
            carrito.precio_total -= precioCursoAEliminar;
        }

    }

    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    textoCarrito.innerHTML = carrito.cantidad_total;//actualizo el contadorTotal
    actualizarSidebar();
}
const eliminarGiftCardDelCarritoSide = (index) => {
    let carrito = buscarEntidadEnSessionStorage("carrito");
    let textoCarrito = document.querySelector(".texto-carrito");
    if (carrito && carrito.gift_card) {
        const precioGiftCardAEliminar = carrito.gift_card[index].monto;
        carrito.gift_card.splice(index, 1);
        carrito.cantidad_total -= 1;
        carrito.precio_total -= precioGiftCardAEliminar
    }

    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    textoCarrito.innerHTML = carrito.cantidad_total;//actualizo el contadorTotal
    actualizarSidebar();
}

//mostrar-ocultar sidebar
btnCarrito.addEventListener("click", () => {
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
    } else {
        sidebar.style.display = 'none';
    }

});
export function actualizarSidebar() {
    //preguntar si se encuentra el carrito (se encuentra si el usuario esta logueado) o esta vacio

    if (sessionStorage.getItem("usuarioLogueado") == null) {
        let mensajesCarrito = document.querySelectorAll(".carrito-mensaje");

        mensajesCarrito.forEach(mensaje => {
            mensaje.style.display = "block";
        })


    } else {
        if (sessionStorage.getItem("carrito") == null) {
            sessionStorage.setItem("carrito", JSON.stringify(new Carrito()));
        }
        let carrito = buscarEntidadEnSessionStorage("carrito");
        let mensajeCarritoVacio = document.querySelector(".msj-logueado");

        if (carrito.cantidad_total == 0) {
            mensajeCarritoVacio.style.display = "block";
            let carritoList = document.querySelector(".carrito-lista-producto");
            carritoList.innerHTML = "";
        } else {

            let carritoList = document.querySelector(".carrito-lista-producto")
            //creo el encabezado
            carritoList.innerHTML = `<p class="carrito-columna1-producto-header">Producto</p>
                <p class="carrito-columna2-cant-header">Cantidad</p>
                <p class="carrito-columna3-precio-header">Precio</p>
                <p class="carrito-columna4-eliminar-header"></p>`;

            //creo fila curso de carrito
            if (carrito.cursos_a_comprar.length != 0) {
                for (let i = 0; i < carrito.cursos_a_comprar.length; i++) {

                    if (carrito.cursos_a_comprar[i].curso.modalidad === "Online") {



                        carritoList.innerHTML += `  
                        <div class="carrito-columna1-curso-comprar">
                            <div class="carrito-img-curso">
                                <img src="${carrito.cursos_a_comprar[i].curso.imagen_url}" alt="">
                            </div>
                            <div class="carrito-text-curso">
                                <h4 class="carrito-nombre-curso">${carrito.cursos_a_comprar[i].curso.nombre}</h4>
                                <div class="carrito-desc-curso">
                                    <p class="formato-curso">Formato:<span>${carrito.cursos_a_comprar[i].curso.modalidad}</span></p>
                                    <p class="hora-curso">Hora: <span>${carrito.cursos_a_comprar[i].curso.horas}</span></p>
                                    <p>Prof: <span class="prof-curso">${carrito.cursos_a_comprar[i].curso.profNombre}</span></p>
                                </div>
                            </div>
                        </div>

                        <div class="carrito-columna2-cant">
                            <p>${carrito.cursos_a_comprar[i].cantidad}</p>
                        </div>
                        <div class="carrito-columna3-precio">
                            <p>$ <span>${carrito.cursos_a_comprar[i].curso.precio}</span></p>
                        </div>
                        <div class="carrito-columna4-">
                            <button class="btn-carrito-eliminar btn-delete-cursos" indexc="${i}"><span class="material-symbols-outlined">
                                    delete
                                </span></button>
                        </div>`

                    }

                    if (carrito.cursos_a_comprar[i].curso.modalidad === "Presencial") {
                        contadorPresencial++;

                        let inscriptos = [];
                        inscriptos = carrito.cursos_a_comprar[i].curso.inscriptos;
                        let cantidad_inscriptos = inscriptos.length;




                        carritoList.innerHTML += `  
                        <div class="carrito-columna1-curso-comprar">
                            <div class="carrito-img-curso">
                                <img src="${carrito.cursos_a_comprar[i].curso.imagen_url}" alt="">
                            </div>
                            <div class="carrito-text-curso">
                                <h4 class="carrito-nombre-curso">${carrito.cursos_a_comprar[i].curso.nombre}</h4>
                                <div class="carrito-desc-curso">
                                    <p class="formato-curso">Formato:<span>${carrito.cursos_a_comprar[i].curso.modalidad}</span></p>
                                    <p class="hora-curso">Hora: <span>${carrito.cursos_a_comprar[i].curso.horas}</span></p>
                                    <p>Prof: <span class="prof-curso">${carrito.cursos_a_comprar[i].curso.profNombre}</span></p>
                                    <p class="cantidad-inscriptos-curso">Cantidad de inscriptos: <span>${cantidad_inscriptos}</span></p>
                                    <div class="inscriptos-list i${contadorPresencial}">
                                        <p class="titulo-inscriptos"><strong>Inscriptos:</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="carrito-columna2-cant">
                            <p>${carrito.cursos_a_comprar[i].cantidad}</p>
                        </div>
                        <div class="carrito-columna3-precio">
                            <p>$ <span>${carrito.cursos_a_comprar[i].curso.precio*cantidad_inscriptos}</span></p>
                        </div>
                        <div class="carrito-columna4-">
                            <button class="btn-carrito-eliminar btn-delete-cursos" indexc="${i}"><span class="material-symbols-outlined">
                                    delete
                                </span></button>
                        </div>`

                        const inscriptos_list = document.querySelector('.inscriptos-list.i' + contadorPresencial);
                        //inscriptos_list.innerHTML = ""; 

                        inscriptos.forEach((inscripto, index) => {
                            let inscripto_data = document.createElement("div");
                            inscripto_data.className = 'inscripto-data';
                            inscripto_data.innerHTML = `
                            <p class="titulo-inscripto-data"><strong>Inscripto ${index + 1}:</strong></p>
                            <p>Nombre: ${inscripto.nombre}, Apellido: ${inscripto.apellido}, DNI: ${inscripto.dni}, Email: ${inscripto.email}, 
                            Telefono: ${inscripto.telefono}</p>
                            `;

                            inscriptos_list.appendChild(inscripto_data);
                        });

                    }

                }

            }

            if (carrito.gift_card.length != 0) {
                for (let i = 0; i < carrito.gift_card.length; i++) {
                    carritoList.innerHTML += `<div class="carrito-columna1-curso-comprar">
                    <div class="carrito-img-curso">
                        <img src="../assets/giftcard.jpg" alt="">
                    </div>
                    <div class="carrito-text-curso">
                        <h4 class="carrito-nombre-curso">GiftCard</h4>
                        <div class="carrito-desc-curso">
                            <p class="destinatario-nombre">Para:<span>${carrito.gift_card[i].nombreDestinatario}</span></p>
                            <p class="destinatario-mail">Mail destinatario:<span>${carrito.gift_card[i].mailDestinatario}</span></p>
                        </div>
                    </div>
                </div>

                <div class="carrito-columna2-cant">
                    <p>1</p>
                </div>
                <div class="carrito-columna3-precio">
                    <p>$ <span>${carrito.gift_card[i].monto}</span></p>
                </div>
                <div class="carrito-columna4-">
                    <button class="btn-carrito-eliminar btn-delete-giftcard" indexg="${i}"><span class="material-symbols-outlined">
                            delete
                        </span></button>
                </div>`;

                }
            }
            /*data-indeg="${i}" */
            sidebar.innerHTML += `<a href="../pages/carrito.html" class="a_irCarrito">Ir al carrito </a>`

        }
        const btnEliminar = document.querySelectorAll(".btn-delete-cursos");
        const btnEliminarGift = document.querySelectorAll(".btn-delete-giftcard");

        if (btnEliminar != null) {
            btnEliminar.forEach((btn) => {
                btn.addEventListener("click", (event) => {
                    const index = btn.getAttribute("indexc");
                    // const indexG = event.target.dataset.indeg;
                    //const indexG = btn.getAttribute("indexg")
                    console.log(index);
                    if (index !== undefined || index !== null) {
                        console.log("estoy dentro de aca");
                        eliminarCursoDelCarritoSide(index);
                        location.reload();
                    }/*else if (indexG !== undefined  || indexG !==null ) {
                        eliminarGiftCardDelCarritoSide(indexG);
                    }*/
                });
            });

        }
        if (btnEliminarGift != null) {
            btnEliminarGift.forEach((btn) => {
                btn.addEventListener("click", (event) => {
                    //const index = btn.getAttribute("indexc");
                    // const indexG = event.target.dataset.indeg;
                    const indexG = btn.getAttribute("indexg")
                    console.log(indexG);
                    /*if (index !== undefined || index !==null) {
                        console.log("estoy dentro de aca");
                        eliminarCursoDelCarritoSide(index);
                        location.reload();
                    }*/
                    if (indexG !== undefined || indexG !== null) {
                        eliminarGiftCardDelCarritoSide(indexG);
                    }
                });
            });

        }

    }
}
actualizarSidebar();



function estiloSidebar() {
    sidebar.style.width = "98%"
}
