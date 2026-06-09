//TODO: partiendo de este ejemplo, crear el tablero y los botones de manera programática. Es decir, con JS, no desde HTML
//Definir los listener (onclick), también con JS
//para cada botón, indicad el type, el aria-pressed, el aria describedby el aria-label igual con JS
// OPCIONAL: MEJORAR LA ACCESIBILIDAD Y USABILIDAD
let numCuadrosNegro = 0;

function volverNegro(idDelCuadro) {
    
    // 1. Buscamos el cuadro exacto en la página web usando su ID
    let elCuadroQueTocaste = document.getElementById(idDelCuadro);
    numCuadrosNegro = numCuadrosNegro +1;
    
    // 2. Le cambiamos el color de fondo a negro
    elCuadroQueTocaste.style.backgroundColor = "black";
    elCuadroQueTocaste.setAttribute("aria-pressed", true);
    
    if (estanTodosEnNegro())
    {
        alert("FIN DEL JUEGO")
    } else {
        console.log("No están todos en negro");
    }

    cambiarMensaje();

}

function cambiarMensaje()
{
  let ptablero = document.getElementById("estadoTablero")
  ptablero.textContent = "El tablero tiene "+ numCuadrosNegro+ " cuadros negros de 9"
}

function estanTodosEnNegro ()
{
    let todosEnNegro = false;

        todosEnNegro = (numCuadrosNegro == 9);

        if (numCuadrosNegro == 9)
        {
          todosEnNegro = true;
        } else {
          todosEnNegro = false;
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








