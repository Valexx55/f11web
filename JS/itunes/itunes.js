const URL_RUTA = "https://itunes.apple.com/search?media=music&term=acdc"

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
    let artista = arrayCanciones.results[0].artistName;
    let cancion = arrayCanciones.results[0].trackName;
    console.log(`Arista ${artista} Canción ${cancion}`);
})
