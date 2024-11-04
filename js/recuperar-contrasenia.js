const btnEnviar = document.querySelector('.enviar').addEventListener('click', recuperarContraseña);
const msjExito= "Le enviaremos un correo para reestablecer su contrasenia, revise la casilla de spam.";
const msjError= "No existe cuenta asociada al email ingresado.";

function recuperarContraseña(event){
    event.preventDefault();
    const mail = document.getElementById('email').value;
    const listaUsuarios= JSON.parse(localStorage.getItem('usuario')) || [];
    const usuario = listaUsuarios.find(usuario => usuario.mail === mail);
    const msj = usuario ? msjExito : msjError;
    console.log("mail"+mail);
    mostrarPopUp(msj);
}
function mostrarPopUp(msj) {
    const modal = document.getElementById('popupModal');
    const mensaje = document.getElementById('modal-contenedor-info');
    modal.style.display = 'block';
    mensaje.innerHTML=`<p>${msj}</p>`;

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
    document.getElementById('acceptButton').onclick = function() {
        modal.style.display = 'none';
        document.getElementById('email').value = '';
    };
}
