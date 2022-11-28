//11. Utilizando el objeto Date, añadir la propiedad created_date de manera interna en donde se registre el
// momento en que ese registro fue creado.


const users = [
    {
    id: 1,
    nombre: "Andres",
    apellido: "Perez",
    edad: 28,
    profesion: "ingeniero"
    }
]

function crearPropiedadDate(idUsuario) {
    users[idUsuario - 1]["created_date"] = new Date();
}

