//TODO:
/*Completad la página para que 

1) El usuario pueda buscar el nombre de una canción o artista (añadid
un input de texto y un botón de buscar)

2) Cuando el usuario clique el botón de buscar, extraemos esa cadena
introducida y la buscaos en itunes

3) Recorremos la respuesta de todas las canciones obtenidas y la vamos
pintando en la pantalla (con document.createElement, document.appenChild)
Ojo, tenemos que pensar primero un poco cómo queremos mostrar la info
de cada canción

4) Los campos que hay que mostrar como mínimo son:

artistName
collectionName
trackName
artworkUrl100 (foto)
previewUrl (audio)

*/

const URL_RUTA = "https://itunes.apple.com/search?media=music&term=acdc"

console.log("ANTES DEL FECTH");
fetch(URL_RUTA).then(respuesta => {
    console.log("RESPUESTA RECIBIDA");
    console.log("Objeto response completo:", respuesta);

    // 1. Mostramos información básica de la respuesta HTTP
    console.log("Status:", respuesta.status);
    console.log("Status text:", respuesta.statusText);
    console.log("OK:", respuesta.ok);
    console.log("URL final:", respuesta.url);

    // 2. Mostramos las cabeceras HTTP
    console.log("CABECERAS DE LA RESPUESTA:");
    respuesta.headers.forEach( (valor, clave)=>
        console.log(`clave = ${clave} valor = ${valor}`)
    );

    if (respuesta.ok)
    {
        return respuesta.json();
    } else {
        alert('la cosa ha ido mal');
        console.error('la cosa ha ido mal');
    }
}
).then (arrayCanciones => {
    console.log(`Hemos obtenido ${arrayCanciones.resultCount} canciones`);
    console.log(`Hemos obtenido ${arrayCanciones.results.length} canciones`);
    console.log(`Hemos obtenido ${arrayCanciones.length} canciones`);
    let artista = arrayCanciones.results[0].artistName;
    let cancion = arrayCanciones.results[0].trackName;
    console.log(`Arista ${artista} Canción ${cancion}`);
})
 console.log("DESPUÉS DEL FETCH");