function volverNegro(idDelCuadro) {
    
    // 1. Buscamos el cuadro exacto en la página web usando su ID
    let elCuadroQueTocaste = document.getElementById(idDelCuadro);
    
    // 2. Le cambiamos el color de fondo a negro
    elCuadroQueTocaste.style.backgroundColor = "black";
}