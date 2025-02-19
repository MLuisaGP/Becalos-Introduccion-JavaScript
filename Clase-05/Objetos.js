//--objetos literal

const persona ={
    nombre:"Ivanna",
    edad:"23",
    ciudad:"Ciudad de Mexico"
};
//Modificacion de valores
persona.ciudad="Orizaba";
console.log(persona);
persona.estatura=1.65;
persona.genero="Fememnino";
console.log(persona);
delete persona.estatura;//Elimina una propiedad
console.log(persona);

//--Objeto con metodo
const coche = {
    marca:"Kia",
    modelo:"K3 2024",
    color:"Gris Street",
    arrancar:function(){
        console.log("El coche esta andando");
    }
}
console.log(coche);
coche.arrancar();

const calculadora={
    suma(x,y){
        return x+y;
    }
}
console.log(calculadora.suma(5,10));

const trabajo = {
    nombre:"Gaservicio",
    puesto:"Desarrolladora sistemas",
    ubicacion:{
        ciudad:"Sonora",
        calle:"Colosio",
        apis:"Mexico"
    }
}

console.log(trabajo.ubicacion.ciudad);

const usuario={
    nombre:"Saul",
    saludar:function(){
        console.log(`Hola yo soy ${this.nombre}`)
    }
}
usuario.saludar();

class Persona{
    constructor(nombre, edad,genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`)
    }
}
const persona2 = new Persona("Ivan",23)
persona2.saludar();


class Estudiante extends Persona{
    constructor(nombre, edad, genero, carrera,promedio){
        super(nombre, edad,genero);
        this.carrera = carrera;
        this.promedio = promedio;
    }
    estudiar(){
        console.log(`${this.nombre} esta estudiando en la carrera ${this.carrera} y tiene un promedio de ${this.promedio}`)
    }
}
const alumno =new Estudiante('Ana',24,"Femenino","Veterinaria",85.9);
alumno.estudiar();