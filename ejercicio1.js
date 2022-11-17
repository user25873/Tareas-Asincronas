let nombre = prompt("Ingrese el nombre del trabajador");
let sueldo = +prompt("Ingrese el sueldo del trabajador");
let hijos = +prompt("Ingrese el número de hijos");
let bonificacion = parseInt((sueldo*(7/100)).toFixed(2));
let sueldoFinal = sueldo + bonificacion;

if (hijos >= 1) {
    alert(`Recibes ${bonificacion} soles de bonificación y tu sueldo final es ${sueldoFinal}`)
} else {
    alert(`No recibes ninguna bonificación y tu sueldo final es ${sueldo}`)
}
