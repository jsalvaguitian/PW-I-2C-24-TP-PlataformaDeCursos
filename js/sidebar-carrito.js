import { buscarEntidadEnLocalStorage, buscarEntidadEnSessionStorage } from "./ayudante.js";
import { Carrito } from "./ClaseCarrito.js"


let btnCarrito = document.querySelector(".header__principal-carrito");
let sidebar = document.querySelector(".carrito-sidebar");

const eliminarCursoDelCarritoSide = (index) => {
    let carrito = buscarEntidadEnSessionStorage("carrito");
    let textoCarrito = document.querySelector(".texto-carrito");
    console.log("estoy dentro de eliminar");
    if (carrito && carrito.cursos_a_comprar) {
        console.log("estoy dentro del if final");
        const precioCursoAEliminar = carrito.cursos_a_comprar[index].curso.precio;
        carrito.cursos_a_comprar.splice(index, 1); //eliminar el indice que le doy 
        carrito.cantidad_total -= 1;
        carrito.precio_total -= precioCursoAEliminar;
    }

    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    textoCarrito.innerHTML = carrito.cantidad_total;//actualizo el contadorTotal
    actualizarSidebar();
}
const eliminarGiftCardDelCarritoSide = (index) => {
    console.log("se elimina la giftcard: " + index);
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
            carritoList.innerHTML="";
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
                    carritoList.innerHTML += `  <div class="carrito-columna1-curso-comprar">
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
                    <button class="btn-carrito-eliminar" indexc="${i}"><span class="material-symbols-outlined">
                            delete
                        </span></button>
                </div>`

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
                    <button class="btn-carrito-eliminar" data-indeg="${i}"><span class="material-symbols-outlined">
                            delete
                        </span></button>
                </div>`;

                }
            }

            sidebar.innerHTML += `<a href="../pages/carrito.html" class="a_irCarrito">Ir al carrito </a>`

        }
        const btnEliminar = document.querySelectorAll(".btn-carrito-eliminar");
        btnEliminar.forEach((btn) => {
            btn.addEventListener("click", (event) => {
                const index = btn.getAttribute("indexc");
                const indexG = event.target.dataset.indeg;
                console.log(index);
                if (index !== undefined) {
                    console.log("estoy dentro de aca");
                    eliminarCursoDelCarritoSide(index);
                    location.reload();
                } else if (indexG !== undefined) {
                    eliminarGiftCardDelCarritoSide(indexG);
                }
            });
        });
    }
}
actualizarSidebar();

