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
    equipoVisitantes: {
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
console.log(estadisticasRemates.equipoVisitantes.remates.apuerta);

//TODO: RELLENAR LA PÁGINA HTLM CON LOS DATOS DE estadisticasRemates

//CUANDO se carga la página completa, salta
//el evento onload
window.onload = function () {
    //en este momento ya se ha cargado todo el html
    //las imágenes, el css, todo
    console.log('Se ha cargado la página');
    let imgLocal = document.getElementById('logolocal');
    imgLocal.src = estadisticasRemates.equipoLocal.escudo;
    imgLocal.alt = estadisticasRemates.equipoLocal.nombre;

    let spanBloqLocal = document.getElementById('bloqueadosLocal');
    spanBloqLocal.textContent = estadisticasRemates.equipoLocal.remates.bloqueados;

}