let catA = 40
let catB = 35
let catC = 30

let bon1 = 0.15
let bon4 = 0.2
let bon8 = 0.3
let bon13 = 0.35

function calcularSueldo() {
    let categoria = document.getElementById("categoria").value;
    let horasMes = document.getElementById("horasMes").value
    if (categoria === "A") {
        document.getElementById("categoriaT").innerHTML = categoria;
        document.getElementById("sueldoBasico").innerHTML = catA * horasMes;
    } else if (categoria === "B") {
        document.getElementById("categoriaT").innerHTML = categoria;
        document.getElementById("sueldoBasico").innerHTML = catB * horasMes;
    } else if (categoria === "C") {
        document.getElementById("categoriaT").innerHTML = categoria;
        document.getElementById("sueldoBasico").innerHTML = catC * horasMes;
    }
}


function calcularBonos() {
    calcularSueldo()
    let sueldo = document.getElementById("sueldoBasico").value

    let tiempoServ = document.getElementById("tiempoServicio").value;
    if (tiempoServ === "1-3") {
        document.getElementById("servicio").innerHTML = tiempoServ;
        document.getElementById("bonServicio").innerHTML = sueldo * bon1;
    } else if (tiempoServ === "4-7") {
        document.getElementById("servicio").innerHTML = tiempoServ;
        document.getElementById("bonServicio").innerHTML = sueldo * bon4;
    } else if (tiempoServ === "8-12") {
        document.getElementById("servicio").innerHTML = tiempoServ;
        document.getElementById("bonServicio").innerHTML = sueldo * bon8;
    } else if (tiempoServ === "13+") {
        document.getElementById("servicio").innerHTML = tiempoServ;
        document.getElementById("bonServicio").innerHTML = sueldo * bon13;
    }
    document.getElementById("sueldoNeto").innerHTML = sueldo * 0.8
}




