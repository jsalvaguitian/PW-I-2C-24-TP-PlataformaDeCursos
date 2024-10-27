export class Curso {
    constructor(id, imagen_url, nombre, detalle_introductorio, modalidad, categoria, cantidad_alumnos,
        detalleCurso, horas, precio, puntaje, profNombre, profDescripcion, profImagen_url, listaClases) {

        this.id = id;
        this.imagen_url = imagen_url;
        this.nombre = nombre;
        this.detalle_introductorio = detalle_introductorio;
        this.modalidad = modalidad;
        this.categoria = categoria;
        this.cantidad_alumnos = cantidad_alumnos;
        this.detalleCurso = detalleCurso;
        this.horas = horas;
        this.precio = precio;
        this.puntaje = puntaje;
        this.profNombre = profNombre;
        this.profDescripcion = profDescripcion;
        this.profImagen_url = profImagen_url;
        this.listaClases = listaClases;
    }
}