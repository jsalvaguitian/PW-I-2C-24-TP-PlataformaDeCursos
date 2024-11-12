import * as ayudante from "./ayudante.js";
import * as validaciones from "./validar-medio-pago.js";

let carrito = JSON.parse(sessionStorage.getItem("carrito"));
let botonCarrito = document.querySelector(".header__principal-carrito");
let textoCarrito = botonCarrito.querySelector(".texto-carrito");
textoCarrito.innerHTML = carrito.cantidad_total;

let nombre = document.getElementById('firstName');
let apellido = document.getElementById('lastName');
let mail = document.getElementById('email');

let listaUsuarios = ayudante.buscarEntidadEnLocalStorage("usuario");
let usuarioLogueado = ayudante.buscarEntidadEnSessionStorage("usuarioLogueado");
console.log(listaUsuarios);
console.log(JSON.stringify(usuarioLogueado));

if (usuarioLogueado) {
    nombre.value = usuarioLogueado.nombre || ''; 
    apellido.value = usuarioLogueado.apellido || '';
    mail.value = usuarioLogueado.mail || '';
    mail.style.pointerEvents = "none"; 
    mail.style.backgroundColor = "#f0f0f0"; 
    nombre.style.pointerEvents = "none"; 
    nombre.style.backgroundColor = "#f0f0f0"; 
    apellido.style.pointerEvents = "none"; 
    apellido.style.backgroundColor = "#f0f0f0"; 

}

document.getElementById('agregar-tarj').addEventListener('click',(event)=>{
    event.preventDefault();
    if(validaciones.validacionesMp()){
        agregarTarjeta();
    }
});
document.getElementById('guardar').addEventListener('click',()=>{
    window.location.href = '../index.html';
});

function agregarTarjeta(){
    
        // Recuperar val
    let numeroTarjeta = document.getElementById('cardNumber').value;
    let fechaVenc = document.getElementById('expiryDate').value;
    let cvv = document.getElementById('cvv').value;
    let nombreTarjeta = document.getElementById('cardName').value;

    // Crea datos de la tarjeta
    const tarjeta = {
        numeroTarjeta: numeroTarjeta,
        fechaVenc: fechaVenc,
        cvv: cvv,
        nombreTarjeta: nombreTarjeta
    };
    console.log(`agregar tarj${tarjeta}`);
    // Obtener usuario del local
    let mailUsuarioLogueadoLS = usuarioLogueado.mail;
    let usuario = listaUsuarios.find(user => user.mail === mailUsuarioLogueadoLS);
    console.log("mail "+ mailUsuarioLogueadoLS);
    console.log("user "+ usuario);
    if(usuario){
        if (!usuario.metodoDePago) {
            usuario.metodoDePago = [];
        }
        usuario.metodoDePago.push(tarjeta);
        usuarioLogueado.metodoDePago.push(tarjeta);
        sessionStorage.setItem('usuarioLogueado', JSON.stringify(usuarioLogueado));
        localStorage.setItem('usuario', JSON.stringify(listaUsuarios));

        // Limpia los inputs después de guardar
        document.getElementById('cardNumber').value = '';
        document.getElementById('expiryDate').value = '';
        document.getElementById('cvv').value = '';
        document.getElementById('cardName').value = '';
    }
    
    
}



 