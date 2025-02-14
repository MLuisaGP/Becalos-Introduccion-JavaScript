let counter = 0;
console.log('While');
while(counter<10){
    console.log(counter);
    counter++;
}
//Sintaxis do while
console.log('Do-While');
do{
    console.log(counter);
    counter++;
}while(counter<10);

console.log('For - forma 1');
for (let index = 1; index < 10; index++) {
    console.log(index);
}
console.log('For - forma 2');
const numbers = [1,32,55,1]
for(let num of numbers){
    console.log(num);
}

//! Este solo se ejecuta cuando se hace desde el live server ya que cuenta con entrada
// console.log('Ejemplo con promt');
// let respuesta;
// do{
//     respuesta = parseInt(prompt("Por favor ingresa un numero mayor a 20"));
// }while(respuesta<=20);
// alert("El numero es: "+respuesta);

//while
let text = "Este modulo es increible porque estoy aprendiendo a programar!!";
let vocal = "aeiouAEIOU";
counter = 0;
let i = 0;
while(i < text.length){
    if(vocal.includes(text[i])){
        counter++;// Acumulador, Almacena cualquier tipo de operacion
    }
    i++;//contador, vairable que lleva las veces que se repite una interacion
}
console.log('Ejemplo while: vocales')
console.log('El texto tiene: '+counter+' vocales');