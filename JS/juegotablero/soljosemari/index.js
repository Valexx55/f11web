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

//window.onload = pintarNumeracion;//sin paréntesis, se programa la llamada futura    
window.onload = pintarNumeracion();//sin paréntesis, se programa la llamada futura    

function pintarNumeracion ()
{
    //recorrer los divs y pintar un número en cada uno
   let cuadritos = document.getElementsByClassName('cuadrito');

   for (let n = 0; n < cuadritos.length; n++)
   {
     cuadritos[n].textContent = n+1;
   }

   pintarCuadradosEnRosa ();
}


function pintarCuadradosEnRosa ()
{
    //recorrer los divs y pintar un número en cada uno
   let cuadritos = document.getElementsByClassName('cuadrito');

   for (let n = 0; n < cuadritos.length; n++)
   {
     if (n%2==0)
     {
        cuadritos[n].style.backgroundColor='pink';
     } else {
        cuadritos[n].style.backgroundColor='white';
     }
   }

}

function pintarCuadradosEnAzul ()
{
    //recorrer los divs y pintar un número en cada uno
   let cuadritos = document.getElementsByClassName('cuadrito');

    for (let n = 0; n < cuadritos.length; n++)
   {
     if (n%2==0)
     {
        cuadritos[n].style.backgroundColor='white';
     } else {
        cuadritos[n].style.backgroundColor='blue';
     }
   }

}

let esTableroRosa = true;
let contadorCambios = 0;
//setInterval(saluda, 7000);
let idAlarma = setInterval(cambiarColor, 3000);

function cambiarColor ()
{
  if (esTableroRosa){
    pintarCuadradosEnAzul();
    esTableroRosa=false;
    contadorCambios=contadorCambios+1;
  } else {
    pintarCuadradosEnRosa();
    esTableroRosa=true;
  }
  if (contadorCambios==3)
  {
    //TODO: parar el intervalo
    clearInterval(idAlarma);
  }
}


function saluda ()
{
    alert("HOLA QUÉ pasa :)")
}








