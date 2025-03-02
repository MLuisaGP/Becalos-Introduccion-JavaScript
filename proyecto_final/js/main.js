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
    
})
function logout(){
    localStorage.removeItem('userLogged');
     window.location.href = "login.html";
};

function goIlustracion1(){
    window.location.href = "ilustracion_1.html";
}
function goIlustracion2(){
    window.location.href = "ilustracion_2.html";
}
function goHome(){
    window.location.href = "index.html";
}