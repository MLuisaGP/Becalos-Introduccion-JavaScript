//Palindromo: se lee igual al derecho y al reves
//Varificar si es palindromo o no

function palindromo(palabra){
    let arr =  palabra.split("");
    arr.reverse();
    let palabraNew = arr.join("");
    if(palabra==palabraNew){
        console.log(palabra,'es un palindromo');
    }else{
        console.log(palabra,'no es un palindromo');
    }
}
let palabras = [
  "oso", "reconocer", "anilina", "arenera", "radar", // Palíndromos
  "sol", "luz", "casa", "perro", "gato",
  "amor", "roma", "rotor", "sometemos", "neuquén", // Palíndromos
  "programar", "javascript", "computadora", "cielo", "mar"
];
palabras.forEach(element => palindromo(element));

// Filtrar los numeros mayores de un numero
function filtrarMayor(numeroBase){
    let numerosMayores=[]
    for (let i = 0; i < 10; i++) {
        let numero = Math.floor(Math.random()*101); 
        if(numeroBase<numero)numerosMayores.push(numero);
    }
    return numerosMayores;
}

let lista = filtrarMayor(45);
console.log(lista);

//area de un circulo
let areaCirculo = (radio)=> (Math.PI*(Math.pow(2,radio))).toFixed(2);
let radioAl = Math.floor(Math.random()*21);
console.log('El area del circulo con radio',radioAl,'es',areaCirculo(radioAl));

//Ecuaciones Matematicas
function operacion(num1=1, ecuacion='+',num2=1 ){
    switch (ecuacion) {
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        case '/':
            return num1/num2;
        default:
            return num1%num2;
    }
}
let resultado = operacion(15,'-',23 );
console.log(resultado);
