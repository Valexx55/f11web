


// 1) OBTENER UBICACIÓN DEL USUARIO
let mapa;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(ubicacionOk, ubicacionError);
}

function ubicacionOk(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    // Centrar el mapa en la ubicación real


    // 2) LLAMAR AL API DEL TIEMPO
    const API_KEY = "a9a7bdfe37478c0c32bae0c23618ba87";
    const url = `https://api.openweathermap.org/data/2.5/weather?lang=es&units=metric&appid=${API_KEY}&lat=${lat}&lon=${lon}`;

    pintarMapa(lat, lon);

    fetch(url)
        .then(r => r.json())
        .then(data => {
            console.log("Tiempo recibido:", data);
            let popupHTML = popUp(data.name, data.weather[0].icon, data.main.temp, data.weather[0].description)



            // 4) MARCADOR + POPUP EN EL MAPA
            new maplibregl.Marker({ color: "red" })
                .setLngLat([lon, lat])
                .setPopup(new maplibregl.Popup().setHTML(popupHTML))
                .addTo(mapa);

            mapa.on("click", function (evento) {
                const longitud = evento.lngLat.lng;
                const latitud = evento.lngLat.lat;

                new maplibregl.Marker()
                    .setLngLat([longitud, latitud])
                    .addTo(mapa);

                
            });
        });
}

function ubicacionError() {
    alert("No se pudo obtener la ubicación");
}

function popUp(ciudad, icon, temp, desc) {

    let popupHTML = `
                <div style="
                    font-family: Arial, sans-serif;
                    padding: 10px;
                    width: 200px;
                    text-align: center;
                    border-radius: 10px;
                    background: #ffffffdd;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                ">
                    <h3 style="
                        margin: 0;
                        font-size: 18px;
                        color: #333;
                    ">${ciudad}</h3>

                    <img src="https://openweathermap.org/img/wn/${icon}@2x.png"
                         style="width: 80px; margin-top: 5px;">

                    <p style="
                        margin: 5px 0;
                        font-size: 20px;
                        font-weight: bold;
                        color: #222;
                    ">${temp}°C</p>

                    <p style="
                        margin: 0;
                        font-size: 14px;
                        color: #555;
                        text-transform: capitalize;
                    ">${desc}</p>
                </div>
            `;

    return popupHTML;

}

function pintarMapa(lat, lon) {
    mapa = new maplibregl.Map({
        container: 'map',
        zoom: 15,
        center: [lon, lat],
        pitch: 70,
        hash: true,
        style: {
            version: 8,
            sources: {
                osm: {
                    type: 'raster',
                    tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
                    tileSize: 256,
                    attribution: '&copy; OpenStreetMap Contributors',
                    maxzoom: 19
                }
            },
            layers: [
                {
                    id: 'osm',
                    type: 'raster',
                    source: 'osm'
                }
            ],

            sky: {}
        },
        maxZoom: 18,
        maxPitch: 0
    });

    mapa.addControl(
        new maplibregl.NavigationControl({
            visualizePitch: false,
            showZoom: true,
            showCompass: false
        })
    );


}
