import { Curso } from "./ClaseCurso.js";

export class CursoVirtual extends Curso{
    constructor(id,descripcion, imagen_url, nombre,sinopsis, modalidad, categoria, cantidad_alumnos,horas, precio, puntaje, profNombre, descripcionProf, contenido, imagenProf){
        super(id,descripcion, imagen_url, nombre, sinopsis, modalidad, categoria, cantidad_alumnos,horas, precio, puntaje, profNombre, descripcionProf, imagenProf)
         
        this.contenido = contenido;
    }

}