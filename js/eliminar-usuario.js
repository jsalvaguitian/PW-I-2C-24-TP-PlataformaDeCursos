//recuperar del local storage lalisyta de usuaris
//rcuperar del local storage el usuario
/*
1- cuando precione eñliminar cuenta
2- aparece un popup que diuga "seguro que desea eliminar la cuenta"
3- al presionar aceptar 
    3-1 elimina la cuenta del local storage
    PROXIMAMENTE
    3-2 elimina la cuenta del sesion storage y que me cierre sesion automaticamente
4- sino cancelar

-------
html-> 
1-boton eliminar cuenta
2-modal del popup

csss
1- css del modal

js
0-preciona click en boton eliminar cuenta
1-eventlistener click en eliminar
3-muestra popup
4-presiona aceptar
    1-addeventlistener
    2-obtener usuarios del local storage
    3- obtener usuario actual del sesionstorage
    4- fitrar la lista parseada del localstorage con el user del sesionstorage
    5-cuando lo encuentre eliminar del localstorage
*/


document.querySelector('#eliminarcuenta').addEventListener('click',mostrarPopUP);
document.querySelector('#cancelButton').addEventListener('click',()=>{
    const modal = document.getElementById('popupModal');
    modal.style.display = 'none';
});
function mostrarPopUP() {
    const modal = document.getElementById('popupModal');
    modal.style.display = 'block';

    document.getElementById('acceptButton').onclick = function() {
        modal.style.display = 'none';
        eliminarCuenta();
    };

    /*document.getElementById('closeModal').onclick = function() {
        modal.style.display = 'none';
    };*/

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}


function eliminarCuenta(){
    let listaUsuarios = buscarEntidadEnLocalStorage("usuario");
    const usuarioActual = JSON.parse(sessionStorage.getItem("usuarioLogueado"));
    console.log(JSON.stringify(listaUsuarios));
    console.log("usar: "+usuarioActual);
    listaUsuarios = listaUsuarios.filter(usuario => usuario.mail != usuarioActual.mail);
    localStorage.setItem("usuario",JSON.stringify(listaUsuarios));
    sessionStorage.clear();
    window.location.href = '../index.html';
}

function buscarEntidadEnLocalStorage(entidad){
    if(localStorage.getItem(entidad) == null){
        localStorage.setItem(entidad, [])
        return [];
    }else if(localStorage.getItem(entidad) == []){
        return [];

    }else return JSON.parse(localStorage.getItem(entidad));
}