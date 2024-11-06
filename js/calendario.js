const cursos = document.querySelectorAll('.course');
cursos.forEach((elemento)=>{
    const idCurso=elemento.getAttribute('idCurso');
    console.log(idCurso);
    elemento.addEventListener('click',()=>mostrarInfoCurso(idCurso));
});

function mostrarInfoCurso(idCurso){
    let listaRecuperada = JSON.parse(localStorage.getItem('curso'));
    let indiceCurso = sessionStorage.getItem('indiceCursoAVer');
    indiceCurso = idCurso;
    sessionStorage.setItem('indiceCursoAVer', indiceCurso);
    if (listaRecuperada) {
        listaRecuperada.forEach((elemento) => {
          if(idCurso==elemento.id){
            actualizarPopUp(elemento);
          }
        });
      }
}
function actualizarPopUp(elemento){
    const mostrarInfo = document.querySelector('#modal-descripcion-curso');
    mostrarInfo.innerHTML=`<h2>${elemento.nombre}</h2><p>Modalidad: ${elemento.modalidad}</p>
    <p>Categoría: ${elemento.categoria}</p><p>Precio: ${elemento.precio}</p>`;
    const url="../pages/detalles_de_un_curso_virtual.html";
    if(elemento.modalidad=="Online"){
        const urlVir="../pages/detalles_de_un_curso_virtual.html";
        mostrarPopUP(urlVir);
    }else{
        mostrarPopUP(url);
    }
    
}
function mostrarPopUP(urlCurso) {
    const modal = document.getElementById('popupModal');
    modal.style.display = 'block';

    document.getElementById('acceptButton').onclick = function() {
        modal.style.display = 'none';
        window.location.href = urlCurso;
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