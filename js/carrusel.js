
// Carrusel principal 

document.addEventListener('DOMContentLoaded', () => {
    let sliderActual = 0;
    const slides = document.querySelectorAll('.slider-seccion');
    const totalSlides = slides.length;
    const indicators = document.querySelectorAll('.indicator');
    const intervaloTiempo = 3000; // tiempo en ms = 3seg

    // mueve las imaganes y activa indicador
    const irAlSlider = (n) => {
       // mueve las imagenes a la izquierda y que se pongan en el centro de la pagina
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${n * 100}%)`;
        });
        // actualizar el indicador, resalta la imagen que se muestra
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === n); 
        });
        sliderActual = n;
    };

    const nextSlide = () => {
        irAlSlider((sliderActual + 1) % totalSlides); 
    };

    const prevSlide = () => {
        irAlSlider((sliderActual - 1 + totalSlides) % totalSlides);
    };

    document.getElementById('nextButton').addEventListener('click', nextSlide);
    document.getElementById('prevButton').addEventListener('click', prevSlide);

    // seleccionar indicador para mostrar 'x' img
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            irAlSlider(index);
        });
    });

    // Iterar automaticamente
    let autoSlider = setInterval(nextSlide, intervaloTiempo);

    // pausar cuando el usuario clickea en el carrusel
    const stopAutoSlide = () => clearInterval(autoSlider);
    document.querySelectorAll('.slider-btn, .indicator').forEach(button => {
        button.addEventListener('click', stopAutoSlide);
    });

    // Iniciar el carrusel
    irAlSlider(sliderActual);
});


// Carrusel de metodos de pago

document.addEventListener('DOMContentLoaded', () => {
    let sliderActual = 0;
    const slides = document.querySelectorAll('.slide-payment');
    const totalSlides = slides.length;

    // mueve las imaganes con las flechas
    const irAlSlider = (n) => {
       // mueve las imagenes a la izquierda y que se pongan en el centro de la pagina
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${n * 100}%)`;
        });
        sliderActual = n;
    };

    //hace funcionar las flechas
    const nextSlide = () => {
        irAlSlider((sliderActual + 1) % totalSlides); 
    };

    const prevSlide = () => {
        irAlSlider((sliderActual - 1 + totalSlides) % totalSlides);
    };

    document.getElementById('nextBtnPayment').addEventListener('click', nextSlide);
    document.getElementById('prevBtnPayment').addEventListener('click', prevSlide);

    // Iniciar el carrusel
    irAlSlider(sliderActual);
});

