import { buscarEntidadEnLocalStorage } from "./ayudante.js";

const formulario =  document.querySelector(".js-formulario-login");

formulario.addEventListener("submit", (event) =>{
    event.preventDefault();
    loguearUsuario();
});

function loguearUsuario() {
    
   let emailIngresado = document.getElementById("mail").value;
    let contraseniaIngresada = document.getElementById("password").value;
    let mensajeError;
    let usuarioLogueado = buscarUsuario(emailIngresado, contraseniaIngresada);
    console.log(usuarioLogueado);

    if (usuarioLogueado == null) {
        mensajeError = "<p>Mail y/o contraseña incorrecta.</p>";
        document.getElementById("mensaje").innerHTML = mensajeError;
        return;
    } else {
        guardarUsuarioLogueadoSessionStorage(usuarioLogueado);
        mensajeError = " ";
        document.getElementById("mensaje").innerHTML = mensajeError;
        formulario.action = '../index.html';
        formulario.submit();
    }

}

function buscarUsuario(email, contrasenia) {
    let storageUsuarios = buscarEntidadEnLocalStorage("usuario");

    if (JSON.stringify(storageUsuarios) == JSON.stringify([])) {
        return null;

    } else {
        for (let i = 0; i < storageUsuarios.length; i++) {
            if (storageUsuarios[i].mail == email && storageUsuarios[i].pass == contrasenia) {
                return storageUsuarios[i];
            }
        }
        return null;
    }
}

function guardarUsuarioLogueadoSessionStorage(unUsuario) {
    sessionStorage.setItem("usuarioLogueado", JSON.stringify(unUsuario));
}

