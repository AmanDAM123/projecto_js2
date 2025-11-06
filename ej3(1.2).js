const prompt = require("prompt-sync")();
const numeroCorrecto = 26;

console.log("¡Adivina el número entre 1 y 100!");

let numeroUsuario;
let resultado = -2; 

while (resultado != 0) {
    do {
        numeroUsuario = parseInt(prompt("Introduce un número entre 1 y 100: "));
        if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
            console.log("Número no válido. Intenta de nuevo.");
        }
    } while (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100);

    if (numeroUsuario == numeroCorrecto) {
        resultado = 0;
        console.log("¡Felicidades! Has adivinado el número.");
    } else if (numeroUsuario > numeroCorrecto) {
        resultado = 1;
        console.log("El número correcto es menor.");
    } else {
        resultado = -1;
        console.log("El número correcto es mayor.");
    }
}