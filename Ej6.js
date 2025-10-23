const prompt = require('prompt-sync')();

let totalEstudiantes = prompt("Introduce el número total de estudiantes:");
let numeroNiños = prompt("Introduce el número de niños:");
let numeroNiñas = totalEstudiantes - numeroNiños; // El total menos los niños es el número de niñas

let porcentajeNiños = (numeroNiños / totalEstudiantes) * 100;
let porcentajeNiñas = (numeroNiñas / totalEstudiantes) * 100;

console.log("Porcentaje de niños: " + porcentajeNiños.toFixed(2) + "%");
console.log("Porcentaje de niñas: " + porcentajeNiñas.toFixed(2) + "%");