let destinatario = document.querySelector(".nombre-destinatario");
let monto = document.querySelector(".giftcard_box-monto");
//monto.innerHTML = "$"

//////////////////////////////////////////////////////////////
function mostrarMonto(){
    let montoIngresado = document.getElementById("monto").value;
    monto.innerHTML = montoIngresado;
}

function mostrarNombreDestinatario() {
    let nombreIngresado = document.getElementById("destinatario").value;
    destinatario.innerHTML = nombreIngresado

}
function cambiarPosicionMonto() {
    let cuadroMonto = document.querySelector(".giftcard_box_muestra-monto");

    let opcionesUbicacion = document.getElementsByName("tipo_ubicacion");

    opcionesUbicacion.forEach(posicion => {

        if (posicion.value === "ubicacion-der-inf" && posicion.checked) {
            cuadroMonto.classList.remove('ubicacion-der-inf', 'ubicacion-izq-sup', 'ubicacion-der-sup');
            cuadroMonto.classList.add("ubicacion-der-inf");
        }


        if (posicion.value == "ubicacion-izq-sup" && posicion.checked) {
            cuadroMonto.classList.remove('ubicacion-der-inf', 'ubicacion-izq-sup', 'ubicacion-der-sup');
            cuadroMonto.classList.add("ubicacion-izq-sup");
        }

        if (posicion.value == "ubicacion-der-sup" && posicion.checked) {
            cuadroMonto.classList.remove('ubicacion-der-inf', 'ubicacion-izq-sup', 'ubicacion-der-sup');
            cuadroMonto.classList.add("ubicacion-der-sup");
        }


    })

}

function cambiarTamanioTexto() {
    let cuadroTexto = document.querySelector(".giftcard-cuadro-texto");
    let texto = cuadroTexto.querySelectorAll("p");

    let opcionesTamanio = document.getElementsByName("tamanio_fuente");

    opcionesTamanio.forEach(tamanio => {
        if (tamanio.value == "20" && tamanio.checked)
            texto.forEach(partText => {
                partText.style.fontSize = "1.25em";
            });

        if (tamanio.value == "28" && tamanio.checked)
            texto.forEach(partText => {
                partText.style.fontSize = "1.75em";
            });

        if (tamanio.value == "32" && tamanio.checked)
            texto.forEach(partText => {
                partText.style.fontSize = "2em";
            });

        if (tamanio.value == "48" && tamanio.checked)
            texto.forEach(partText => {
                partText.style.fontSize = "3em";
            });

        if (tamanio.value == "60" && tamanio.checked)
            texto.forEach(partText => {
                partText.style.fontSize = "3.75em";
            });
    })
}
function cambiarColorTexto() {
    let cuadroTexto = document.querySelector(".giftcard-cuadro-texto");
    let texto = cuadroTexto.querySelectorAll("p");

    let opcionesColor = document.getElementsByName("tipo_color");

    opcionesColor.forEach(opcion => {
        if (opcion.value == "blanco" && opcion.checked)
            texto.forEach(parteText => {
                parteText.style.color = "#FFFF";
            });

        if (opcion.value == "negro" && opcion.checked)
            texto.forEach(parteText => {
                parteText.style.color = "black";
            });

        if (opcion.value == "dorado" && opcion.checked)
            texto.forEach(parteText => {
                parteText.style.color = "#dba233";
            })
        if (opcion.value == "azul" && opcion.checked)
            texto.forEach(parteText => {
                parteText.style.color = "#0000FF";
            })
        if (opcion.value == "rojo" && opcion.checked)
            texto.forEach(parteText => {
                parteText.style.color = "#FF0000";
            })
    })

}

function cambiarFondoImagen() {
    let opcionesFondoImg = document.getElementsByName("tipo_fondo");

    opcionesFondoImg.forEach(opcionImg => {
        if (opcionImg.value == "fondo-cumple" && opcionImg.checked)
            document.querySelector(".cuadro-gift-card").style.backgroundImage = `url(../assets/1-fondo-cumple.jpg)`;

        if (opcionImg.value == "fondo-brillo" && opcionImg.checked)
            document.querySelector(".cuadro-gift-card").style.backgroundImage = `url(../assets/2-fondo-gliter.jpg)`;

        if (opcionImg.value == "fondo-galaxy" && opcionImg.checked)
            document.querySelector(".cuadro-gift-card").style.backgroundImage = `url(../assets/3-fondo-galaxy.jpg)`;

        if (opcionImg.value == "fondo-navidad" && opcionImg.checked)
            document.querySelector(".cuadro-gift-card").style.backgroundImage = `url(../assets/4-fondo-navidad-nuevo.jpg)`;

        if (opcionImg.value == "fondo-san-valentin" && opcionImg.checked)
            document.querySelector(".cuadro-gift-card").style.backgroundImage = `url(../assets/5-san-valentin.jpeg)`;

    })

}
