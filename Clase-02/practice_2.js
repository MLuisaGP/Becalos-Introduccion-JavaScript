//-------Evaluador de Notas con Mensajes Personalizados----//

//DECLARACION DE CONSTANTES
const EXCELENT_GRADE = 90;
const GOOD_GRADE = 75;
const MINIMUN_GRADE = 60;

//DECLARACION DE VARIABLES
let grade = Math.floor(Math.random()*101); //Calificacion en numero aleatorio
let message;

if(grade>=EXCELENT_GRADE){
    message = 'Lo hiciste excelente';
}else if(grade>=GOOD_GRADE){
    message = 'Bien hecho';
}else if(grade>=MINIMUN_GRADE){
    message = 'Suficiente para pasar';
}else{
    message = 'Lo siento no aprobaste';
}
console.log(`Tu nota fue ${grade}. ${message}`);
