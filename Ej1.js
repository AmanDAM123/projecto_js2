const prompt = require('prompt-sync')();

let A = prompt("Introduce el valor de A:");
let B = prompt("Introduce el valor de B:");

let cambio = A;
A = B;
B = cambio;

console.log("Valor de A después del intercambio: " + A);
console.log("Valor de B después del intercambio: " + B);