//corchetes [] -- varios -- Array, lista, colección
/*
TODO: HACED QUE CUANDO TOQUE LA COLUMNA NOMBRE, LA TABLA SE MUESTRE ORDENADO POR NOMBRE (de menor a mayor)
HACED QUE CUANDO TOQUE LA COLUMNA DE EDAD, LA TABLA SE MUESTRE ORDENADA POR LA EDAD (de menor a mayor)
*/
let alumnos = [
    {
        id: 1,
        nombre: "Ana",
        edad: 22,
        curso: "Desarrollo Web",
        email: "ana@email.com"
    },
    {
        id: 2,
        nombre: "Luis",
        edad: 25,
        curso: "JavaScript",
        email: "luis@email.com"
    },
    {
        id: 3,
        nombre: "Marta",
        edad: 21,
        curso: "HTML y CSS",
        email: "marta@email.com"
    },
    {
        id: 4,
        nombre: "Carlos",
        edad: 28,
        curso: "React",
        email: "carlos@email.com"
    },
    {
        id: 5,
        nombre: "Lucía",
        edad: 24,
        curso: "Angular",
        email: "lucia@email.com"
    },
    {
        id: 6,
        nombre: "Pedro",
        edad: 30,
        curso: "Java",
        email: "pedro@email.com"
    },
    {
        id: 7,
        nombre: "Sofía",
        edad: 23,
        curso: "Bases de Datos",
        email: "sofia@email.com"
    },
    {
        id: 8,
        nombre: "Javier",
        edad: 27,
        curso: "Docker",
        email: "javier@email.com"
    },
    {
        id: 9,
        nombre: "Elena",
        edad: 26,
        curso: "Git y GitHub",
        email: "elena@email.com"
    },
    {
        id: 10,
        nombre: "Miguel",
        edad: 29,
        curso: "Node.js",
        email: "miguel@email.com"
    },
     {
        id: 11,
        nombre: "Elena",
        edad: 21,
        curso: "Git y GitHub",
        email: "elena@email.com"
    },
    {
        id: 12,
        nombre: "Miguel",
        edad: 33,
        curso: "Node.js",
        email: "miguel@email.com"
    }
];

//console.log(alumnos[1].email);
//TODO: haced un método, que reciba la lista de 
// alumnos por parámetro y devuelva
//el nombre del alumno con mayor edad

function addAlumno() {
    let bodytabla = document.getElementById('bodytabla');
    //CREAR UNA FILA
    let filanueva = document.createElement('tr');
    //CREAR 4 COLUMNAS
    let columnaNombre = document.createElement('td');
    let columnaEdad = document.createElement('td');
    let columnaCurso = document.createElement('td');
    let columnaEmail = document.createElement('td');



    columnaNombre.textContent = alumnos[0].nombre;
    columnaEdad.textContent = alumnos[0].edad;
    columnaCurso.textContent = alumnos[0].curso;
    columnaEmail.textContent = alumnos[0].email;
    //A CADA COLUMNA LE TENGO QUE PONER LOS DATOS DEL ALUMNO
    filanueva.appendChild(columnaNombre);
    filanueva.appendChild(columnaEdad);
    filanueva.appendChild(columnaCurso);
    filanueva.appendChild(columnaEmail);

    //AÑADIR LA FILA A LA TABLA
    bodytabla.appendChild(filanueva);
}

