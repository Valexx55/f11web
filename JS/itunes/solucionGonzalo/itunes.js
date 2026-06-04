// Capturamos los elementos del HTML
const inputBusqueda = document.getElementById('inputBusqueda');
const btnBuscar = document.getElementById('btnBuscar');
const contenedorResultados = document.getElementById('resultados');

// 2) Evento cuando el usuario clica el botón de buscar
btnBuscar.addEventListener('click', () => {
    // Extraemos el valor del input y le quitamos los espacios en blanco de los bordes
    const termino = inputBusqueda.value.trim();

    if (termino === "") {
        alert("Por favor, introduce un término de búsqueda.");
        return;
    }

    // Construimos la URL con la búsqueda del usuario (usamos encodeURIComponent por si hay espacios)
    const URL_RUTA = `https://itunes.apple.com/search?media=music&term=${encodeURIComponent(termino)}`;

    // Limpiamos resultados anteriores y mostramos un mensaje de carga
    contenedorResultados.innerHTML = "<p>Buscando...</p>";

    fetch(URL_RUTA)
        .then(respuesta => {
            if (respuesta.ok) {
                return respuesta.json();
            } else {
                throw new Error('Error en la petición a iTunes');
            }
        })
        .then(datos => {
            // Limpiamos el mensaje de "Buscando..."
            contenedorResultados.innerHTML = "";

            const arrayCanciones = datos.results;

            if (arrayCanciones.length === 0) {
                contenedorResultados.innerHTML = "<p>No se encontraron resultados.</p>";
                return;
            }

            console.log(`Hemos obtenido ${arrayCanciones.length} canciones`);

            // 3) Recorremos la respuesta para pintar cada canción
            arrayCanciones.forEach(cancion => {
                
                // Creamos el contenedor principal de la tarjeta
                const divTarjeta = document.createElement('div');
                divTarjeta.classList.add('tarjeta-cancion');

                // 4) Creamos los elementos para los campos mínimos requeridos

                // -- FOTO (artworkUrl100) --
                const imgCaratula = document.createElement('img');
                imgCaratula.src = cancion.artworkUrl100;
                imgCaratula.alt = `Carátula de ${cancion.trackName}`;

                // -- CONTENEDOR PARA LA INFORMACIÓN (Textos y Audio) --
                const divInfo = document.createElement('div');
                divInfo.classList.add('info-cancion');

                // -- NOMBRE DE LA CANCIÓN (trackName) --
                const tituloCancion = document.createElement('h3');
                tituloCancion.textContent = cancion.trackName || "Título desconocido";

                // -- ARTISTA (artistName) --
                const parrafoArtista = document.createElement('p');
                parrafoArtista.innerHTML = `<strong>Artista:</strong> ${cancion.artistName}`;

                // -- ÁLBUM (collectionName) --
                const parrafoAlbum = document.createElement('p');
                parrafoAlbum.innerHTML = `<strong>Álbum:</strong> ${cancion.collectionName || "Sencillo/Desconocido"}`;

                // -- AUDIO (previewUrl) --
                const reproductorAudio = document.createElement('audio');
                reproductorAudio.controls = true; // Muestra los controles de play/pausa
                reproductorAudio.src = cancion.previewUrl;

                // --- ENSAMBLAMOS LOS ELEMENTOS (appendChild) ---
                
                // Metemos los textos y el audio en su contenedor de info
                divInfo.appendChild(tituloCancion);
                divInfo.appendChild(parrafoArtista);
                divInfo.appendChild(parrafoAlbum);
                divInfo.appendChild(reproductorAudio);

                // Metemos la imagen y la info en la tarjeta principal
                divTarjeta.appendChild(imgCaratula);
                divTarjeta.appendChild(divInfo);

                // Finalmente, inyectamos la tarjeta completa en el div de resultados del HTML
                contenedorResultados.appendChild(divTarjeta);
            });
        })
        .catch(error => {
            console.error("Ha ocurrido un error:", error);
            contenedorResultados.innerHTML = "<p>Hubo un error al realizar la búsqueda.</p>";
        });
});