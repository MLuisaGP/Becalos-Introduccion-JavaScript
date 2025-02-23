let titulo = document.getElementById("title");
//cambiar el color de un texto cuando presiono el boton
function cambiarColor(){
    if(titulo.style.color == "red"){
        titulo.style.color = "blue"
    }else{
        titulo.style.color = "red"
    }
}
//Crea un boton que permita ocultar o mostrar un parrafo cadavez que se presione
let estado = 1;
let parrafo = document.getElementById("parrafo");
let btnEsconder= document.getElementById("boton-esconder");
function toggleOcultar(){
    if(estado==1){
        parrafo.style.visibility ="hidden";
        estado=0;
        btnEsconder.innerHTML = "Mostrar";
    }else{
        parrafo.style.visibility="visible";
        estado=1;
        btnEsconder.innerHTML = "Ocultar";
    }
}
//Contador de clicks
let labelClicks = document.getElementById("label-click");
let contClicks = 0;
function contadorClick(){
    contClicks++;
    labelClicks.innerHTML = contClicks;
}