const users=[
    {name:'Luisa Galaz',username:'luisaGa',pwd:'1234',imagen:'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {name:'Saul Gutierez',username:'saulGa',pwd:'1234',imagen:'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {name:'Ian Lopez',username:'ianLo',pwd:'1234',imagen:'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
]
const error = document.getElementById('error');
function logIn(){
    const username =  document.getElementById('username').value;
    const pwd =  document.getElementById('pwd').value;
    const userFinder = users.find(u=>u.username===username && u.pwd ===pwd);//Busca el usuario que tenga el mismo username
    if(userFinder){
        localStorage.setItem("loggedUser", JSON.stringify(userFinder));
        window.location.href = 'home.html';
    }else{
        error.textContent ='Contraseña o usuario incorrecta'
    }
}
