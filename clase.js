class Persona{
    #nombre;
    #apellido;
    constructor(nombre,apellido){
        this.#nombre=nombre;
        this.#apellido=apellido;
    }
    get nombre(){
        return this.#nombre;
    }
}

let persona=new Persona("Juan","Rubio");
console.log(persona.nombre);