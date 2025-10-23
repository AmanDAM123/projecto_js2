const prompt = require('prompt-sync')();

let a = prompt("Introduce numero ");

a = Number(a);

if (a<=0){
    console.log("ERROR");
}
else{
    console.log("El numero introducido es: "+(a)+". El cuadrado del numero es: "+(a*a)+". La raiz cuadrada del numero es: "+Math.sqrt(a));
}