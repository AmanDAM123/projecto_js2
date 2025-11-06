const prompt = require("prompt-sync")();
let altura = parseInt(prompt("Ingrese la altura de la pirámide invertida:"));

if (altura <= 0) {
    console.log("Error: la altura debe ser mayor que 0.");
} else {

    let base = altura * 2 - 1;

    for (let i = 0; i < altura; i++) {
        let linea = "";

      
        for (let j = 0; j < i; j++) {
            linea = linea + " ";
        }

        for (let k = 0; k < base - (i * 2); k++) {
            linea = linea + "*";
        }

        console.log(linea);
    }
}