function addUnAlumno(alumno) {
    let bodytabla = document.getElementById('bodytabla');
    //CREAR UNA FILA
    let filanueva = document.createElement('tr');
    //CREAR 4 COLUMNAS
    let columnaNombre = document.createElement('td');
    let columnaEdad = document.createElement('td');
    let columnaCurso = document.createElement('td');
    let columnaEmail = document.createElement('td');
    //añadimos COLUMNA botón BORRAR
    let columnaBorrar = document.createElement('td');
    let botonBorrar = document.createElement('button');
    botonBorrar.textContent = 'BORRAR';
    columnaBorrar.appendChild(botonBorrar);

    botonBorrar.addEventListener("click", () => {
        let confirmado = confirm('¿Quiere borrar este registro?');
        if (confirmado) {
            console.log('confirmó borrar');
            filanueva.remove();
            //TODO: borrar de verdad, del array y de la base de datos
        } else {
            console.log('canceló borrar');
        }
    })
    /*
        botonBorrar.addEventListener("mouseover", ()=> {
            console.log("pasó por encima");
        })
    
        botonBorrar.addEventListener("mouseout", ()=> {
            console.log("deja de estar encima");
        })
    */
    columnaNombre.textContent = alumno.nombre;
    columnaEdad.textContent = alumno.edad;
    columnaCurso.textContent = alumno.curso;
    columnaEmail.textContent = alumno.email;
    //A CADA COLUMNA LE TENGO QUE PONER LOS DATOS DEL ALUMNO
    filanueva.appendChild(columnaNombre);
    filanueva.appendChild(columnaEdad);
    filanueva.appendChild(columnaCurso);
    filanueva.appendChild(columnaEmail);
    //añadimos columna borrar
    filanueva.appendChild(columnaBorrar);
    //AÑADIR LA FILA A LA TABLA
    bodytabla.appendChild(filanueva);
}

function addAlumnos() {
    //FOR TRADICIONAL
    // for (let nalumno=0; nalumno < alumnos.length; nalumno++)
    // {
    //     addUnAlumno(alumnos[nalumno]);
    // }
    //FOR EACH
    alumnos.forEach(
        (alumno) => {
            addUnAlumno(alumno);
        }
    )
}

function addAlumnosFiltrados(arrayAlumnos) {
    //FOR TRADICIONAL
    // for (let nalumno=0; nalumno < alumnos.length; nalumno++)
    // {
    //     addUnAlumno(alumnos[nalumno]);
    // }
    //FOR EACH
    arrayAlumnos.forEach(
        (alumno) => {
            addUnAlumno(alumno);
        }
    )
}

function calcularMediaEdad() {
    let media = 0;
    let suma = 0;

    for (let n = 0; n < alumnos.length; n++) {
        suma = suma + alumnos[n].edad;
    }
    media = suma / alumnos.length;

    return media;
}


function calcularMayorEdad() {
    let mayor = 0;

    for (let nalumno = 0; nalumno < alumnos.length; nalumno++) {
        //si la edad del alumno actual es mayor que mayor, actulizo el nuevo mayor
        if (alumnos[nalumno].edad > mayor) {
            mayor = alumnos[nalumno].edad;
        }
    }

    return mayor;
}


//CALLBACK : llamada por detrás: otro programa, llama a mi código

function calcularMenorEdad() {
    let menor = alumnos[0].edad;


    for (let nalumno = 1; nalumno < alumnos.length; nalumno++) {
        //si la edad del alumno actual es mayor que mayor, actulizo el nuevo mayor
        if (alumnos[nalumno].edad < menor) {
            menor = alumnos[nalumno].edad;
        }
    }

    return menor;
}

function mostrarEstadisticas(media, mayorEdad, menorEdad) {
    //4 mostrar
    let divstats = document.getElementById('stats');
    divstats.textContent = `La media de edad es ${media} la mayor edad es ${mayorEdad}  y la menor edad es ${menorEdad}`;

}

function estadisticasEdad() {
    //1 CALCULO MEDIA DE EDAD
    let media = calcularMediaEdad();
    console.log("Media = " + media);
    console.log(`Media = ${media}`);
    //2 CALCULO MAYOR EDAD
    let mayorEdad = calcularMayorEdad();
    console.log(`Mayor de edad = ${mayorEdad}`);
    //3 CALCULO MENOR EDAD 
    let menorEdad = calcularMenorEdad();
    console.log(`Mayor de edad = ${mayorEdad}`);
    console.log(`La media de edad es ${media} la mayor edad es ${mayorEdad}  y la menor edad es ${menorEdad}`);
    mostrarEstadisticas(media, mayorEdad, menorEdad)
}

function borrarTodos() {

    let bodytabla = document.getElementById('bodytabla');
    bodytabla.innerHTML = "";


    //OBTENGO EL PADRE LAS FILAS TR 
    //SOLUCION DE ÁNGEL FUNCIONA
    /*let bodytabla = document.getElementById('bodytabla');
    while (bodytabla.firstChild)
    {
        bodytabla.removeChild(bodytabla.firstChild);
    }*/

}

