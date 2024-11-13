import * as ayudante from "./ayudante.js";

hacerDinamicoLosCursosDestacados();

function hacerDinamicoLosCursosDestacados() {
    const sectionMostrarCarrito = document.querySelector(".carrito-container");

    // Mi Título del carrito
    const tituloCarrito = document.createElement("h1");
    tituloCarrito.textContent = "Tu Carrito de Compras";
    sectionMostrarCarrito.prepend(tituloCarrito); //alinicio 

    const carritoDB = ayudante.buscarEntidadEnSessionStorage("carrito");
    const cantidadCursosCarrito = carritoDB.cantidad_total;
    console.log("la cant de cursos es " + cantidadCursosCarrito);

    let subtotal = 0; // Inicializa subtotal
    let cantidadGift = 1;

    sectionMostrarCarrito.innerHTML = "";
    if (carritoDB != []) {
        if (carritoDB.cursos_a_comprar.length != 0) {
            carritoDB.cursos_a_comprar.forEach((item, index) => {
                if (item.curso.modalidad == "Online") {
                    const nuevaTarjeta = document.createElement('div');
                    nuevaTarjeta.className = "producto";
                    nuevaTarjeta.innerHTML =
                        `<img src="../${item.curso.imagen_url}" alt="Imagen del curso ${item.curso.nombre}">
                    <div class="producto-info">
                        <p class="producto-nombre">${item.curso.nombre}</p>
                        <p class="producto-cantidad">Cantidad: ${item.cantidad}</p>
                        <p class="producto-precio">$${item.curso.precio.toFixed(2)}</p>
                        <button class="btn-eliminar btn-eliminar-cursos" data-index="${index}">X</button>
                    </div>`;

                    subtotal += item.curso.precio * item.cantidad;

                    sectionMostrarCarrito.appendChild(nuevaTarjeta);
                }else{
                    const nuevaTarjeta = document.createElement('div');
                    nuevaTarjeta.className = "producto";
                    nuevaTarjeta.innerHTML =
                        `<img src="../${item.curso.imagen_url}" alt="Imagen del curso ${item.curso.nombre}">
                    <div class="producto-info">
                        <p class="producto-nombre">${item.curso.nombre}</p>
                        <p class="producto-cantidad">Cantidad: ${item.cantidad}</p>
                        <p class="producto-precio">$${(item.curso.precio * item.cantidad).toFixed(2)}</p>
                        <button class="btn-eliminar btn-eliminar-cursos" data-index="${index}">X</button>
                    </div>`;

                    subtotal += item.curso.precio * item.cantidad;

                    sectionMostrarCarrito.appendChild(nuevaTarjeta);
                }

            });

        }
        if (carritoDB.gift_card.length != 0) {
            carritoDB.gift_card.forEach((item, index) => {
                const nuevaTarjeta = document.createElement('div');
                nuevaTarjeta.className = "producto";
                nuevaTarjeta.innerHTML =
                    `<img src="../assets/giftcard.jpg" alt="Imagen giftcard">
                    <div class="producto-info">
                        <p class="producto-nombre">Giftcard para ${item.nombreDestinatario}</p>
                        <p class="producto-cantidad">Cantidad: ${cantidadGift}</p>
                        <p class="producto-precio">$${item.monto.toFixed(2)}</p>
                        <button class="btn-eliminar btn-eliminar-gift" data-index="${index}">X</button>
                    </div>`;

                subtotal += item.monto * cantidadGift;

                sectionMostrarCarrito.appendChild(nuevaTarjeta);
            });

        }

    }

    // Mi resu de carrito
    const carritoResumen = document.createElement('div');
    carritoResumen.className = "carrito-resumen";
    carritoResumen.innerHTML = `
        <p class="total">Total: $${subtotal.toFixed(2)}</p>
        <a href="./medio_pago.html" class="btn-siguiente">Siguiente</a>
    `;

    sectionMostrarCarrito.appendChild(carritoResumen); // Agregaal final

    // Agregar evento para eliminar cursos
    const btnEliminar = document.querySelectorAll(".btn-eliminar-cursos");
    btnEliminar.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const index = event.target.dataset.index; //al definir el class con el data-, puedo recuperar del evento al hacer click la clase del elemento que realizo el ckick
            eliminarCursoDelCarrito(index);
        });
    });

    const btnEliminarGift = document.querySelectorAll(".btn-eliminar-gift");
    btnEliminarGift.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const index = event.target.dataset.index;
            eliminarGiftDelCarrito(index)
        })
    })

}

function eliminarGiftDelCarrito(index) {
    let carrito = ayudante.buscarEntidadEnSessionStorage("carrito");
    let textoCarrito = document.querySelector(".texto-carrito");
    if (carrito && carrito.gift_card) {
        const precioGiftCardAEliminar = carrito.gift_card[index].monto;
        carrito.gift_card.splice(index, 1);
        carrito.cantidad_total -= 1;
        carrito.precio_total -= precioGiftCardAEliminar
    }

    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    textoCarrito.innerHTML = carrito.cantidad_total;//actualizo el contadorTotal
    hacerDinamicoLosCursosDestacados();

}

function eliminarCursoDelCarrito(index) {
    let carrito = ayudante.buscarEntidadEnSessionStorage("carrito");
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

        } else {
            const precioCursoAEliminar = carrito.cursos_a_comprar[index].curso.precio * carrito.cursos_a_comprar[index].curso.inscriptos.length;
            carrito.cantidad_total -= carrito.cursos_a_comprar[index].curso.inscriptos.length;
            carrito.cursos_a_comprar.splice(index, 1); //eliminar el indice que le doy 
            carrito.precio_total -= precioCursoAEliminar;
        }

    }

    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    textoCarrito.innerHTML = carrito.cantidad_total;//actualizo el contadorTotal
    /* let carrito = ayudante.buscarEntidadEnSessionStorage("carrito");
 
     if (carrito && carrito.cursos_a_comprar) {
         const precioCursoAEliminar = carrito.cursos_a_comprar[index].curso.precio;
         carrito.cursos_a_comprar.splice(index, 1); //eliminar el indice que le doy 
         carrito.cantidad_total -= 1;
         carrito.precio_total -= precioCursoAEliminar; 
     }
 
     sessionStorage.setItem("carrito", JSON.stringify(carrito));*/

    hacerDinamicoLosCursosDestacados();
}
