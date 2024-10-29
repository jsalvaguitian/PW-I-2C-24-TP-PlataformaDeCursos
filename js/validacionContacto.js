const errorNombre = "El nombre y apellido no puede ser vacio.";
const errorEmail = "El email es inválido.";
const errorTelefono = "El teléfono debe tener 8 digitos y un guión medio entre el 4to y 5to nro.";
const errorConsulta = "La consulta no puede superar los 1000 caracteres.";

function validarFormulario(){
    let regexMail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    let regexTelefono = /^[0-9]{4}-[0-9]{4}$/;
    let status = true;
    
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const consulta = document.getElementById("consulta").value;
    console.log(nombre)
    if(nombre==""){
        const errorhtml = document.querySelector('#errorNombre');
        errorhtml.innerHTML= `<p>${errorNombre}</p>`;
        status = false;
    }else{
        const errorhtml = document.querySelector('#errorNombre');
        errorhtml.innerHTML = ``;
    }
    if(!regexMail.test(email)){
        const errorhtml = document.querySelector('#errorEmail');
        errorhtml.innerHTML= `<p>${errorEmail}</p>`;
        status = false;
    }else{
        const errorhtml = document.querySelector('#errorEmail');
        errorhtml.innerHTML = ``;
    }
    if(telefono!="" && !regexTelefono.test(telefono)){
        const errorhtml = document.querySelector('#errorTelefono');
        errorhtml.innerHTML= `<p>${errorTelefono}</p>`;
        status = false;
    }
    else{
        const errorhtml = document.querySelector('#errorTelefono');
        errorhtml.innerHTML = ``;
    }
    if(consulta.length>1000){
        const errorhtml = document.querySelector('#errorConsulta');
        errorhtml.innerHTML= `<p>${errorConsulta}</p>`;
        status = false;
    }else{
        const errorhtml = document.querySelector('#errorConsulta');
        errorhtml.innerHTML = ``;
    }
    return status;
}
