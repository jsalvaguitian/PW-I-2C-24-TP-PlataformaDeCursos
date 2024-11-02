let botonSesion = document.querySelector(".header__principal-iniciar-sesion");
//let botonPerfil = document.querySelector(".header__principal-perfil");
let botonPerfil = document.getElementById('header__principal-perfil');

console.log(botonSesion);

if(sessionStorage.getItem("usuarioLogueado")!= null){
    botonSesion.innerHTML = "Cerrar sesión";
    botonPerfil.style.display='block';

    botonSesion.addEventListener("click",()=>{
        sessionStorage.clear();
        botonPerfil.style.display='none';
    })
} 