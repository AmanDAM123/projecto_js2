const prompt = require('prompt-sync')();

let dia = prompt("Introduce el día:");
let mes = prompt("Introduce el mes (1-12):");
let año = prompt("Introduce el año:");

if (año <= 0) {
    console.log("El año debe ser mayor que 0.");
} else {
    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    
    if (mes < 1 || mes > 12) {
        console.log("El mes no es válido.");
    } else {
        let diasMaximos;
        if (mes == 2) {
            diasMaximos = (año % 4 == 0 && (año % 100 != 0 || año % 400 == 0)) ? 29 : 28;
        } else if ([4, 6, 9, 11].includes(mes)) {
            diasMaximos = 30;
        } else {
            diasMaximos = 31;
        }

        if (dia < 1 || dia > diasMaximos) {
            console.log("El día no es válido para ese mes.");
        } else {
            console.log(dia + " de " + meses[mes - 1] + " de " + año);
        }
    }
}