let numero1 = +prompt("Ingresa la temperatura en Farenheit");

function convertirACelsius(a) {
    return (a - 32) * (5 / 9);
}

let resultado = convertirACelsius(numero1);

alert(`${numero1} grados Farenheit es equivalente a ${resultado} grados Celsius`)

