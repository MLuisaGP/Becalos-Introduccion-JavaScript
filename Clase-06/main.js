//Selecciona un elemento por su ID. y le agregamos texto
document.getElementById("example").innerText="Hola mundo";
console.log(document.documentElement);//Obtiene los elementos del documento
console.log(document.head);//obitnene los elementos del head
console.log(document.body);//obitnene los elementos del body

let title = document.getElementById("titulo");
title.innerText="Don Quijote de la Marcha";
title.style.color = "gray";

let nuevoParafo = document.createElement('p');
nuevoParafo.innerText = "Es de las mejores historias que he leido en mi vida.";
document.body.appendChild(nuevoParafo);

let nuevoParafo2 = document.createElement('p');
nuevoParafo2.innerText = "Es de las mejores historias que he leido en mi vida.";
document.body.appendChild(nuevoParafo2);

nuevoParafo2.remove();//Elimina el elemento selecionado
// document.body.removeChild(nuevoParafo2);//Elimina un elemento especifico hijo

let nuevoParafo3 = document.createElement('p');
nuevoParafo3.innerText = "Es de las mejores prueba historias que he leido en mi vida.";
        

function retraso(){
    setTimeout(()=>{
        document.body.insertBefore(nuevoParafo3,title);
    },3000)
}
retraso();

// document.getElementById('boton').addEventListener("click",function(){
//     alert("Boton precionado")
// })

const user ="admin";
const pwd = "1234";

function agregarElementos(){
    let nuevoElemento = document.createElement('h3');
    nuevoElemento.innerText="Año de publicacion";
    document.body.appendChild(nuevoElemento);
}

function logIn(){
    let usuario = document.getElementById("username").value;
    let password = document.getElementById("pwd").value;
    if(usuario === user && password ===pwd){
       window.location.href = "home.html"
    }else{
        alert("Lo siento no eres bienvenido")
    }
}

function mostrarTexto(){
    let userText = document.getElementById("texto").value;
    document.getElementById("mostrar").innerText = userText;
}

