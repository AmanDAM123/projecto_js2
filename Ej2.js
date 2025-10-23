const prompt = require('prompt-sync')();

let A = prompt("Introduce el valor de A:");
let B = prompt("Introduce el valor de B:");

let suma = A + B;
let resta = A - B;
let producto = A * B;
let division = (B !== 0) ? A / B : "No se puede dividir entre cero"; // Verificar que B no sea 0

console.log("La suma de A y B es: " + suma);
console.log("La resta de A y B es: " + resta);
console.log("El producto de A y B es: " + producto);
console.log("La división de A y B es: " + division);