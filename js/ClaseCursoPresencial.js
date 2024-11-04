import { Curso } from "./ClaseCurso.js";

export class CursoPresencial extends Curso{
    constructor(id, imagen_url, nombre,sinopsis, modalidad, categoria, cantidad_alumnos,horas, precio, puntaje, profNombre, programaAnalitico){
        super(id, imagen_url, nombre,sinopsis, modalidad, categoria, cantidad_alumnos,horas, precio, puntaje, profNombre)
        
        this.inscriptos = [];
        this.programaAnalitico = programaAnalitico;
    }
}