const prompt = require("prompt-sync")();
let cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas en la empresa:"));
let cantidadHijos;
let personasConHijos = 0;
let personasSinHijos = 0;
let totalHijos = 0;
let maxHijos = 0;
let minHijos = 0;

if (cantidadPersonas <= 0) {
    console.log("La cantidad de personas debe ser mayor a 0.");
} else {
    for (let i = 1; i <= cantidadPersonas; i++) {
        cantidadHijos = parseInt(prompt(`Ingrese la cantidad de hijos de la persona ${i}:`));

        if (cantidadHijos < 0) {
            console.log("El número de hijos no puede ser negativo. Intente nuevamente.");
            break; 
        } else {
            totalHijos += cantidadHijos;

            if (cantidadHijos > 0) {
                personasConHijos++;
            } else {
                personasSinHijos++;
            }

            if (i == 1 || cantidadHijos > maxHijos) {
                maxHijos = cantidadHijos;
            }
            if (i == 1 || cantidadHijos < minHijos) {
                minHijos = cantidadHijos;
            }
        }
    }

    let promedioHijos = totalHijos / cantidadPersonas;

    console.log("\nResumen de la empresa:");
    console.log(`Cantidad de personas con hijos: ${personasConHijos}`);
    console.log(`Cantidad de personas sin hijos: ${personasSinHijos}`);
    console.log(`Promedio de hijos por persona: ${promedioHijos}`);
    console.log(`Número máximo de hijos: ${maxHijos}`);
    console.log(`Número mínimo de hijos: ${minHijos}`);
}