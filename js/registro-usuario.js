/* 
Datos del usuario a registrarse
email
nombre
apellido
password
*/
import { Usuario } from "./ClaseUsuario.js";
import { buscarEntidadEnLocalStorage } from "./ayudante.js";


const formulario =  document.querySelector(".js-formulario-registro");

formulario.addEventListener("submit", (event)=>{
    event.preventDefault();
    guardarUsuario();
})
function generarIdUsuario(){
    let newId = 0;

    let usuariosStorage = buscarEntidadEnLocalStorage("usuario");
    if(JSON.stringify(usuariosStorage) == JSON.stringify([])){
        return newId;

    }else{
        newId = (usuariosStorage.length-1)+1;
        return newId;
    }

}
function guardarUsuario(){
    if(validarUsuario()==true){
        let formulario = document.querySelector(".form-new-user");
        let mail = document.querySelector("#mail").value,
            nombre = document.querySelector("#nombre").value,
            apellido = document.querySelector("#apellido").value,
            password = document.querySelector("#new-password").value;

        let idGenerado = generarIdUsuario();

        agregarUsuario(mail, nombre, apellido, password, idGenerado);
        formulario.submit();
    }
}

function agregarUsuario(email, name, surname, pwd, id){
    let nuevoUsuario = new Usuario(email, name, surname, pwd, id);

    let listaUsuarios = buscarEntidadEnLocalStorage("usuario");
    listaUsuarios.push(nuevoUsuario);
    localStorage.setItem("usuario", JSON.stringify(listaUsuarios));

}


