


let esTableroRosa = true;
let contadorCambios = 0;
let idAlarma;

// Almacenar los cuadros en un array para facilitar la navegación por coordenadas
let listaCuadritos = [];

window.onload = iniciarJuego;

function iniciarJuego() {
    // 1. Construir el tablero programáticamente primero
    crearTablero();

    // 2. Pintar los colores iniciales
    pintarCuadradosEnRosa();

    // 3. Respetar las preferencias de movimiento del sistema
    const prefiereMovimientoReducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefiereMovimientoReducido) {
        idAlarma = setInterval(cambiarColor, 1500);
    } else {
        anunciar("Animaciones automáticas desactivadas por configuración del sistema.");
    }
}

function crearTablero() {
    const tablero = document.getElementById('tablero');
    tablero.innerHTML = ''; // Limpiar el contenedor por seguridad
    listaCuadritos = []; // Reiniciar el array
    let idContador = 0;

    // Crear un grid de 3x3
    for (let i = 0; i < 3; i++) {
        // Crear fila
        const fila = document.createElement('div');
        fila.setAttribute('role', 'row');
        fila.classList.add('fila');

        for (let j = 0; j < 3; j++) {
            const btn = document.createElement('button');
            const indiceActual = idContador; // Guardamos el índice actual para el listener
            
            // Atributos básicos y clases
            btn.id = `cuadro${idContador + 1}`;
            btn.classList.add('cuadrito');
            btn.textContent = idContador + 1;
            
            // --- ATRIBUTOS SOLICITADOS ---
            btn.type = 'button'; // Evita que actúe como "submit" por accidente
            btn.setAttribute('role', 'gridcell');
            btn.setAttribute('aria-describedby', 'info-boton'); // Vinculado al span oculto en HTML
            btn.setAttribute('aria-label', `Cuadro ${idContador + 1}`);
            
            // Roving tabindex: Solo el primero es enfocable inicialmente
            //btn.setAttribute('tabindex', idContador === 0 ? '0' : '-1');

            // --- LISTENERS DINÁMICOS ---
            btn.addEventListener('click', () => volverNegro(btn.id));
            //btn.addEventListener('keydown', (e) => manejarTeclado(e, indiceActual));

            fila.appendChild(btn);
            listaCuadritos.push(btn);
            idContador++;
        }
        tablero.appendChild(fila);
    }
}

function volverNegro(idDelCuadro) {
    let elCuadroQueTocaste = document.getElementById(idDelCuadro);
    
    if (elCuadroQueTocaste.getAttribute('aria-disabled') === 'true') return;
    
    // Mejoras de accesibilidad: Actualizar estados ARIA semánticos
    elCuadroQueTocaste.setAttribute("aria-disabled", "true");
    elCuadroQueTocaste.setAttribute("aria-pressed", "true"); // Indica que ya fue presionado
    
    // Eliminamos el describedby porque la acción ya se hizo, y actualizamos el label
    elCuadroQueTocaste.removeAttribute("aria-describedby");
    elCuadroQueTocaste.setAttribute("aria-label", `Cuadro ${elCuadroQueTocaste.textContent}, negro e inactivo`);
    
    anunciar(`Cuadro ${elCuadroQueTocaste.textContent} cambiado a negro.`);
    
    if (estanTodosEnNegro()) {
        clearInterval(idAlarma);
        setTimeout(() => {
            alert("¡FIN DEL JUEGO!");
            anunciar("Fin del juego. Todos los cuadros están en negro.");
        }, 150);
    }
}

function estanTodosEnNegro() {
    return listaCuadritos.every(cuadro => cuadro.getAttribute('aria-disabled') === 'true');
}

function pintarCuadradosEnRosa() {
    listaCuadritos.forEach((cuadro, n) => {
        if (cuadro.getAttribute('aria-disabled') !== 'true') {
            let color = (n % 2 === 0) ? 'pink' : 'white';
            cuadro.style.backgroundColor = color;
            cuadro.style.color = 'black';
            // Actualizamos el label dinámicamente con el color actual
            cuadro.setAttribute("aria-label", `Cuadro ${n + 1}, color ${color === 'pink' ? 'rosa' : 'blanco'}`);
        }
    });
}

function pintarCuadradosEnAzul() {
    listaCuadritos.forEach((cuadro, n) => {
        if (cuadro.getAttribute('aria-disabled') !== 'true') {
            let color = (n % 2 === 0) ? 'white' : 'blue';
            cuadro.style.backgroundColor = color;
            cuadro.style.color = color === 'blue' ? 'white' : 'black';
            cuadro.setAttribute("aria-label", `Cuadro ${n + 1}, color ${color === 'blue' ? 'azul' : 'blanco'}`);
        }
    });
}

function cambiarColor() {
    if (esTableroRosa) {
        pintarCuadradosEnAzul();
        esTableroRosa = false;
        contadorCambios++;
    } else {
        pintarCuadradosEnRosa();
        esTableroRosa = true;
    }
    
    if (contadorCambios === 3) {
        clearInterval(idAlarma);
        anunciar("El tablero ha dejado de cambiar de colores.");
    }
}

function manejarTeclado(evento, indiceActual) {
    let nuevoIndice = indiceActual;

    switch (evento.key) {
        case 'ArrowRight':
            if (indiceActual % 3 !== 2) nuevoIndice = indiceActual + 1;
            break;
        case 'ArrowLeft':
            if (indiceActual % 3 !== 0) nuevoIndice = indiceActual - 1;
            break;
        case 'ArrowDown':
            if (indiceActual < 6) nuevoIndice = indiceActual + 3;
            break;
        case 'ArrowUp':
            if (indiceActual >= 3) nuevoIndice = indiceActual - 3;
            break;
        case 'Home':
            nuevoIndice = 0;
            break;
        case 'End':
            nuevoIndice = 8;
            break;
        default:
            return;
    }

    evento.preventDefault(); 
    
    listaCuadritos[indiceActual].setAttribute('tabindex', '-1');
    listaCuadritos[nuevoIndice].setAttribute('tabindex', '0');
    listaCuadritos[nuevoIndice].focus();
}