const prompt = require('prompt-sync')();

let tieneBachiller = prompt("¿Tienes el título de bachiller? (sí/no)").toLowerCase();
let haSuperadoPrueba = prompt("¿Has superado la prueba de acceso? (sí/no)").toLowerCase();

if (tieneBachiller == "sí") {
    console.log("Puedes acceder al ciclo formativo de grado superior.");
} else if (haSuperadoPrueba == "sí") {
    console.log("Puedes acceder al ciclo formativo de grado superior.");
} else {
    console.log("No puedes acceder al ciclo formativo de grado superior.");
}