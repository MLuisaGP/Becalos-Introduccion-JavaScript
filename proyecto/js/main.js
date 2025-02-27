const userAuth= 'ivan';
const pwdAuth = '12345';
const error = document.getElementById('error');
function logIn(){
    const username =  document.getElementById('username').value;
    const pwd =  document.getElementById('pwd').value;
    if(username === userAuth && pwd === pwdAuth ){
        localStorage.setItem("loggedUser", username);
        window.location.href = 'home.html';
    }else{
        error.textContent ='Contraseña o usuario incorrecta'
    }
}

function post(){
    const commentText = document.getElementById('comment');
    const commentSection = document.getElementById('comment-section')

    const userName = localStorage.getItem("loggedUser");

    const fecha = new Date().toLocaleDateString();
    if (commentText.value.trim()===""){
        alert("El comentario no puede ir vacio");
        return;
    }
    const comentarioSection=document.createElement("section");
     comentarioSection.classList.add("comentarios");
     comentarioSection.innerHTML = `<p><strong>${userName}</strong> - ${fecha} <br> ${commentText.value}</p>`;

     commentSection.append(comentarioSection);
     commentText.value='';
}