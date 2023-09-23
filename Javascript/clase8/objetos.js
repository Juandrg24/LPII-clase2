let persona = {
    nombre: "Juan",
    id:1234,
    apellido:"Rubio",
    esProfesor:true,
    estudiantes:[
        {
            id:1,
            nombre:"Antonia"
        },
        {
            id:2,
            nombre:"Manuel"
        }
    ]
};//JSON javascript Object Notation

console.log(persona);
console.log(persona.estudiantes[0]);
console.log(persona.estudiantes[1]);
console.log(JSON.stringify(persona));
let personaAsString =JSON.stringify(persona);
console.log(personaAsString);
console.log(JSON.parse(personaAsString));