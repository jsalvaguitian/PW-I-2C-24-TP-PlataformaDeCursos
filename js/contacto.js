
document.querySelector('#botonEnviar').addEventListener('click', enviarContacto);
document.getElementById('consulta').addEventListener('input', actualizarContador);

function enviarContacto(event){
    event.preventDefault();
    if(validarFormulario()){
        mostrarPopUP();
    }
}

function actualizarContador(){
    const textarea = document.getElementById('consulta');
    const contador = document.getElementById('contador');
    const caracteres = textarea.value.length;
    const caracteresRestantes = 1000 - caracteres;
    

    if (caracteresRestantes < 0) {
        contador.innerHTML = '<p>Has superado el límite de caracteres.</p>';
        contador.style.color = 'red';
    } else {
        contador.innerHTML = `<p>${caracteres}/${caracteresRestantes}</p>`;
        contador.style.color = 'black';
    }
}
function mostrarPopUP() {
    const modal = document.getElementById('popupModal');
    modal.style.display = 'block';

    document.getElementById('acceptButton').onclick = function() {
        modal.style.display = 'none';
        window.location.href = '../index.html';
    };

    document.getElementById('closeModal').onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
