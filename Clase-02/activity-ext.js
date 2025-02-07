//Numeros pares e impares
let numeroAleatorio = Math.floor(Math.random()*101); 

if(numeroAleatorio%2 === 0){
    console.log("El numero",numeroAleatorio,"es par");
}else{
    console.log("El numero",numeroAleatorio,"es impar");
}


// Meses

let date = new Date();
let month = date.getMonth() +1;

if(month>=3 && month<=5){
    console.log('Es primavera');
}else if(month>=6 && month<=8){
    console.log('Es verano');
}else if(month>=9 && month<=11){
    console.log('Es otoño');
}else if(month===1 || month===2 || month===12){
    console.log('Es invierno');
}else{
    console.log('Mes no valido');
}

//Numero primo

function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
const numero = Math.floor(Math.random() * 101);
console.log(`${numero} es ${esPrimo(numero) ? "primo" : "compuesto"}`);