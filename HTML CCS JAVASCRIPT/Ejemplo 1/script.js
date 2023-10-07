//Destructuring

function crearServicio(titulo,descripcion) {
    return `
        <div class="servicio">
            <h1>${titulo}</h1>
            <p>${descripcion}</p>
        </div>
    `;
}

function crearModal(){
    return`
        <div class="contenedor-modal">
            <div class="modal">
                <h2>Bienvenido</h2>
                <button id="button-cerrar">Cerrar</button>
            </div>
            
        </div>

    `;
}

function crearServicioObjetos({titulo,descripcion}){
    const contenedorServicio = document.createElement('div');

    const parrafo = document.createElement('p');
    parrafo.innerText = descripcion;

    const heading = document.createElement('h3');
    heading.innerText = titulo;

    contenedorServicio.appendChild(heading);
    contenedorServicio.appendChild(parrafo);
    contenedorServicio.classList.add('servicio');
    
    return contenedorServicio;
}

const data =[
    {titulo:"Seccion Uno", descripcion: "Descripcion de la Seccion Uno"},
    {titulo:"Seccion Dos", descripcion: "Descripcion de la Seccion Dos"},
    {titulo:"Seccion Tres", descripcion: "Descripcion de la Seccion Tres"},
    {titulo:"Seccion Cuatro", descripcion: "Descripcion de la Seccion Cuatro"},
    {titulo:"Seccion Cinco", descripcion: "Descripcion de la Seccion Cinco"},
    {titulo:"Seccion Seis", descripcion: "Descripcion de la Seccion Seis"},
    {titulo:"Seccion Siete", descripcion: "Descripcion de la Seccion Siete"}
];

const contenedor=document.querySelector('.contenedor-servicios');

for(servicio of data){
    const{descripcion}= servicio;
    console.log(descripcion);
    const servicioHtml= crearServicioObjetos(servicio);
    contenedor.appendChild(servicioHtml);
    //contenedor.insertAdjacentHTML('beforeend',servicioHtml);
};

document.body.insertAdjacentHTML('beforeend',crearModal());
const botonCerrar=document.getElementById("button-cerrar");
const modal = document.querySelector(".contenedor-modal");
botonCerrar.addEventListener('click',() => modal.remove());