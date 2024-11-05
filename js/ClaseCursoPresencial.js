import { Curso } from "./ClaseCurso.js";

export class CursoPresencial extends Curso{
    constructor(id,descripcion, imagen_url, nombre,sinopsis, modalidad, categoria, cantidad_alumnos,horas, precio, puntaje, profNombre, descripcionProf, programaAnalitico, imagenProf){
        super(id,descripcion, imagen_url, nombre,sinopsis, modalidad, categoria, cantidad_alumnos,horas, precio, puntaje, profNombre, descripcionProf, imagenProf)
        
        this.inscriptos = [];
        this.programaAnalitico = programaAnalitico;
    }
}