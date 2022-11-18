let numero1 = +prompt("Ingresa el primer número");
let numero2 = +prompt("Ingresa el segundo número");

function restar(a, b) {
    return a - b;
}

let resultado = restar(numero1, numero2);

alert(`El resultado de la resta es ${resultado}`)