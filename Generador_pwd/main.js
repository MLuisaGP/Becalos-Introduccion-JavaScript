/*Declaracion*/
const inputRange = document.getElementById('length');
const labelRange = document.getElementById('num-character');
const btnGenerar = document.getElementById('btn-generate');
const alertaError = document.getElementById('error');
const txtPwd = document.getElementById('txt-pwd');
const labelStrength = document.getElementById('lbl-strength');

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
const levelLabels=
[
'strength-level-1',
'strength-level-2',
'strength-level-3',
'strength-level-4',
]

function medidorSeguridad(){
    let pts = puntos+puntosRange+(puntos-1);
    let level = obtenerLevel(pts);
    for (let i = 0; i <= levelLabels.length; i++) {
        if(level>=(i+1)){
            document.getElementById(levelLabels[i]).classList.add('level_activado');
        }else if(levelLabels[i]){
            document.getElementById(levelLabels[i]).classList.remove('level_activado');
            
        }
        
    }
}

function obtenerLevel(pts){
    let level=0;
    labelStrength.textContent=''
    if(pts<=6){
        level=1;
        labelStrength.textContent='Bajo'
    }else if(pts>=7 && pts<=8){
        level=2
        labelStrength.textContent='Medio'
    }else if(pts>=9 && pts<=10){
        level=3
        labelStrength.textContent='Alto'
    }else if(pts>=11){
        level=4
        labelStrength.textContent='Muy Alto'
    }
    return level;
}