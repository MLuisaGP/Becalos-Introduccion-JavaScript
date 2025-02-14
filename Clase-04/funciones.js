//funcion sin parametro
function saludar(){
    console.log("hola Mundo");
}
//funcion con un parametro
function saludarPersona(persona){
    console.log("hola Mundo",persona);
}
//funcion con valor defecto
function saludarInvitado(nombre='Invitado'){
    console.log("hola Mundo",nombre);
}
//con return
function multiplicacion(a,b){
    return a*b;
}
//funcion
let a = saludar();//hola Mundo 
console.log(a);//undefined
saludarPersona('Luisa');
saludarInvitado();//hola Mundo Invitado
saludarInvitado("Kevin");//hola Mundo Kevin

let resultado = multiplicacion(63,123);
console.log(resultado);//7749