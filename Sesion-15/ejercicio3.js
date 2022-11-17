let numero = +prompt("Ingrese un número para calcular el factorial");
let factorial = 1;

for(let i=numero; i >= 1; i--) {
    factorial = factorial * i;
}

alert(`El factorial del número ingresado es ${factorial}`)