let librosLeidos = [];//Variable global
let agregarLibro = (libro)=>librosLeidos.push(libro);
let mostrarlibrosLeidos=()=>console.log(librosLeidos);

agregarLibro('El libro del silencio.');
agregarLibro('Ansisos por nada.');
agregarLibro('Muestrame tu rostro.');
agregarLibro('En auschwitz no había prozac.');
mostrarlibrosLeidos();

// mostrarlibrosLeidos();
document.getElementById('see-books').addEventListener('click',()=> mostrarlibrosLeidos());

document.getElementById('add-book').addEventListener('click',function(){
     let libro = prompt('¿Que libro haz leido?');
     agregarLibro(libro);
});