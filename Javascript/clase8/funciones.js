//Funciones
function sumar(numeroUno,numeroDos){
    return numeroUno + numeroDos;
}//Normalemente los nombres de las funciones van con un verbo en infinitivo

let sumarVersionDos =function (numeroUno,numeroDos){
    return numeroUno + numeroDos;
};//a traves de funcion anonima

let funcionUno = function (numeroUno, numeroDos, fucionDos){
comsole.log("Estoy dentro de la funcion Uno");
return funcionDos(numeroUno,numeroDos);
};//resibe una funcion como parametro

let funcionTres =(numeroUno,numeroDos)=>{
    console.log("voy a restar");
    return numeroUno - numeroDos;
};

let sumarVersionTres= (numeroUno,numeroDos)=> numeroUno +numeroDos; //Arrow Function

//Imprimir en consola
/*console.log(sumar(5,8));
console.log(sumar("Hola"," Mundo"));
console.log(sumarVersionDos(10,20));
console.log(sumarVersionTres(40,50.2));
*/
console.log(funcionUno(10,40, sumarVersionTres));
console.log(funcionUno(20,30, funcionTres));