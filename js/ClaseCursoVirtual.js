import { Curso } from "./ClaseCurso.js";

export class CursoVirtual extends Curso{
    constructor(id, imagen_url, nombre,sinopsis, modalidad, categoria, cantidad_alumnos,horas, precio, puntaje, profNombre, contenido){
        super(id, imagen_url, nombre, sinopsis, modalidad, categoria, cantidad_alumnos,horas, precio, puntaje, profNombre)
         
        this.contenido = contenido;
    }

}