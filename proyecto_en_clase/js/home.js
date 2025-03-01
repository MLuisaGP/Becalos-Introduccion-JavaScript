document.addEventListener("DOMContentLoaded", function(){
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if(!user){
        window.location.href = "index.html";
        return;
    }
    mostrarComentarios();
})

function post(){
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    const commentText = document.getElementById('comment');
    const commentSection = document.getElementById('comment-section')


    const fecha = new Date().toLocaleDateString();
    if (commentText.value.trim()===""){
        alert("El comentario no puede ir vacio");
        return;
    }
    const comentarioSection=document.createElement("section");
     comentarioSection.classList.add("comentarios");
     comentarioSection.innerHTML = `<p><strong>${user['username']}</strong> - ${fecha} <br> ${commentText.value}</p>`;

     commentSection.appendChild(comentarioSection);
     
     const newComent={
         username : user.username,
         name : user.name,
         imagen : user.imagen,
         commentText : commentText.value,
         timestamp:fecha
        }

        
        let comments = JSON.parse(localStorage.getItem('comments')) || [];

        comments.push(newComent);
        
        localStorage.setItem('comments',JSON.stringify(comments));

        document.getElementById('comment').value = "";

        mostrarComentarios();

     commentText.value='';
}

function mostrarComentarios(){
    const comentarioSection=document.createElement("section");
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    
    const commentSection = document.getElementById('comment-section')
    commentSection.innerHTML='';
    comments.forEach(element => {
        if(element.commentText!==''){
            comentarioSection.innerHTML = `<p><strong>${element.username}</strong> - ${element.timestamp} <br> ${element.commentText}</p>`;
            commentSection.appendChild(comentarioSection);
            console.log(comments);
        }
    });
}