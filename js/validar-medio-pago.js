
export function validacionesMp(){
    // Obtener los valores de los inputs
    console.log("entre");
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expiryDate = document.getElementById('expiryDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const cardName = document.getElementById('cardName').value.trim();

    // Limpiar mensajes
    document.getElementById('errorCardNumber').textContent = '';
    document.getElementById('errorExpiryDate').textContent = '';
    document.getElementById('errorCVV').textContent = '';
    document.getElementById('errorName').textContent = '';

    let isValid = true; 
    const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;

    // Validación de los inputs
    if (!cardNumber) {
        document.getElementById('errorCardNumber').textContent = 'El número de tarjeta es obligatorio.';
        isValid = false;
    } else if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber)) {
        document.getElementById('errorCardNumber').textContent = 'El número de tarjeta debe tener el formato: **** **** **** ****';
        isValid = false;
    }

    if (!expiryDate) {
        document.getElementById('errorExpiryDate').textContent = 'La fecha de expiración es obligatoria.';
        isValid = false;
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
        document.getElementById('errorExpiryDate').textContent = 'La fecha de expiración debe tener el formato: MM/AA';
        isValid = false;
    }

    if (!cvv) {
        document.getElementById('errorCVV').textContent = 'El CVV es obligatorio.';
        isValid = false;
    } else if (!/^\d{3}$/.test(cvv)) {
        document.getElementById('errorCVV').textContent = 'El CVV debe tener 3 dígitos.';
        isValid = false;
    }
    if(!cardName){
        document.getElementById('errorName').textContent = 'El nombre es obligatorio.';
        isValid = false;
    }else if(!regex.test(cardName)){
        document.getElementById('errorName').textContent = 'El nombre debe ser texto.';
        isValid = false;
    }

    return isValid; 
}


