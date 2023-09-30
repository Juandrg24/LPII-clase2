//Operador Ternario
function cualquiera(cualquierValor){
    return (cualquierValor>0)? 10:20;
}
//console.log(cualquiera(30));


//Operador Opcional
let persona= {
    nombre:"Juan",
    apellido:"Rubio"

}

//console.log(persona?.hijos?.numeroHijos);

//?? operador nullish
console.log(persona.hijos ?? "Valor por defecto");

//=== y ==
//=== valida valor  y tipo
//== valida unicamente el valor
console.log(5=='5');
console.log(5==="5");