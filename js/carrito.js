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
    console.log("la cant de cursos es "+cantidadCursosCarrito);
    console.log(JSON.stringify(carritoDB));
    
    let subtotal = 0; // Inicializa subtotal

    sectionMostrarCarrito.innerHTML = ""; 
    carritoDB.cursos_a_comprar.forEach((item,index) => {
        const nuevaTarjeta = document.createElement('div');
        nuevaTarjeta.className = "producto";

        nuevaTarjeta.innerHTML =
            `<img src="../${item.curso.imagen_url}" alt="Imagen del curso ${item.curso.nombre}">
            <div class="producto-info">
                <p class="producto-nombre">${item.curso.nombre}</p>
                <p class="producto-cantidad">Cantidad: ${item.cantidad}</p>
                <p class="producto-precio">$${item.curso.precio.toFixed(2)}</p>
                <button class="btn-eliminar" data-index="${index}">X</button>
            </div>`;
            console.log(nuevaTarjeta);

            subtotal += item.curso.precio * item.cantidad;

            sectionMostrarCarrito.appendChild(nuevaTarjeta);
    });
    // Mi resu de carrito
    const carritoResumen = document.createElement('div');
    carritoResumen.className = "carrito-resumen";
    carritoResumen.innerHTML = `
        <p class="total">Total: $${subtotal.toFixed(2)}</p>
        <a href="./medio_pago.html" class="btn-siguiente">Siguiente</a>
    `;

    sectionMostrarCarrito.appendChild(carritoResumen); // Agregaal final

    // Agregar evento para eliminar cursos
    const btnEliminar = document.querySelectorAll(".btn-eliminar");
    btnEliminar.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const index = event.target.dataset.index; //al definir el class con el data-, puedo recuperar del evento al hacer click la clase del elemento que realizo el ckick
            eliminarCursoDelCarrito(index);
        });
    });

}

function eliminarCursoDelCarrito(index) {
    let carrito = ayudante.buscarEntidadEnSessionStorage("carrito");

    if (carrito && carrito.cursos_a_comprar) {
        const precioCursoAEliminar = carrito.cursos_a_comprar[index].curso.precio;
        carrito.cursos_a_comprar.splice(index, 1); //eliminar el indice que le doy 
        carrito.cantidad_total -= 1;
        carrito.precio_total -= precioCursoAEliminar; 
    }

    sessionStorage.setItem("carrito", JSON.stringify(carrito));

    hacerDinamicoLosCursosDestacados();
}
