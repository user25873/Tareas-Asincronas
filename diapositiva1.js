let importe = +prompt("Digite el importe de una compra");
let descuento = importe*0.12;

if (importe >= 150) {
    alert(`Se le descontó ${descuento} soles y el importe de compra final es ${importe - descuento} soles`)
} else {
    alert(`No se le descontó ningún monto y su importe de comprar final es ${importe}`)
}