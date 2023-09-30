//For
/*
for(let i=0; i<10;i++){
    console.log(i);
}
let variable=0;
//console.log(variable++);//0
//console.log(++variable);//2


//while
variable=0;
while(variable<=2){
    variable++;
    console.log("estoy en el while")
}
*/
//do/while
/*do{
    console.log("estoy en el while")
}while(variable==0);

//for of
let arreglo=["Hola","Chao","Mundo","Cualquiera" ];
for(elemento of arreglo){
    console.log(elemento);
}
*/
//For in
let persona={
    nombre: "Juan",
    apellido:"Rubio",
    edad:12
}

for(key in persona){
    console.log(key+"-->"+persona[key]);
}