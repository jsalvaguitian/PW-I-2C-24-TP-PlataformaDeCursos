export function validarDatosDestinatario() {
    let regexMail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    let regexNombre = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+(?: [a-zA-ZñÑáéíóúÁÉÍÓÚ]+)*$/;


    let mensajeError = "";
    let error = false;
    let mailIngresado = document.getElementById("correo-destinatario").value;
    let nombreDestinatario = document.getElementById("destinatario").value;
    let montoIngresado = parseInt(document.getElementById("monto").value);//entre 1000 a 100000

    
    let opcionesColor = document.getElementsByName("tipo_color");
    let opcionesUbicacion = document.getElementsByName("tipo_ubicacion");
    let opcionesTamanio = document.getElementsByName("tamanio_fuente");
    let opcionesFondoImg = document.getElementsByName("tipo_fondo");

    if(!validacionInputsRadio(opcionesColor) || !validacionInputsRadio(opcionesUbicacion) || !validacionInputsRadio(opcionesTamanio) || !validacionInputsRadio(opcionesFondoImg)){
        error = true;
        mensajeError += "<p>- Alguna de las opciones no fue seleccionada.</p>";
    }

    if(!(montoIngresado>=1000 && montoIngresado<=100000)){
        error = true;
        mensajeError += "<p>- Tiene que ser un monto entre 1000 y 100000.</p>"
    }

    /*if(montoIngresado.toString()== ""){
        error = true;
        mensajeError += "<p>- No ingresó el monto.</p>";
    }*/

    if(!regexNombre.test(nombreDestinatario)){
        error= true;
        mensajeError += "<p>- Tiene que ser un nombre o nombre compuesto válido.</p>"
    }

    if (!regexMail.test(mailIngresado)) {
        error = true;
        mensajeError += "<p>- Tiene que ser un email válido.</p>";
    }

    if (error) {
        document.getElementById("mensaje").innerHTML = mensajeError;
        return false;
    }
    else {
        mensajeError = " ";
        document.getElementById("mensaje").innerHTML = mensajeError;
        return true;
    }


}


function validacionInputsRadio(vectorRadios){
    for(let i=0 ; i< vectorRadios.length; i++){
        if(vectorRadios[i].checked)
            return true;       
    }
    return false;
}
    

