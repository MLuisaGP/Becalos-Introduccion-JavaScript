const logIN = document.getElementById('sct-login');
const signUP = document.getElementById('sct-signup');
const over = document.getElementById('container-over');
const btnLogIn = document.getElementById('btn-login');
const btnSignUp = document.getElementById('btn-signup');

function displayCreate(){
    logIN.classList.add('hidden');
    signUP.classList.remove('hidden');
    over.style.left='0';
    over.style.transition="700ms";
    console.log(over.children[0])
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