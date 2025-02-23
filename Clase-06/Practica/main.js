let botonSend = document.getElementById("btn-send");
let inputComt = document.getElementById("comentario-text");
let showComt = document.getElementById("cmts-show");
let contComment = document.getElementById("contador-comentarios");
let contLikes   = document.getElementById("contador-likes");
let contShared  = document.getElementById("contador-shared");
let btnLiked  = document.getElementById("btn-liked");
let btnComment  = document.getElementById("btn-comment");
let btnShared  = document.getElementById("btn-shared");
let textoInicio = document.getElementById("sin-coment");

let contadorComentario=0;
let contadorLiked = 4;
let conadorShared = 3;

botonSend.addEventListener("click",function(event){
    event.preventDefault();

    if(contadorComentario==0){
        showComt.removeChild(textoInicio);
    }

    if(inputComt.value=='')return;
    let contenedor = document.createElement('div')
    contenedor.className='cmt-elemento';

    let nombre = document.createElement('b');
    nombre.textContent='Lorena Días';
    let fecha = document.createElement('span');
    fecha.textContent=dateNow();
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML += '<i class="fa-solid fa-trash"></i>';
    let comentario = document.createElement('p');
    comentario.textContent=inputComt.value;

    showComt.appendChild(contenedor);
    contenedor.appendChild(nombre);
    contenedor.appendChild(fecha);
    contenedor.appendChild(deleteBtn);
    contenedor.appendChild(comentario);
    inputComt.value='';
    contadorComentario++;
    deleteBtn.addEventListener('click',function (){
            let parentElement = this.parentElement;
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


function dateNow(){
    const fechaActual = new Date();

    const dia = String(fechaActual.getDate()).padStart(2, '0');
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses comienzan desde 0
    const anio = String(fechaActual.getFullYear()).slice(-2); // Obtener los últimos dos dígitos

    const fechaFormateada = `${dia}-${mes}-${anio}`;
    return fechaFormateada;
}