let numero = +prompt(`Ingresa un número`);
let porcentaje = (numero * 0.18).toFixed(2);

if (numero > 500) {
    alert(`El número es mayor que 500 y el 18% del número es ${porcentaje}`)
} else {
    alert(`El número No es mayor que 500.`)
}