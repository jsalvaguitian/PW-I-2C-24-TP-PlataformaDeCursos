export class Usuario{
    constructor(mail, nombre,apellido, pass, id){
        this.mail = mail;
        this.nombre = nombre;
        this.apellido = apellido;
        this.pass = pass;
        this.id = id;
        this.metodoDePago = [];
        this.cursosComprados =[];
    }
}