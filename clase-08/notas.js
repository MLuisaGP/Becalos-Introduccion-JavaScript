//Guarda un valor asociado a una clave.
localStorage.setItem('nombre', 'Carlos');
// Obtiene el valor almacenado en localStorage usando su clave.
const nombre = localStorage.getItem('nombre');
console.log(nombre);
//Elliminar el dato asociado a una clave
localStorage.removeItem('nombre');
//Borra todo el contenido almacenado en localStorage.
localStorage.clear();
//Devuelve la clave almacenada en un índice específico.
localStorage.setItem('nombre', 'Carlos');
const clave = localStorage.key(0);
console.log(clave);

//*GUARDAR Y RECUPERAR DATOS
//guardar
localStorage.setItem('nombre', 'Carlos');
localStorage.setItem('edad', '30');

// Recuperar datos
console.log(localStorage.getItem('nombre')); // "Carlos"
console.log(localStorage.getItem('edad'));   // "30"
localStorage.clear();

//*Almacenar objetos
// Guardar un objeto
const usuario = { nombre: 'Carlos', edad: 30 };
localStorage.setItem('usuario', JSON.stringify(usuario));//objeto a string

// Recuperar el objeto
const datosUsuario = JSON.parse(localStorage.getItem('usuario'));//string a objeto
console.log(datosUsuario.nombre); // "Carlos"
console.log(datosUsuario.edad);  // 30

//*Eliminar objetos
// Guardar y eliminar un dato
localStorage.setItem('tema', 'oscuro');
console.log(localStorage.getItem('tema')); // "oscuro"

localStorage.removeItem('tema');
console.log(localStorage.getItem('tema')); // null

//*Limpiar todo
localStorage.setItem('nombre', 'Carlos');
localStorage.setItem('edad', '30');
console.log(localStorage.length); // 2

// Eliminar todo
localStorage.clear();
console.log(localStorage.length); // 0

//*Interar
localStorage.setItem('nombre', 'Carlos');
localStorage.setItem('edad', '30');

// Iterar sobre los datos
for (let i = 0; i < localStorage.length; i++) {
  const clave = localStorage.key(i);
  console.log(`${clave}: ${localStorage.getItem(clave)}`);
}

//*Manejar datos que no existen
valor = localStorage.getItem('noExiste');
console.log(valor); // null

localStorage.removeItem('noExiste'); // No genera error

