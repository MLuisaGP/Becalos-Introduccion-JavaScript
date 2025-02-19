class Libro{
    capitulo=[];
    constructor(titulo,autor,anio,estado){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
    }
    describirLibro(){
        console.log(`'${this.titulo}' escrito por: ${this.autor} publicado en el ${this.anio}, se ecuentra ${this.estado}`)
    }
    agregarCapitulo(nombreCapitulo,numeroPaginas){
        let capitulo = {
            titulo: nombreCapitulo,
            noPaginas: numeroPaginas
        }
        this.capitulo.push(capitulo);
    } 
    eliminarCapitulo(){
        this.capitulo.pop();
    }
    mostrarCapitulos(){
        console.log(this.capitulo);
    }
}
const libro1 = new Libro('En auschwitz no habia prozac','Edith Edger',2020,'Disponible');
libro1.describirLibro();
libro1.agregarCapitulo('¿Y ahora qué?',17);
libro1.agregarCapitulo('Nadie te rechaza excepto tú',10);
libro1.agregarCapitulo('¿Estas evolucionando o involucionando?',23);
libro1.eliminarCapitulo();
libro1.mostrarCapitulos();
