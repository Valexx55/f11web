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
    let notan = parseInt(nota);//nota texto a nota numero
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