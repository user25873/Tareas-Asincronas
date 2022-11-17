let nombre = prompt("Ingrese el nombre del alumno");
let parcial = +prompt("Ingrese nota de examen parcial");
let final = +prompt("Ingrese nota de examen final");
let practicas = +prompt("Ingrese nota de promedio de practicas");
let promedio = (parcial + 2 * final + practicas) / 4;


if (promedio >= 11) {
    alert(`El alumno ${nombre} ha aprobado y su promedio final es ${promedio}`)
} else {
    alert(`El alumno ${nombre} ha desaprobado y su promedio final es ${promedio}`)
}