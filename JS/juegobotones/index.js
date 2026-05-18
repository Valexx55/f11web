//VARIABLES PREDEFINIDAS
//ÁMBITO GLOBAL
//window
//console
//document DOM

//variables PROPIAS
//número de goles a favor
//número de goles en contra
//trabajdor

//FUNCIONES
//alert
//log
//TODO: vamos a llevar la cuenta de cuántas veces ha tocado un botón
//y después, cuando haya tocado 3 veces, sacamos un alert
//informando al usuario
let cuentaClicks = 0;

//ÁMBITO GLOBAL (SCOPE)
console.log("HOLA desde fuera");
//vamos a obtener, a través del document, el botón
//de saludar
let botonsaludo = document.getElementById("btnsaluda");
console.log(botonsaludo.id);



//ÁMBITO LOCAL (SCOPE)
//VARIABLES LOCALES: QUE SE DECLARAN DENTRO DE UNA FUNCIÓN
//Y SÓLO EXISTEN AHÍ, MIENTRAS SE EJECUTA LA FUNCIÓN
//CUANDO LA FUNCIÓN ACABA, LA VARIABLE NO EXISTE
//PEJ: botonsaludo
function saludar() {//INICIO FUNCIÓN
    console.log("Hola desde adentro");
    //llamada a la función
    //TODO: Haced un botón nuevo, llamado Mostrar Info
    //para que se ejecute la función mostrarInfoPantalla
    let botonsaludo = document.getElementById("btnsaluda");
    console.log(botonsaludo.id);
    botonsaludo.style.backgroundColor = "red";
    botonsaludo.style.color = "white";
    cuentaClicks = cuentaClicks + 1;
    //CONCATENAR = UNIR PALABRAS +
    console.log("Cuenta = " + cuentaClicks);
    //alert("Llevas "+ cuentaClicks + " clicks");
    if (cuentaClicks == 3) {
        alert("Llevas " + cuentaClicks + " clicks");
    }
}//FIN DE LA FUNCIÓN

//nomenclatura camelCase en el nombre de funciones
function mostrarInfoPantalla() {
    //declaro una variable, que se llama ubicación
    //y cuyo valor es window.location.href
    let ubicacion = window.location.href;
    console.log(window.location.href);
    console.log(ubicacion);
    let ancho = window.innerWidth;
    console.log(window.innerWidth);
    let alto = window.innerHeight;
    console.log(window.innerHeight);

    let botonpantalla = document.getElementById("btninfo");
    console.log(botonpantalla.id);
    botonpantalla.style.backgroundColor = "green";
    botonpantalla.style.color = "white";

    cuentaClicks = cuentaClicks + 1;
    console.log("Cuenta = " + cuentaClicks);
    if (cuentaClicks == 3) {
        alert("Llevas " + cuentaClicks + " clicks");
    }
}

function ocultarBotones() {
    //TODO: ocultar los botones de saluda y info
    let botonsaluda = document.getElementById("btnsaluda");
    let botoninfo = document.getElementById("btninfo");
    //ocultarlos
    botonsaluda.style.display = "none";
    botoninfo.style.display = "none";
    cuentaClicks = cuentaClicks + 1;
    console.log("Cuenta = " + cuentaClicks);
    if (cuentaClicks == 3) {
        alert("Llevas " + cuentaClicks + " clicks");
    }
}


function ocultarYMostrarBotones() {
    //SI PONE OCULTAR
    let botonOcultar = document.getElementById('btnocultar');
    let textoBoton = botonOcultar.textContent;
    if (textoBoton == 'Ocultar') {
        console.log('Estoy en ocultar');
        //COJO LOS BOTONES
        let botonInfo = document.getElementById('btninfo');
        let botonSaluda = document.getElementById('btnsaluda');
        //LOS PONGO A DISPLAY NONE
        botonInfo.style.display = 'none';
        botonSaluda.style.display = 'none';
        //CAMBIO DE OCULTAR A MOSTRAR
        botonOcultar.textContent = 'Mostrar';

    }

    else {
        //TODO: COMPLETAR EL EJERCICIO
        console.log('Estoy en mostrar');
        //SI NO, (PONE MOSTRAR)
        //COJO LOS BOTONES
        //LOS PONGO A DISPLAY INLINE-BLOCK
        //CAMBIAR DE MOSTRAR A OCULTAR
    }
    

}



