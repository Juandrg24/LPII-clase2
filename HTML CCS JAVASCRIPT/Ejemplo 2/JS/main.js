import {agregarNumero,limpiar,borrarElemento,mostrarResultado,agregarOperacion} from "./calculadora.js";

const botones =document.querySelectorAll("button");
const botonBorrado =document.querySelector("[borrado]");
const  botonBorradoElemento =document.querySelector("[borrado-elemento]");
const botonigual=document.querySelector(".igual");
const operadores=document.querySelectorAll("[operador]");
const botonesNumero=document.querySelectorAll("[numero]");

botonesNumero.forEach(
    boton => boton.addEventListener('click',() => agregarNumero(boton.textContent)));

botonBorrado.addEventListener('click',() => limpiar());
botonBorradoElemento.addEventListener('click',()=>borrarElemento());
botonigual.addEventListener('click',()=>mostrarResultado());
operadores.forEach(operador=>operador.addEventListener('click',()=>agregarOperacion(operador.textContent)))
console.log(botonesNumero);
