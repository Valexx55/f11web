function mayorEdad() {
    //coger la edad del usuario, y mirar si es mayor o igual a 18
    //si es mayor o igual, le digo que es mayor de edad
    //si no, que no es mayor edad
    let inputedad = document.getElementById('edad');
    let edad = inputedad.value;

    if (edad >= 18) {
        window.alert('Es mayor de edad');
    } else {
        window.alert('Es menor de edad');
    }
}

function buscarLetra() {
    //coger la palabra
    let palabra = document.getElementById('palabra').value;
    //coger la letra
    let letra = document.getElementById('letra').value;

    let numresultado = palabra.indexOf(letra);
    if (numresultado == -1) {
        window.alert('la letra no está');
    } else {
        window.alert('la letra sí esta');
    }
}


function buscarLetraFor() {
    let encontrado = false;
    //coger la palabra
    let palabra = document.getElementById('palabra').value;
    //coger la letra
    let letra = document.getElementById('letra').value;

    for (let posicion = 0; posicion < palabra.length; posicion = posicion + 1) {
        let letraActual = palabra.charAt(posicion);
        console.log(letraActual);
        if (letraActual == letra) {
            //alert('Pertenece');
            encontrado = true;
        }
    }

    if (encontrado)//(encontrado==true)
    {
        alert('La letra pertenece')
    } else {
        alert('la letra no pertenece')
    }
}


function buscarLetraWhile() {
    let encontrado = false;
    //coger la palabra
    let palabra = document.getElementById('palabra').value;
    //coger la letra
    let letra = document.getElementById('letra').value;

    let posicion = 0;
    let longitud = palabra.length;
    let letraActual = "";//cadena vacía

    while ((encontrado == false) && (posicion < longitud)) {
        letraActual = palabra.charAt(posicion);
        if (letraActual == letra) {
            encontrado = true;
        } else {
            posicion = posicion + 1;
        }
    }
    if (encontrado)//(encontrado==true)
    {
        alert('La letra pertenece')
    } else {
        alert('la letra no pertenece')
    }

}



function mostrarNotaIf() {
    //leer nota
    let nota = document.getElementById('nota').value;
    if (nota < 5) {
        window.alert('SUSPENSO');
    } else if (nota == 5) {
        window.alert('APROBADO');
    } else if (nota < 7) {
        window.alert('BIEN');
    } else if (nota < 9) {
        window.alert('NOTABLE');
    } else {
        window.alert('SOBRESALIENTE');
    }
}

function mostrarNotaSwitch() {
    //TODO: haced el mismo cálculo de nota, pero con Switch
    //ayuda: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch
    let nota = document.getElementById('nota').value;
    let notan = parseInt(nota);//nota texto a nota numero -castear: cambiar de tipos "casting"
    switch (notan) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4: window.alert('SUSPENSO');
            break;//final del if, siempre hay que ponero
        case 5: window.alert('APROBADO');
            break;
        case 6: window.alert('BIEN');
            break;
        case 7:
        case 8: window.alert('NOTABLE');
            break;
        case 9:
        case 10: window.alert('SOBRESALIENTE');
            break;
        default: window.alert('NOTA INCORRECTA');

    }
}

function mostrarMayor() {
    console.log('Ha tocado calcular mayor');
    //TODO: calcular el mayor de los 3
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;

    if (num1 > num2) {
        if (num1 > num3) {
            window.alert("El mayor es N1");
        } else {
            window.alert("El mayor es N3");
        }

    } else /*if (num2 > num1)*/ {
        if (num2 > num3) {
            window.alert("El mayor es N2");
        } else {
            window.alert("El mayor es N3");
        }
    }

}

function mostrarSecuencia() {

    for (let n = 3; n <= 99; n = n + 3) {
        window.alert(n);
    }
}


function mostrarSecuenciapar() {

    for (let n = 2; n <= 50; n = n + 2) {
        window.alert(n)
    }

}