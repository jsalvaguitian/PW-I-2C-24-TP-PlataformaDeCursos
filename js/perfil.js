import * as ayudante from "./ayudante.js";

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
}

document.getElementById('agregar-tarj').addEventListener('click',agregarTarjeta);
document.getElementById('guardar').addEventListener('click',()=>{
    window.location.href = '../index.html';
});

function agregarTarjeta(){
    // Recuperar val
    let numeroTarjeta = document.getElementById('cardNumber').value;
    let fechaVenc = document.getElementById('expiryDate').value;
    let cvv = document.getElementById('cvv').value;
    let nombreTarjeta = document.getElementById('cardName').value;

    // Crea un objeto con los datos de la tarjeta
    const tarjeta = {
        numeroTarjeta: numeroTarjeta,
        fechaVenc: fechaVenc,
        cvv: cvv,
        nombreTarjeta: nombreTarjeta
    };
    console.log(`agregar tarj${tarjeta}`);
    // Obtengo el usuario del local
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

 