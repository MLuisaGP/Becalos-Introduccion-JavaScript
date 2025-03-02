
const logIN = document.getElementById('sct-login');
const signUP = document.getElementById('sct-signup');
const over = document.getElementById('container-over');
const btnLogIn = document.getElementById('btn-login');
const btnSignUp = document.getElementById('btn-signup');
const errLogIn = document.getElementById('err-login');
const errCreate = document.getElementById('err-create');
const users = JSON.parse(localStorage.getItem('users'))??[];
// const usersNum = localStorage.getItem('no_users')??0;
console.log(users);
let timer;


function displayCreate(){
    logIN.classList.add('hidden');
    signUP.classList.remove('hidden');
    over.style.left='0';
    over.style.transition="700ms";
    over.children[0].innerHTML = '<h2>Bienvenido  de nuevo</h2> <p>Si ya cuentas con un usuario inicia sesion dando click en el siguiente link</p><button class="btn btn-login-mov" id="btn-signup-mov" onclick="displayLogin()">Iniciar Sesion</button>';

}
function displayLogin(){
    logIN.classList.remove('hidden');
    signUP.classList.add('hidden');
    // signUP.style.visibility = 'hidden';
    // logIN.style.visibility = 'visible';
    over.style.left='50%';
    over.style.transition="700ms";
    
    over.children[0].innerHTML = '<h2>Bienvenido</h2><p>Si aun no cuentas con una cuenta, ingresa tus datos mediante el siguiente link.</p><button class="btn btn-signup-mov" id="btn-signup-mov" onclick="displayCreate()">Crear cuenta</button>';

}

function createUser(event){
    event.preventDefault();
    const imgUrl=['img/perfil/persona_1.jpg',
        'img/perfil/persona_2.jpg',
        'img/perfil/persona_3.jpg',
        'img/perfil/persona_4.jpg',
    ];
    const nombre = document.getElementById('nombreCreate');
    const email = document.getElementById('emailCreate');
    const pwd = document.getElementById('pwdCreate');
    //MAXIMO SE PUEDEN CREAR 4 PERSONAS
    if(nombre.value.trim()==="" || email.value.trim()==="" || pwd.value===""){
        errCreate.textContent='Todos los campos son obligatorios.'
        cleanErrMsn(errCreate);
        return;
    }
    if(nombre.value.trim().length<3 || nombre.value.trim().length>15 ){
        errCreate.textContent= 'El nombre es demaciado '+(nombre.value.trim().length<3?'corto.':'largo.');
        cleanErrMsn(errCreate);
        return;
    }
    if(!email.checkValidity()){
        errCreate.textContent= 'Email no valido';
        cleanErrMsn(errCreate);
        return;
    }
    if(findEmail(email.value.trim())){
        errCreate.textContent= 'Email ya utilizado';
        nombre.value='';
        email.value='';
        pwd.value='';
        cleanErrMsn(errCreate);
        return;
    }
    
    if(users.length>=4){
        errCreate.textContent= 'Se ha superado el numero max de usuarios';
        cleanErrMsn(errCreate);
        nombre.value='';
        email.value='';
        pwd.value='';
        return;
    }
    let userObj = {
        nombre:nombre.value.trim(),
        email:email.value.trim(),
        pwd:pwd.value.trim(),
        urlImg: imgUrl[users.length]
    }
    users.push(userObj);
    localStorage.setItem('users',JSON.stringify(users));
    localStorage.setItem('userLogged',JSON.stringify(userObj));
    window.location.href="home.html";
}

function login(event){
    event.preventDefault();
    const email = document.getElementById('emailLog');
    const pwd = document.getElementById('pwdLog');
    //MAXIMO SE PUEDEN CREAR 4 PERSONAS
    if(email.value.trim()==="" || pwd.value===""){
        errLogIn.textContent='Todos los campos son obligatorios.'
        cleanErrMsn(errLogIn);
        return;
    }
    if(!email.checkValidity()){
        errLogIn.textContent= 'Email no valido';
        cleanErrMsn(errLogIn);
    }
    
    emailUsed = users.find(u=>u.email==email.value.trim() && u.pwd===pwd.value.trim());
    if(emailUsed){
        localStorage.setItem('userLogged',JSON.stringify(emailUsed));
        window.location.href="home.html";
    }else{
        errLogIn.textContent='Correo o contraseña no válida.'
        cleanErrMsn(errLogIn);
        return;
    }
}
/*

qiqot@mailinator.com
Pa$$w0rd!
*/

function findEmail(email){
    emailUsed = users.find(u=>u.email==email)??false;
    console.log(emailUsed);
    if(emailUsed){
        return true;
    }else{
        return false;
    }
    
}

function cleanErrMsn(errlog){
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
        errlog.textContent='';
    }, 3000);

// Cancelar el temporizador antes de que se ejecute
}
