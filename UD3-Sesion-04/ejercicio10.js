//10. Crear una funcion que te permita ingresar en un prompt la informacion de un usuario de la siguiente manera:
// "Ingrese la informacion del usuario (nombre, apellido, edad, profesion)"
// El usuario digitara: Andres, Perez, 28, ingeniero.
// La informacion debe ser guardada como objeto dentro del array users asignadole un id unico a cada registro.


const users = [];

function ingresarDatos() {
    const objeto = {}
    let datos = prompt("Ingrese la información del usuario (nombre, apellido, edad, profesión)")
    let arregloDatos = datos.split(", ")
    objeto["id"] = users.length + 1
    objeto["nombre"] = arregloDatos[0]
    objeto["apellido"] = arregloDatos[1]
    objeto["edad"] = arregloDatos[2]
    objeto["profesion"] = arregloDatos[3]
    users.push(objeto)
    console.log(users)
}
