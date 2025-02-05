console.log('Hola Mundo');

//------Variables Primitivas------

//String
let nombre = "Ivan";
//Number
let edad = 23;
//bool
let esMayorDeEdad = edad>18;//true
//Undefined
let saldo;
//Null
let cuenta = null;
//Symbol
let id = Symbol("id");
//Biginit
let numeroGrande = 12312324896854n;
//Typeof - permite que veamos el tipo de variable.
console.log(typeof cuenta);

//------Variables compuestas------
//Objetos
let persona ={
    nombre:"Ivan",
    edad:23,
    nacionalidad:'Mexicana'
};
console.log(typeof persona);//object
console.log(persona);//{ nombre: 'Ivan', edad: 23, nacionalidad: 'Mexicana' }
console.log(persona.edad);//23

//Arrays
let numeros = [1,2,3,4,5];
console.log(typeof numeros);//object
console.log(numeros);//[ 1, 2, 3, 4, 5 ]
console.log(numeros[3]);//4

//FUNCION
//El parametro es la informacion que tenemos y la argumento lo que mandamos
let suma = function suma(a,b){return a+b};
console.log(typeof suma);//function
console.log(suma);//[Function: suma]
console.log(suma(5,8));//13

//Fecha
let fecha = new Date();
console.log(typeof fecha);
console.log(fecha);
