export class Carrito{
    constructor(idUsuarioLogueado){
        this.idUsuarioLogueado = idUsuarioLogueado;
        this.cursos_a_comprar = [];
        this.cantidad_total=0;
        this.precio_total= 0;
        this.compraFinalizada = false;
    }
}