
//TODO: USANDO EL API DE LOCALSTORAGE, HACED, QUE EL JUEGO DE ADIVINA, TENGA MEMORIA
/*quiere decir, que si dejo una partida a medias, guarde el número secreto
y el número de intentos que le quedan al usuario. Y si acaba una partida, 
que se desahaga de esa información
*/
let numero_secreto = calcularNumeroSecreto();
console.log(`num sercreto = ${numero_secreto}`);
localStorage.setItem("NUM_SECRETO", numero_secreto);//guardo
const MAX_INTENTOS = 5;
let num_intentos = 0;
localStorage.setItem("NUM_INTENTOS", num_intentos);
localStorage.clear();//borro 

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
}

function probar() {
    let num_usuario = document.getElementById('numusuario').value;
    if (num_usuario == numero_secreto) {
        finJuego(true);
    } else {
        //no acierto
        num_intentos = num_intentos + 1;
        let etiquetaIntentos = document.getElementById('numintentos');
        etiquetaIntentos.textContent = MAX_INTENTOS - num_intentos;
        if (num_intentos == MAX_INTENTOS) {
            finJuego(false);
        } else {
            //pista
            if (num_usuario > numero_secreto) {
                alert('El número buscado es menor');
            } else {
                alert('El número buscado es mayor');
            }
        }
    }
}

function reiniciar() {
    location.reload();
}