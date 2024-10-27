document.querySelector(".js-btn-iniciar-sesion").addEventListener('click', loguearUsuario);

function loguearUsuario() {
    let emailIngresado = document.getElementById("mail").value;
    let contraseniaIngresada = document.getElementById("password").value;
    let mensajeError;
    let usuarioLogueado = buscarUsuario(emailIngresado, contraseniaIngresada);

    if (usuarioLogueado != null) {
        guardarUsuarioLogueadoSessionStorage(usuarioLogueado);
        mensajeError = " ";
        document.getElementById("mensaje").innerHTML = mensajeError

    } else {
        mensajeError = "<p>Mail y/o contraseña incorrecta.</p>";
        document.getElementById("mensaje").innerHTML = mensajeError;
    }

}

function buscarUsuario(email, contrasenia) {
    let storageUsuarios = buscarEntidadEnLocalStorage("usuario");

    if (storageUsuarios == []) {
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

function buscarEntidadEnLocalStorage(entidad) {
    if (localStorage.getItem(entidad) == null) {
        localStorage.setItem(entidad, [])
        return [];
    } else if (localStorage.getItem(entidad) == []) {
        return [];

    } else return JSON.parse(localStorage.getItem(entidad));
}