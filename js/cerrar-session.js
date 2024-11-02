let botonSesion = document.querySelector(".header__principal-iniciar-sesion");

console.log(botonSesion);

if(sessionStorage.getItem("usuarioLogueado")!= null){
    botonSesion.innerHTML = "Cerrar sesión";
    
    botonSesion.addEventListener("click",()=>{
        sessionStorage.clear();
    })
} 