let arrayPalabras = ["paco", "fotografía", "lechuga", "madrid"];
console.table('ARRAY ORIGINAL');
console.table(arrayPalabras);
arrayPalabras.sort();
console.table('ARRAY ORDENADO ALFABÉTICAMENTE (SIN FUNCIÓN) .sort');
console.table(arrayPalabras);
/*arrayPalabras.sort(
    (palabra1, palabra2) => {
        let numeroResultado = 0;
        //vamos a ordenar por la longitud
            if (palabra1.length > palabra2.length)
            {
                numeroResultado = 1;
            } else if (palabra1.length < palabra2.length) 
            {
                numeroResultado = -1
            } else {
                numeroResultado = 0;
            }

        return numeroResultado;
    }
);*/

arrayPalabras.sort(
    (palabra1, palabra2) => palabra1.length - palabra2.length
);
console.table('ARRAY ORDENADO POR LONGITUD DE PALABRA (de menor a mayor)');
console.table(arrayPalabras);

arrayPalabras.sort(
    (palabra1, palabra2) => palabra2.length - palabra1.length
);
console.table('ARRAY ORDENADO POR LONGITUD DE PALABRA (de mayor a menor)');
console.table(arrayPalabras);


function ordenarPorNombre() {
    //1 ORDENAR
    alumnos.sort(
        (alumno1, alumno2) => {
            let resultado = 0;

            if (alumno1.nombre > alumno2.nombre) { resultado = 1; }
            else if (alumno2.nombre > alumno1.nombre) { resultado = -1; }

            return resultado;
        }
    );
    //2 BORRAR LA TABLA
    borrarTodos();
    //3 PINTAR LA TABLA
    addAlumnos();
}

function ordenarPorNombreYEdad() {
    //1 ORDENAR
    alumnos.sort(
        (alumno1, alumno2) => {
            let resultado = 0;

                if (alumno1.nombre > alumno2.nombre) 
                    { resultado = 1; }
                else if (alumno2.nombre > alumno1.nombre) 
                    { resultado = -1; }
                else {
                    //mismo nombre
                    resultado = alumno1.edad - alumno2.edad;
                }

            return resultado;
        }
    );
    //2 BORRAR LA TABLA
    borrarTodos();
    //3 PINTAR LA TABLA
    addAlumnos();
}

function ordenarPorEdad() {
    //1 ORDENAR
    alumnos.sort(
        // (alumno1, alumno2) => {
        //     let resultado = 0;

        //     if (alumno1.edad > alumno2.edad) { resultado = 1; }
        //     else if (alumno2.edad > alumno1.edad) { resultado = -1; }

        //     return resultado;
        // }
        (alumno1, alumno2) => alumno1.edad - alumno2.edad
    );
    //2 BORRAR LA TABLA
    borrarTodos();
    //3 PINTAR LA TABLA
    addAlumnos();
}

//FILTRADO
window.onload = () => {
    let inputFiltro = document.getElementById("filtroNombre");

    //cuando el usuario, introduzca un valor en el input, salta esta función
    inputFiltro.addEventListener("input",
        () => {
            let textoIntroducido = inputFiltro.value;
            console.log(`textoIntroducido = ${textoIntroducido}`);

            //1 filtro los alumnos cuyo nombre empiece por textoIntroducido
            let alumnosFiltro = alumnos.filter(
                (alumno) => alumno.nombre.startsWith(textoIntroducido) 
                
            );
            //2 elimino las filas de la tabla
            borrarTodos();
            //3 repinto los registro de alumnos
            addAlumnosFiltrados(alumnosFiltro);
            //los alumnos que empicen por ese nombre
            //PISTA ÁNGEL
            /*
            let nombre="JUANITO";
            console.log(nombre.startsWith("J")); TRUE
            console.log(nombre.startsWith("JU")); TRUE
            console.log(nombre.startsWith("Js")); FALSE
            */
        }
    )
}