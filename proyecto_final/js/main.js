let user = JSON.parse(localStorage.getItem('userLogged'));

document.addEventListener("DOMContentLoaded", function(){
    if(!user){
        window.location.href='login.html';
    }
    
    const imgPerfil = document.getElementsByClassName('imagen-user');
    const urlPerfil = user.urlImg;
    for (let i = 0; i < imgPerfil.length; i++) {
        imgPerfil.item(i).innerHTML=`<img src="${urlPerfil}" alt="perfil-image">`;
    }
    showComents();
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

let comentariosStorage = JSON.parse(localStorage.getItem('comentarios-i1'))??[];
let imagenLiked = JSON.parse(localStorage.getItem('liked-i1'))??[];
let imagenShared = localStorage.getItem('shared-i1')??0;

//Poner el numero de compartidos, comentados y me gustas
actualizarCntAcciones();

botonSend.addEventListener("click",function(event){
    event.preventDefault();

    // if(comentariosStorage.length==0){
    //     showComt.removeChild(textoInicio);
    // }

    if(inputComt.value.trim()=='')return;
    let nombre = user.nombre;
    let dateTime = dateNow();
    let perfilImag =user.urlImg;

    let comtObj = {
        nombre:nombre,
        dateTime:dateTime,
        perfilImag:perfilImag,
        text:inputComt.value.trim()
    }

    comentariosStorage.push(comtObj);
    localStorage.setItem('comentarios-i1',JSON.stringify(comentariosStorage));
    showComents();
    actualizarCntAcciones();
})

let flagLiked = imagenLiked.find(u=>u==user.email);
if(flagLiked)btnLiked.classList.add("activo-btn");

btnLiked.addEventListener('click',function(){
    if(flagLiked){
        btnLiked.classList.remove("activo-btn");
        imagenLiked.pop(flagLiked);
        flagLiked = !flagLiked ;
    }else{
        flagLiked = !flagLiked ;
        imagenLiked.push(user.email);
        btnLiked.className="activo-btn";
    }
    localStorage.setItem('liked-i1',JSON.stringify(imagenLiked))
    actualizarCntAcciones();
})

btnShared.addEventListener('click',function(){
    alert('Haz compartido la imagen');
    imagenShared= parseInt(imagenShared)+1;
    localStorage.setItem('shared-i1',JSON.stringify(imagenShared))
    actualizarCntAcciones();
})

btnComment.addEventListener('click',function(){
    inputComt.focus();
})

function logout(){
    localStorage.removeItem('userLogged');
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

function actualizarCntAcciones(){

    contComment.textContent=comentariosStorage.length;
    contLikes.textContent  =imagenLiked.length;
    contShared.textContent =imagenShared;
}

function showComents(){
    showComt.innerHTML='';
    if(comentariosStorage.length==0){
        showComt.innerHTML='<p id="sin-coment">Se el primero en comentar</p>';
    }
    comentariosStorage.forEach(comentario => {
        let contenedor = document.createElement('div');
        contenedor.className='cmt-elemento';
        let infUser = document.createElement('div');

        infUser.className = "inf-user";
        infUser.innerHTML = `<div class="inf-user">
                                <div class="img-perfil">
                                    <img src="${comentario.perfilImag}" alt="perfil-image">
                                </div><!--img-->
                                <div class="inf-perfil">
                                    <b>${comentario.nombre}</b>
                                    <span>${comentario.dateTime}</span>
                                </div>
                            </div>`;
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML += '<i class="fa-solid fa-trash"></i>';
        const cometarioP = document.createElement('p');
        cometarioP.textContent=comentario.text;

        contenedor.appendChild(infUser);
        contenedor.appendChild(deleteBtn);
        contenedor.appendChild(cometarioP);
        showComt.insertBefore(contenedor,showComt.firstChild); //Agrega el comentario primero que todos los otros hijos
        inputComt.value='';
        deleteBtn.addEventListener('click',function (){
            const parentElement = this.parentElement;
            parentElement.remove();
            comentariosStorage.pop(comentario);
            localStorage.setItem('comentarios-i1',JSON.stringify(comentariosStorage));
            // contComment.textContent=contadorComentario;
            if(comentariosStorage.length==0){
                showComt.innerHTML='<p id="sin-coment">Se el primero en comentar</p>';
            }
            actualizarCntAcciones();
        });
    });
}