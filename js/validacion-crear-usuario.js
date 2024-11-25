function validarUsuario(){
    let regexTexto = /^[a-zA-Z]+$/; //solo letras minusculas y o mayusc
    let regexContrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; //requiere al menos 8 caracteres, al menos una letra mayúscula y un número
    let regexMail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

    let error = false;
    let mensajeError = "";

    let contraseniaIngresada = document.getElementById("new-password").value;
    let nombreIngresado = document.getElementById("nombre").value;
    let apellidoIngresado = document.getElementById("apellido").value;
    let emailIngresado = document.getElementById("mail").value;

    if(!regexMail.test(emailIngresado)){
        error= true;
        mensajeError += "<p>- Tiene que ser un email válido.</p>";
    
    }

    if(!regexTexto.test(nombreIngresado)){
        error=true;
        mensajeError += "<p>- El nombre solo tiene que incluir letras.</p>";
    }

    if(!regexTexto.test(apellidoIngresado)){
        error= true;
        mensajeError += "<p>- El apellido solo tiene que incluir letras.</p>";
    }

    if(!regexContrasenia.test(contraseniaIngresada)){
        error= true;
        mensajeError += "<p>- La contraseña debe contener al menos 8 caracteres, una mayuscula y un numero.</p>";
    }

    if(contraseniaIngresada != document.getElementById("repeat-password").value){
        error = true;
        mensajeError += "<p>- No es la misma contrasenia.</p>";
    }

    if(error){
        document.getElementById("mensaje").innerHTML = mensajeError;
        return false;

    }else{
        mensajeError = " ";
        document.getElementById("mensaje").innerHTML = mensajeError;
        return true;
    }
        
    





}