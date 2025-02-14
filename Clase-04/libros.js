let librosLeidos = [];//Variable global
let agregarLibro = (libro)=>librosLeidos.push(libro);
let mostrarlibrosLeidos=()=>console.log(librosLeidos);

agregarLibro('El libro del silencio');
// mostrarlibrosLeidos();
document.getElementById('see-books').addEventListener('click',function(){
    mostrarlibrosLeidos();
});
document.getElementById('add-book').addEventListener('click',function(){
     let libro = prompt('¿Que libro haz leido?');
     agregarLibro(libro);
});