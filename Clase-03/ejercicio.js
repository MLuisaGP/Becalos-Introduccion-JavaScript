//Usar cualquier ciclo, para realizar una tabla de multipplicar
let numeroMultiple;

numeroMultiple = parseInt(prompt("¿De que numero quiceras crear su tabla de multiplicacion?"));
for (let index = 1; index <= 10; index++) {
    console.log(index +" x " + numeroMultiple+" = "+(index*numeroMultiple));
    
}

//Contar los digitos de un numero
let numeroLargo = prompt("Introducce un numero con varios decimales: ");
let numDig=0;
console.log("El numero "+numeroLargo+" tiene "+numeroLargo.length+" digitos");

//La suma de los digitos de un numero
let sumatorio = 0;
for (let index = 0; index < numeroLargo.length; index++) {
    sumatorio+=parseInt(numeroLargo[index]);
}
console.log("Y la sumatorio de sus digitos es: "+sumatorio);

//numero mayor de un arreglo
let contador = 1;
let numeroMayor =0;
while(contador<=5){
    let numero = parseInt(prompt(contador+".- Introducce un numero: "));
        if(numero>numeroMayor){
        numeroMayor=numero;
    }
    contador++;
}
console.log('El numero mayor es: '+numeroMayor);