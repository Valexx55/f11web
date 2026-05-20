function mayorEdad () 
{
    //coger la edad del usuario, y mirar si es mayor o igual a 18
    //si es mayor o igual, le digo que es mayor de edad
    //si no, que no es mayor edad
    let inputedad = document.getElementById('edad');
    let edad = inputedad.value;

    if (edad >= 18)
    {
        window.alert('Es mayor de edad');
    } else {
        window.alert('Es menor de edad');
    }
}