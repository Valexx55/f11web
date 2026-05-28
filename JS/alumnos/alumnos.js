//corchetes [] -- varios -- Array, lista, colección
/*
TODO: añadir un botón a la página alumno.html
con el texto Añadir todos
Cuando demos a ese botón, se deben mostrar
en la tabla (inicialmente vacía) todos los alumnos
del array alumnos

Además, añadid, un atributo nuevo a cada alumno
que es el id. Empezando por el 1 y siguiendo
por el 2, 3, 4, etc.
*/
let alumnos = [
    {
        nombre: "Ana",
        edad: 22,
        curso: "Desarrollo Web",
        email: "ana@email.com",
        id:1
    },
    {
        nombre: "Luis",
        edad: 25,
        curso: "JavaScript",
        email: "luis@email.com",
        id:2
    },
    {
        nombre: "Marta",
        edad: 21,
        curso: "HTML y CSS",
        email: "marta@email.com",
        id:3
    },
    {
        nombre: "Carlos",
        edad: 28,
        curso: "React",
        email: "carlos@email.com",
        id:4
    }
]

console.log(alumnos[1].email);
//TODO: haced un método, que reciba la lista de 
// alumnos por parámetro y devuelva
//el nombre del alumno con mayor edad

function addAlumno() 
{
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

function addUnAlumno(alumno) 
{
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

function addAlumnos ()
{
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

function calcularMediaEdad () {
    let media = 0;
    let suma = 0;

        for (let n=0; n<alumnos.length; n++)
        {
            suma = suma + alumnos[n].edad;
        }
         media = suma / alumnos.length;
    
    return media;
}


function calcularMayorEdad()
{
    let mayor = 0;

        for (let nalumno=0; nalumno<alumnos.length;nalumno++)
        {
            //si la edad del alumno actual es mayor que mayor, actulizo el nuevo mayor
            if (alumnos[nalumno].edad > mayor) {
                mayor = alumnos[nalumno].edad;
            }
        }
 
    return mayor;
}


//CALLBACK : llamada por detrás: otro programa, llama a mi código


function estadisticasEdad (){
    //1 CALCULO MEDIA DE EDAD
    let media = calcularMediaEdad();
    console.log("Media = " +media);
    console.log(`Media = ${media}`);
    //2 CALCULO MAYOR EDAD
    let mayorEdad = calcularMayorEdad();
    console.log(`Mayor de edad = ${mayorEdad}`);
    //3 CALCULO MENOR EDAD 
    let menorEdad = calcularMenorEdad();
    console.log(`Mayor de edad = ${mayorEdad}`);
    console.log(`La media de edad es ${media} la mayor edad es ${mayorEdad}  y la menor edad es ${menorEdad}`);

}