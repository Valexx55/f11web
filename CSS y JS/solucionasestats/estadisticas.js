//objeto (es una variable)
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