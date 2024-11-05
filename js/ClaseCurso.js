export class Curso {
    constructor(id,descripcion, imagen_url, nombre,sinopsis, modalidad, categoria, cantidad_alumnos,horas, precio, puntaje, profNombre, descripcionProf, imagenProf) {

        this.id = id;
        this.descripcion = descripcion;
        this.imagen_url = imagen_url;
        this.nombre = nombre;
        this.sinopsis = sinopsis;
        this.modalidad = modalidad;
        this.categoria = categoria;
        this.cantidad_alumnos = cantidad_alumnos;
        this.horas = horas;
        this.precio = precio;
        this.puntaje = puntaje;
        this.profNombre = profNombre;
        this.descripcionProf = descripcionProf;
        this.imagenProf = imagenProf
    }
}