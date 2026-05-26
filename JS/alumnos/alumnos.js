//corchetes [] -- varios -- Array, lista, colección
let alumnos = [
    {
        nombre: "Ana",
        edad: 22,
        curso: "Desarrollo Web",
        email: "ana@email.com"
    },
    {
        nombre: "Luis",
        edad: 25,
        curso: "JavaScript",
        email: "luis@email.com"
    },
    {
        nombre: "Marta",
        edad: 21,
        curso: "HTML y CSS",
        email: "marta@email.com"
    },
    {
        nombre: "Carlos",
        edad: 28,
        curso: "React",
        email: "carlos@email.com"
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