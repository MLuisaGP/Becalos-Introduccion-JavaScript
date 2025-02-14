//*Las funciones anonimas son funciones que no tienen un numero asignado
const miFuncionAnonima = function(){
    console.log("Hola a todos")
} 
miFuncionAnonima(); //1RA POSICION DE  EJECUCION

setTimeout(function(){
    console.log("Este comentario va a tener un tiempo de espera");
},5000);//4ta POSICION DE  EJECUCION
miFuncionAnonima();//2DA POSICION DE  EJECUCION
//*ORDEN DE IMPRESION
/*
Hola a todos
Hola a todos
Este comentario va a tener un tiempo de espera
*/

//Funciones flechas
const arrowFunction= () => {
    console.log("Hola es una flecha=>");//3RA POSICION DE  EJECUCION
} 
arrowFunction();
document.getElementById("boton").addEventListener("click", function(){
    alert("Hola mundo");
})