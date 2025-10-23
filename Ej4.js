const prompt = require('prompt-sync')();

let a = prompt("Introduce el primer numero ");
let b = prompt("Introduce el segundo numero ");
let c = prompt("Introduce el tercer numero ");

a = Number(a);
b = Number(b);
c = Number(c);

if (a<0){
    console.log("La multiplicacion es: "+(a*b*c));
}
else{
    console.log("La suma es:"+ (a+b+c));
}