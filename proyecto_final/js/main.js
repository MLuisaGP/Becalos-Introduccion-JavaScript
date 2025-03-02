document.addEventListener("DOMContentLoaded", function(){
    const imgPerfil = document.getElementsByClassName('imagen-user');
    const urlPerfil = 'img/image.jpg';
    for (let i = 0; i < imgPerfil.length; i++) {
        imgPerfil.item(i).innerHTML=`<img src="${urlPerfil}" alt="perfil-image">`;
    }
    
})
const botonSend = document.getElementById("btn-send");
const inputComt = document.getElementById("comentario-text");
const showComt = document.getElementById("cmts-show");
const contComment = document.getElementById("contador-comentarios");
const contLikes   = document.getElementById("contador-likes");
const contShared  = document.getElementById("contador-shared");
const btnLiked  = document.getElementById("btn-liked");
const btnComment  = document.getElementById("btn-comment");
const btnShared  = document.getElementById("btn-shared");
const textoInicio = document.getElementById("sin-coment");

let contadorComentario=0;
let contadorLiked = 4;
let conadorShared = 3;

botonSend.addEventListener("click",function(event){
    event.preventDefault();

    if(contadorComentario==0){
        showComt.removeChild(textoInicio);
    }

    if(inputComt.value=='')return;
    let contenedor = document.createElement('div');
    contenedor.className='cmt-elemento';

    let infUser = document.createElement('div');
    infUser.className = "inf-user";

    let nombre = 'LorenawDíaswwwww';
    let dateTime = dateNow();
    let perfilImag ="img/image.jpg"
    infUser.innerHTML = `<div class="inf-user">
                                <div class="img-perfil">
                                    <img src="${perfilImag}" alt="perfil-image">
                                </div><!--img-->
                                <div class="inf-perfil">
                                    <b>${nombre}</b>
                                    <span>${dateTime}</span>
                                </div>
                            </div>`

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML += '<i class="fa-solid fa-trash"></i>';
    const comentario = document.createElement('p');
    comentario.textContent=inputComt.value;


    contenedor.appendChild(infUser);
    contenedor.appendChild(deleteBtn);
    contenedor.appendChild(comentario);
    showComt.insertBefore(contenedor,showComt.firstChild); //Agrega el comentario primero que todos los otros hijos
    inputComt.value='';
    contadorComentario++;
    deleteBtn.addEventListener('click',function (){
            const parentElement = this.parentElement;
            parentElement.remove();
            contadorComentario--;
            contComment.textContent=contadorComentario;
            if(contadorComentario==0){
                showComt.innerHTML='<p id="sin-coment">Se el primero en comentar</p>';
                textoInicio = document.getElementById("sin-coment");
            }
        }
    );
    contComment.textContent=contadorComentario;
})

let flagLiked = false;
btnLiked.addEventListener('click',function(){
    if(flagLiked){
        contadorLiked--;
        btnLiked.classList.remove("activo-btn");
        flagLiked = !flagLiked ;
    }else{
        flagLiked = !flagLiked ;
        contadorLiked++;
        btnLiked.className="activo-btn";
    }
    contLikes.textContent=contadorLiked;
})

btnShared.addEventListener('click',function(){
    alert('Haz compartido la imagen');
    conadorShared++;
    contShared.textContent=conadorShared;
})

btnComment.addEventListener('click',function(){
    inputComt.focus();
})

function logout(){
     window.location.href = "login.html";
};

function dateNow(){
    const fechaActual = new Date();

    const dia = String(fechaActual.getDate()).padStart(2, '0');
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses comienzan desde 0
    const anio = String(fechaActual.getFullYear()); // Obtener los últimos dos dígitos
    const hora = String(fechaActual.getHours()).padStart(2,'0'); // Obtener los últimos dos dígitos
    const minuto = String(fechaActual.getMinutes()).padStart(2,'0'); // Obtener los últimos dos dígitos

    const fechaFormateada = `${dia}-${mes}-${anio} ${hora}:${minuto}`;
    return fechaFormateada;
}