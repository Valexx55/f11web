
//TODO: USANDO EL API DE LOCALSTORAGE, HACED, QUE EL JUEGO DE ADIVINA, TENGA MEMORIA
/*quiere decir, que si dejo una partida a medias, guarde el número secreto
y el número de intentos que le quedan al usuario. Y si acaba una partida, 
que se desahaga de esa información
*/

window.onload = () => {
    actualizarMarcadorIntentos();
}

const MAX_INTENTOS = 5;
let numero_secreto = 0;
let num_intentos = 0;

//si hay partida guardada
if (partidaGuardada())
{
    recueperarDatos();

} else {
    //inicio partida
    numero_secreto = calcularNumeroSecreto();
    console.log(`num sercreto = ${numero_secreto}`);
    num_intentos = 0;
    actulizarPartida ();
}

function calcularNumeroSecreto() {
    let numero_secreto = 0;

    numero_secreto = Math.floor(Math.random() * 100) + 1;

    return numero_secreto;
}

function finJuego(ganador) {
    if (ganador) {
        //acierto
        alert('Has acertado, ¡Enhorabuena!');
        let imagen = document.getElementById('imgresultado');
        imagen.src = 'victoria.gif';
        let botonReinicio = document.getElementById('reiniciar');
        botonReinicio.style.display = 'block';
    } else {
        alert('Has perdido, ¡GAME OVER!');
        let imagen = document.getElementById('imgresultado');
        imagen.src = 'derrota.gif';
        let botonReinicio = document.getElementById('reiniciar');
        botonReinicio.style.display = 'block';
    }
    limpiarPartida();
}

function actualizarMarcadorIntentos ()
{
    let etiquetaIntentos = document.getElementById('numintentos');
    etiquetaIntentos.textContent = MAX_INTENTOS - num_intentos;
}

function probar() {
    let num_usuario = document.getElementById('numusuario').value;
    if (num_usuario == numero_secreto) {
        finJuego(true);
    } else {
        //no acierto
        num_intentos = num_intentos + 1;
        actualizarMarcadorIntentos();
        if (num_intentos == MAX_INTENTOS) {
            finJuego(false);
        } else {
            //pista le quedan vidas
            if (num_usuario > numero_secreto) {
                alert('El número buscado es menor');
            } else {
                alert('El número buscado es mayor');
            }
            actulizarPartida ();
        }
    }
}

function reiniciar() {
    location.reload();
}

function partidaGuardada ()
{
    let guardada = false;

   
        if (localStorage.getItem('NUM_SECRETO') && localStorage.getItem('NUM_INTENTOS'))
        {
            guardada = true
        }

    return guardada;
}

function limpiarPartida ()
{
    localStorage.clear();
}

function actulizarPartida ()
{
    localStorage.setItem('NUM_INTENTOS', num_intentos);
    localStorage.setItem('NUM_SECRETO', numero_secreto);
}

function recueperarDatos ()
{
    numero_secreto = localStorage.getItem('NUM_SECRETO');
    num_intentos = localStorage.getItem('NUM_INTENTOS');
}