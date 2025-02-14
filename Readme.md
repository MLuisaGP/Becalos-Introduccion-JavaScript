# Introduccion a JavaScript

En este repositorio se iran subiendo las actividades realizadas en DEV.F del programa de Becalos.

## Clase 1. Introduccion a JavaScript

En esta clase se dio un acercamiento a java script. Se vieron los diferentes tipo de variables principales y aplicar buenas practicas.
En la carpeta de [Clase-01](https://github.com/MLuisaGP/Becalos-Introduccion-JavaScript/tree/main/Clase-01)
Se tienen tres archivos:
- [Index.html](https://github.com/MLuisaGP/Becalos-Introduccion-JavaScript/blob/main/Clase-01/index.html) Este archivo esta solo para ver como importar el archivo .js desde html

- [main.js](https://github.com/MLuisaGP/Becalos-Introduccion-JavaScript/blob/main/Clase-01/main.js) Archivo que se realizo durante la clase en vivo. Aqui se provaron los diferentes tipos de variables primitivas y algunas de las compuestas. Se hicieron diferentes pruebas para ver como reacionaban y como funcionaba, dando uso de console.log() para imprimir en consola la inf y type of para obtener que tipo de variable son. 

      // Respuesta de main.js
      Hola Mundo
      object
      object
      { nombre: 'Ivan', edad: 23, nacionalidad: 'Mexicana' }
      23
      object
      [ 1, 2, 3, 4, 5 ]
      4
      function
      [Function: suma]
      13
      object
      2025-02-05T02:46:32.228Z
  
- [tipos-de-dato.js](https://github.com/MLuisaGP/Becalos-Introduccion-JavaScript/blob/main/Clase-01/tipos-de-dato.js) Finalmente este archivo es la actividad solicitada para esta clase, el cual consiste en obtener que tipo de variable son los diferentes valores definidos.  

      // Respuesta de tipos-de-dato.js
      number
      string
      number
      boolean
      number
      string
      object
      undefined
      undefined
      boolean
      false


## Clase 2. Comparaciones y decisiones en JavaScript

En esta clase se vieron los diferentes operadores simples, comparacion y los logicos. Se dio una vista al uso de arrays. Asi mismo se comenzo a utilizar la estructura de control If, realizando diferentes actividades para su entendimiento.

En la carpeta de [Clase-02](https://github.com/MLuisaGP/Becalos-Introduccion-JavaScript/tree/main/Clase-02)
se tienen cinco archivos:
- [activity-ext.js](https://github.com/MLuisaGP/Becalos-Introduccion-JavaScript/blob/main/Clase-02/activity-ext.js) El cual contiene tres diferentes ejercicios realizados en clases, utilizando la estructura de control if. Las actividades realizadas fueron:
  - Numeros pares e impares: Se hizo uso de numero aleatorios y operador ternario.
  - Numeros primos y compuestos: se hizo uso de numeros aleatorios y se comenzo a utilizar el ciclo for.
  - Estación en que nos encontramos: se utilizo la estructura control if y el uso del objeto Date.

 La respuesta dada por este ejercicio fue el siguiente.

     El numero 8 es par y es compuesto
     Estamos en invierno.

- [control-if.js](https://github.com/MLuisaGP/Becalos-Introduccion-JavaScript/blob/main/Clase-02/control-if.js) En este archivo se tienen notas del uso del control if y diferentes formas de utilizarlo. 

- [control-switch.js](https://github.com/MLuisaGP/Becalos-Introduccion-JavaScript/blob/main/Clase-02/control-switch.js) En este archivo se tienen notas del uso del switch. 

- [practice_2.js](https://github.com/MLuisaGP/Becalos-Introduccion-JavaScript/blob/main/Clase-02/practice_2.js) En este archivo se tiene la actividad de practica. Es el archivo más importante ya que muestra la actividad solicitada por Dev.F. Este cuenta con una logica donde se muestra un mensaje personalizado segun una calificacion. La calificacion se creo de forma aleatoria y se hizo uso de variables, constantes y estructrua if.
La respuesta se puede ver a continuación:

      Tu nota fue 62. Suficiente para pasar


- [type.js](https://github.com/MLuisaGP/Becalos-Introduccion-JavaScript/blob/main/Clase-02/type.js) Finalmente tenemos el archivo type.js. En este archivo se tienen las notas realizadas en clase, donde se ve como almacenar las variables, realizar concatenación (permitiendo obtener diferentes formas de imprimir el resutado), uso de arrays, uso de los diferentes tipos de operadores ( basicos, logicos y de comparación) y tambien se muestra como generar un numero aleatorio, como se muestra a continuación, :

      //Numeros aleatorios
      let numeroAleatorio = Math.floor(Math.random()*101); //Math.floor- redondea al numero hacia abajo.Se genera un numero entre 0 y 100

## Clase 3. Arreglos y ciclos en JavaScript

En esta clase se vio de fondo sobre los arreglos y los ciclos mas comunes en javascript.

En la carpeta de [Clase-03](https://github.com/MLuisaGP/Becalos-Introduccion-JavaScript/tree/main/Clase-03)
se tienen cuatro archivos:
- [ejercicio.js](https://github.com/MLuisaGP/Becalos-Introduccion-JavaScript/blob/main/Clase-03/ejercicio.js) Se realizan diferentes ejercicios con el proposito de reforzar lo aprendido dando uso de arreglos y ciclos en diferentes situaciones:
  - Realizar una tabla de multiplicar, se ingresa un numero y se imprmie la multiplicacion de ese numero hasta el numero 10.
  - Contador de digitos, se manda un numero con varios digitos por consola e imprime la cantidad de digitos que posee ese numero.
  - Con el mismo numero ingresado en el ejercicio anterior, se obtiene el total de la suma de cada uno de los digitos.
  - Obtener el numero mayor dentro de un array, se manda un array con diferentes numeros y se va revisando cada uno de ellos, guardando en una variable el digito mayor, se inicia teniendo en la variable como valor 0 y se va comparando con el siguiente digito, si el siguiente digito es mayor entonces este procige a ser almacenado en la variable.
  
  Para este ejercicio es necesario correrlo desde [index.html](https://github.com/MLuisaGP/Becalos-Introduccion-JavaScript/blob/main/Clase-03/index.html), ya que se introduccen los datos desde promt

- [frutas.js](https://github.com/MLuisaGP/Becalos-Introduccion-JavaScript/blob/main/Clase-03/frutas.js) En este archivo contienen la practica de la clase. Se clasifican frutas en 5 tipos diferentes: acidas, semiacidas, neutras, dulces y otros. Se envia un arreglo con diferentes frutas, y se va procesando ese arreglo donde en se va aumentando el numero de frutas segun su tipo en un objeto clasificador.

      //ARRAY FRUTAS:
      let frutas = [
      "kiwi", "limon", "naranja", "uva", "arandanos",
      "fresa", "mango", "mandarina", "ciruela", "nispero",
      "coco", "aguacate", "almendra", "nuez", "cacahuate",
      "platanos", "cereza", "higo", "sandia", "granada","piña",
      "pitaya"];

      //RESPUESTA:
      { acidas: 6, semiacidas: 5, neutras: 5, dulces: 5, otro: 1 }

- [index.html](https://github.com/MLuisaGP/Becalos-Introduccion-JavaScript/blob/main/Clase-03/index.html) Archivo de indice de la carpeta, con este archivo html se puede correr para ejecutar el archivo.[ejercicio.js](https://github.com/MLuisaGP/Becalos-Introduccion-JavaScript/blob/main/Clase-03/ejercicio.js)

- [note-class.js](https://github.com/MLuisaGP/Becalos-Introduccion-JavaScript/blob/main/Clase-03/note-class.js) Archivo donde se almacena las notas realizadas en clases. Aqui se ven anotaciones referentes a arrays y los diferentes ciclos.


## Autor

Creado por [MluisaGP](https://github.com/MLuisaGP)

![Logo GitHub](https://foundations.projectpythia.org/_images/GitHub-logo.png)