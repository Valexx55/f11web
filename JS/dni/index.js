const SECUENCIA_LETRAS_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

function validarDni() {
    console.log('ha tocado el botón de validar');
    //1 obtener numero, prefijo, letra
    let numero = document.getElementById('numero').value; 
    console.log('numero intro = ' + numero);
    let letra = document.getElementById('letra').value; 
    console.log('letra intro = ' + letra);
    //2 calculo de la letra
    let resto = numero % 23;
    console.log('resto = ' + resto);
    //3 comprobamos la letra 
    let letraCalculada = SECUENCIA_LETRAS_DNI.charAt(resto);
   // SECUENCIA_LETRAS_DNI.endsWith
    console.log('Letra calculada = ' + letraCalculada);
    //4 informar
    if (letra==letraCalculada){
        window.alert("DNI CORRECTO bien :)!");
    }else {
        window.alert("DNI INCORRECTO mal :)!");
    }






}