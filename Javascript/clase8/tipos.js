//Tipos de datos
//Primitivos 

//-Number -> (Interger and Floats)
let numero=10;
let numeroDePuertas=4;
let numerPi=3.14;
let valorMatricula=2_000_000;
let numeroComoObjeto= new Number(10.5);

//-String -> (Cadena de caracteres)Ej: "" o ''
let saludo ="Hola";
let despido ='chao';
let stringComoObjeto= new String("Hola");

//-Boolean -> True o False
let esCierto= false;
let esFeo= true;

//-Object -> (Se representan con llaves) {} o new object()
let persona = {
    nombre: "Juan",
    apellido: "Rubio"
};

let empleado = {
id:1,
nombre:"Mariano"
};

//-Array -> (Se representan con conchetes) []
let arregloObjeto=[persona,empleado];

//-BigInt -> (Valores muy grandes)Ej: 100n o new BigInt(10)
let numeroGrande=100n;
let numeroGandeComoObjeto= new BigInt(100);

//-Undefined -> (Valor por defecto que tienen las variables si no se asignada)
let variableUndefined;
let variableUndefined2= undefined; 

//-null -> (Se asigna cuadno se quiere especificar que una variable esta vacia)
let variableNula=null;

//-Symbol -> (Se utiliza para crear valoresa unicos)
let simbolo= new Symbol("simbolo uno");