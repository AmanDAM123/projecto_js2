const prompt = require('prompt-sync')();

let A = prompt("Introduce el valor de A:");
let B = prompt("Introduce el valor de B:");

if (A > B) {
    console.log("El mayor número es A: " + A);
} else if (B > A) {
    console.log("El mayor número es B: " + B);
} else {
    console.log("Ambos números son iguales.");
}