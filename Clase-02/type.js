//Una variable es un espacio en memoria que nos sirve para guardar un valor que se necesite.

//String
let message = "hola mundo";
console.log(message.toUpperCase());//HOLA MUNDO

let nameUser = "Scarlett";
console.log(`Hola ${nameUser}`);//Hola Scarlett

console.log('Hola ${nameUser}');//Hola ${nombre}
console.log('Hola '.nameUser);//undefined
console.log('Hola '+nameUser+'¿Como estas?');//Hola Scarlett¿Como estas?  //![Necesita que le pongas espacios de forma manual]
console.log('Hola',nameUser,'¿Como estas?');//Hola Scarlett ¿Como estas?  //![Agrega espacio entre concatenacion de forma automatica]

let esMayor = true;
console.log(esMayor && true);

//Arrays
let alumnos = ["Adelina","Randy","Saul","Maria"];
console.log(alumnos[3]);//Maria
alumnos[2] = "Lia";//Cambia el valor del alumno en posicion 2
console.log(alumnos);//["Adelina","Randy","lia","Maria"];
alumnos.push("Natalia");//Lo agrega al final del array
console.log(alumnos);//[ 'Adelina', 'Randy', 'Lia', 'Maria', 'Natalia' ]
alumnos.unshift("Ian");// Agrega un elemento al inicio del array.
console.log(alumnos);[ 'Ian', 'Adelina', 'Randy', 'Lia', 'Maria', 'Natalia' ]
alumnos[9] = "Mariana"; //Agrega un elemento vacio si el que se esta agregando esta en una pocision mas alejada al maximo que se tiene actual
console.log(alumnos);/**[  'Ian',  'Adelina',  'Randy',  'Lia',  'Maria',  'Natalia',  <3 empty items>,  'Mariana']*/
console.log(alumnos.length);//10

//Numeros
let x = 2;
x^=5// Lo suma y lo almacena de nuevo en la variable  x=x+5
console.log(x);//7
let division = 0;
console.log(division/0);//NaN

