let carrito = JSON.parse(sessionStorage.getItem("carrito"));
let botonCarrito = document.querySelector(".header__principal-carrito");
let textoCarrito = botonCarrito.querySelector(".texto-carrito");
textoCarrito.innerHTML = carrito.cantidad_total;
