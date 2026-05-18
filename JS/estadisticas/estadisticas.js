//objeto (es una variable)
//FORMATO JSON - es una forma de estructurar el texto, que permite estrucuturar los datos
let estadisticasRemates = {
    titulo: "REMATES",
    equipoLocal: {
        nombre: "Bayern",
        escudo: "bayern.png",
        color: "#c60e1d",

        remates: {
            fuera: 7,
            apuerta: 6, 
            bloqueados: 5
        }

    },
    equipoVisitante: {
        nombre: "PSG",
        escudo: "psg.png",
        color: "#f8a116",

        remates: {
            fuera: 3,
            apuerta: 7, 
            bloqueados: 5
        }

    }
}

console.log(estadisticasRemates.titulo);
console.log(estadisticasRemates.equipoLocal.nombre);
//remates a puerta del equipo visitante
console.log(estadisticasRemates.equipoVisitante.remates.apuerta);

//TODO: RELLENAR LA PÁGINA HTLM CON LOS DATOS DE estadisticasRemates

//CUANDO se carga la página completa, salta
//el evento onload
window.onload = function () {
    //en este momento ya se ha cargado todo el html
    //las imágenes, el css, todo
    console.log('Se ha cargado la página');
    //relleno equipo local
    let imgLocal = document.getElementById('logolocal');
    imgLocal.src = estadisticasRemates.equipoLocal.escudo;
    imgLocal.alt = estadisticasRemates.equipoLocal.nombre;

     //relleno equipo visitante
    let imgVisitante = document.getElementById('logovisitante');
    imgVisitante.src = estadisticasRemates.equipoVisitante.escudo;
    imgVisitante.alt = estadisticasRemates.equipoVisitante.nombre;

    //relleno remates bloqueados local
    let spanBloqLocal = document.getElementById('bloqueadosLocal');
    spanBloqLocal.textContent = estadisticasRemates.equipoLocal.remates.bloqueados;
    
    //relleno remates bloqueados visitante
    let spanBloqVisitante = document.getElementById('bloqueadosVisitante');
    spanBloqVisitante.textContent = estadisticasRemates.equipoVisitante.remates.bloqueados;

    //1 selecciono etiqueta remtaes a fuera del equipolocal 
    let spanFueraLocal = document.getElementById('fueralocal');
    spanFueraLocal.textContent = estadisticasRemates.equipoLocal.remates.fuera;

    let spanAPuertaLocal = document.getElementById('apuertalocal');
    spanAPuertaLocal.textContent = estadisticasRemates.equipoLocal.remates.apuerta;
    
    let spanFueraVte = document.getElementById('fueravte');
    spanFueraVte.textContent = estadisticasRemates.equipoVisitante.remates.fuera;
    
    let spanAPuertaVte = document.getElementById('apuertavte');
    spanAPuertaVte.textContent = estadisticasRemates.equipoVisitante.remates.apuerta;

   /* let listaClassNumIzq = document.getElementsByClassName('num-izq');
    console.log('Elementos num izq = ' + listaClassNumIzq.length);
    //lista[n] estoy seleccionado en elemento enésimo
    listaClassNumIzq[0].textContent = 60;
    listaClassNumIzq[1].textContent = 120;

    let listaSpans = document.getElementsByTagName('span');
    console.log('Tamaño lista span = ' + listaSpans.length);
    listaSpans[0].textContent = 30;*/
}