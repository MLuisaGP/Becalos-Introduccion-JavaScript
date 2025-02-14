const suma = (x,y)=> x+y;
console.log(suma(80,99));

const saludar = (nombre)=>{
    return `Hola ${nombre}`
}
console.log(saludar('Oscar'));

const numeros=[1,2,3,4,5,6,7,8];
const multiplicados = numeros.map(num=>num*3); //retorna un nuevo array
console.log(multiplicados);

//Con el var puedes crear mas de una variable con el mismo nombre
var global1;
var global1;
// con el let no te lo permite
// let hola;
// let hola;

//Funcion Scope
function saludo(){
    let mensaje ="Hola a todos!";//local
    console.log(mensaje);
}
saludo();
// console.log(mensaje);

//block Scope
if(true){
    let blockScope = "Solo existe en este bloque";
    var blockVar = "No me importa el bloqueo";
    console.log(blockScope);
}

console.log(blockVar);

console.log(variable);
let variable ="Hola";