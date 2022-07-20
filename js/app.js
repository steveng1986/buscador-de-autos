//variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


const resultado = document.querySelector('#resultado');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

const datosBusqueda = {
    marca: '', 
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);

    llenarSelect()
})
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})
year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value) 
    filtrarAuto();
})
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = parseInt(e.target.value) 
    filtrarAuto();
})
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = parseInt(e.target.value) 
    filtrarAuto();
})
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value) 
    filtrarAuto();
})
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
})

//funciones
function mostrarAutos(autosPorMostrar) {
    limpiarHTML()
    autosPorMostrar.forEach(auto => {
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `${auto.marca} - ${auto.modelo} - ${auto.year} - ${auto.puertas} - ${auto.transmision} - ${auto.precio} - ${auto.color} `

        resultado.appendChild(autoHTML);

    });
}

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

function llenarSelect() {
 for( let i = maxYear; i > minYear; i-- ) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
 }
}

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    
    if(resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado() {
    limpiarHTML()

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
} 

function filtrarYear(auto) {
    const {year} = datosBusqueda;
    if (year) {
        return auto.year === year;
    }
    return auto;
} 

function filtrarMinimo(auto) {
    const {minimo} = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;
} 

function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;
} 

function filtrarPuertas(auto) {
    const {puertas} = datosBusqueda;
    if (puertas) {
        return auto.puertas === puertas;
    }
    return auto;
} 

function filtrarTransmision(auto) {
    const {transmision} = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
} 

function filtrarColor(auto) {
    const {color} = datosBusqueda;
    if (color) {
        return auto.color === color;
    }
    return auto;
} 