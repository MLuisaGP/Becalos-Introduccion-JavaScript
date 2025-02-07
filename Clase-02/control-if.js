//---- Ejemplo 1 de control condicional if -NOTAS EXAMEN

const NOTA_MINIMA = 6;
let notaEstudiante = 9;

if(notaEstudiante>=NOTA_MINIMA) 
    console.log("Estas aprobado"); 
else 
    console.log("Estas reprobado");


//---- Ejemplo 2 de control condicional if -TEMPERATURA

const TEMP_ALTA = 42;
const TEMP_BAJA = 22;
let temp = 13;
if(temp>TEMP_ALTA){
    console.log('Hace calor');
}else if(temp<TEMP_BAJA){
    console.log('Hace Frio');
}else{
    console.log('Esta agradable');
}

//---- Ejemplo 3 de control condicional if -Mayoria de edad
let edad = 23;
const MAYOR_EDAD = 18;
let mensaje = (edad>=MAYOR_EDAD)?"Es mayor de edad":"Es menor de edad"; //?OPERADOR TERNARIO
console.log(mensaje);//Es mayor de edad

//---- 

console.log('1' === '1');//false
console.log(1 == '1');//true
console.log(1 == '1' || 1 === '1');//true
console.log(1 == '1' && 1 === '1');//false


