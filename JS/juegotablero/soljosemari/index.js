function volverNegro(idDelCuadro) {
    
    // 1. Buscamos el cuadro exacto en la página web usando su ID
    let elCuadroQueTocaste = document.getElementById(idDelCuadro);
    
    // 2. Le cambiamos el color de fondo a negro
    elCuadroQueTocaste.style.backgroundColor = "black";
    
    if (estanTodosEnNegro())
    {
        alert("FIN DEL JUEGO")
    } else {
        console.log("No están todos en negro");
    }

}

function estanTodosEnNegro ()
{
    let todosEnNegro = false;

        let listaDivs = document.getElementsByClassName('cuadrito');
        //listaDivs.length
        for (let n = 0; n < listaDivs.length; n++)
        {
            console.log('Color ' + n + ' es ' + listaDivs[n].style.backgroundColor);
        }

    return todosEnNegro;
}