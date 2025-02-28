/*Declaracion*/
const inputRange = document.getElementById('length');
const labelRange = document.getElementById('num-character');
const btnGenerar = document.getElementById('btn-generate');
const alertaError = document.getElementById('error');
let txtPwd = document.getElementById('txt-pwd');

const minusculas = "abcdefghijklmnopqrstuvwxyz";
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

let caracteres = "";
let puntos = 0;
let checks = 0;
const opciones = {
    'allow-upper': {value:mayusculas,puntos:1},
    'allow-lower': {value:minusculas,puntos:1},
    'allow-number': {value:numeros,puntos:1},
    'allow-symbols': {value:simbolos,puntos:2}
};

Object.keys(opciones).forEach(id => {
    const checkbox = document.getElementById(id);
    checkbox.addEventListener('change', function() {
        if(checkbox.checked){
            caracteres += opciones[id].value;
            puntos += opciones[id].puntos;
            checks +=1;
            
        }else{
            caracteres=caracteres.replace(opciones[id].value, '');
            puntos -= opciones[id].puntos;            
            checks -=1;
        }
        medidorSeguridad()
    });
});


let puntosRange = 0;
function obtenerPtsRange(value){
    if(value>=8 && value<=10){

        puntosRange=1;

    }else if(value>=11 && value<=15){

        puntosRange=2;

    }else if(value>=16 && value<=20){

        puntosRange=3;

    }else if(value>=21){
        
        puntosRange=4;

    }else{
        puntosRange=0;
    }
}


let cantidadRange = inputRange.value;
obtenerPtsRange(cantidadRange);
labelRange.textContent = cantidadRange;

inputRange.addEventListener('change',function(){
    cantidadRange = inputRange.value;
    obtenerPtsRange(cantidadRange);
    labelRange.textContent = cantidadRange;
    medidorSeguridad()
});

btnGenerar.addEventListener('click',function(event){
    event.preventDefault();
    alertaError.textContent = '';
    if(caracteres==''){
    alertaError.textContent = 'Favor de especificar al menos un tipo de caracter a utilizar';
    setTimeout(function(){
        alertaError.textContent = '';
    },3000);
    }else{
        txtPwd.textContent= generarPWD();
        txtPwd.style.color='#d6e4f8'
    }

})

function generarPWD(){
    
    let pwd ='';
    for (let i = 0; i < cantidadRange; i++) {
        pwd = pwd+caracteres[Math.floor(Math.random()*caracteres.length)];
    }
    return pwd;
}

const level1 = document.getElementById('strength-level-1');
const level2 = document.getElementById('strength-level-2');
const level3 = document.getElementById('strength-level-3');
const level4 = document.getElementById('strength-level-4');

function medidorSeguridad(){
    let pts = puntos+puntosRange+(puntos-1);
    let levell = obtenerLevel(pts);
    console.log(levell);
    
}

function obtenerLevel(pts){
    let level=0;
    if(pts<=6){
        console.log(level);
        level=1;
    }else if(pts>=7 && pts<=8){
        level=2
    }else if(pts>=9 && pts<=10){
        level=3
    }else if(pts>=11){
        level=4
    }
    return level;
}