//TODO: Una vez obtenida la ubicación del usuario
/*
debemos invocar al API del tiempo

1) completando el valor de los parámetros obtenidos:
-appid cada uno el suyo
-lat y lon los valores obtenidos tras el uso del api geolocation (esta demo)
https://api.openweathermap.org/data/2.5/weather?lang=es&units=metric&appid=API_PERSONAL&lat=LATITUD_OBTENIDA&lon=LONGITUD_OBTENIDA

2) mostrar por consola el JSON recibido con la info del tiempo

*/
function obtenerUbicacion() 
{
    if (navigator.geolocation)
    {
        console.log("existe el api de geolocation");
        document.getElementById("resultado").textContent = "Solicitando ubicación ..."

        navigator.geolocation.getCurrentPosition(ubicacionOk, ubicacionError);
    } else {
        alert("Navegador antiguo, sin acceso a la ubicación");
    }
}

function ubicacionOk(posicionObtenida)
{

    let latitud = posicionObtenida.coords.latitude;
    let longitud = posicionObtenida.coords.longitude;

    document.getElementById("resultado").textContent = `LAT = ${latitud} LONG = ${longitud}`

}

function ubicacionError(coderror)
{
    switch(coderror)
    {
        case 1: 
            alert("sin permiso del usuario");
        break;
        case 2: 
            alert("sin acceso a la ubicación");
        break;
        case 3: 
            alert("se demoró demasiado");
        break;
        default:   alert("error desconocido");
    }

    document.getElementById("resultado").textContent = `SIN ACCESO A LA UBICACIÓN`;

}