//Numeros pares e impares
let numeroAleatorio = Math.floor(Math.random()*101); 

let par = numeroAleatorio%2 === 0 ? "par":"inpar";

//Numero primo
let isPrimo=true;
for (let i = 2; i < numeroAleatorio; i++) {
    if (numeroAleatorio % i === 0){
        isPrimo=false;
        break;
    }
}
//Mostar que tipo de valor es el numero aleatorio
console.log("El numero",numeroAleatorio,"es",par,"y es",(isPrimo?"primo":"compuesto"));


// Meses

let date = new Date();
let month = date.getMonth() +1;
let estacion;

if(month>=3 && month<=5){
    estacion = "primavera.";
}else if(month>=6 && month<=8){
    estacion = "verano.";
}else if(month>=9 && month<=11){
    estacion = "otoño.";
}else if(month===1 || month===2 || month===12){
    estacion = "invierno.";
}else{
    estacion = "ninguna estacion. Mes no válido.";
}
console.log(`Estamos en ${estacion}`);
