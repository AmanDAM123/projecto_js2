const prompt = require('prompt-sync')();

let mes = prompt("Introduce el número del mes (1-12):");
let importe = prompt("Introduce el importe total de la compra:");

if (mes == 10) {
    let descuento = 0.15 * importe;
    let totalConDescuento = importe - descuento;
    console.log("Precio con descuento: " + totalConDescuento + "€");
} else {
    console.log("El importe a pagar es: " + importe + "€");
}