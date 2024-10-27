/* 
Datos del usuario a registrarse
email
nombre
apellido
password
*/
import { Usuario } from "./ClaseUsuario.js";

document.querySelector('.js-btn-guarda-usuario').addEventListener('click',guardarUsuario);
function generarIdUsuario(){
    let newId = 0;

    let usuariosStorage = buscarEntidadEnLocalStorage("usuario");
    if(usuariosStorage == []){
        return newId;

    }else{
        newId = (usuariosStorage.length-1)+1;
        return newId;
    }

}
function guardarUsuario(){
    if(validarUsuario()==true){
        let mail = document.querySelector("#mail").value,
            nombre = document.querySelector("#nombre").value,
            apellido = document.querySelector("#apellido").value,
            password = document.querySelector("#new-password").value;

        let idGenerado = generarIdUsuario();

        agregarUsuario(mail, nombre, apellido, password, idGenerado);
    }
}

function agregarUsuario(email, name, surname, pwd, id){
    let nuevoUsuario = new Usuario(email, name, surname, pwd, id);

    let listaUsuarios = buscarEntidadEnLocalStorage("usuario");
    listaUsuarios.push(nuevoUsuario);
    localStorage.setItem("usuario", JSON.stringify(listaUsuarios));


}

function buscarEntidadEnLocalStorage(entidad){
    if(localStorage.getItem(entidad) == null){
        localStorage.setItem(entidad, [])
        return [];
    }else if(localStorage.getItem(entidad) == []){
        return [];

    }else return JSON.parse(localStorage.getItem(entidad));
}
