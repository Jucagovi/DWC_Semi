"use strict";

/*****  Objetos predefinidos. ********/

/** Objeto window y algunos de sus métodos 

  prompt      -> pedir datos al usuario/a.
  setINterval -> repetir una acción cada cierto tiempo.
  setTimeout  -> hacer una acción al transcurso de un tiempo.
  
*/

/** setInetrval */
//Se declaran variable globales.
/* var total = 0;
var intervalo;

//Se crea la función a repetir.
function sumar() {
  let sumando = parseInt(
    prompt("Dame un valor para sumar (o -1 para terminar): ")
  );
  if (sumando === -1) {
    clearInterval(intervalo);
    console.log(`Se ha terminado la ejecución con el resultado: ${total}.`);
  } else {
    console.log((total += sumando));
  }
}

// Se lanza el intervalo.
intervalo = setInterval(sumar, 5000); */

/** setTimeout */

/* function saludar() {
  console.log(`¡Hola desde un setTimeout!.`);
}

console.log(setTimeout(saludar, 5000)); */

/*****  Arrays. ********/

/** Declaración.  */

let cosas = new Array();
let tresTipos = new Array(11, "Feo", true);
let tresTiposDos = [11, "hola", true];
let masCosas = [];

/****** Operador spread (...) */

/* let animales = ["perro", "gato", "feo"];
console.log(animales);
let copiaDeAnimales = [...animales];
console.log(copiaDeAnimales); */

/** Concatenar arrays */

/* let numeros = [1, 2, 3];
let meses = ["enero", "febrero", "marzo"];
console.log([...numeros, ...meses]); */

/** Como parámetros en una fucnión */

/* let numeros = [1, 2, 3];
const sumaNumeros = (a, b, c) => {
  console.log(a + b + c);
};
sumaNumeros(...numeros); // Muestra 6. */

/** 
            ¡¡Cuidado!!
Métodos que modifican el array original y otros no.
Algunos devuelven un elemento u otro valor.
Incluso los hay que no hacen nada.

forEach(función) 	  → ejecuta la función para cada elemento (descartado → funciones puras).
map(función) 		    → ejecuta la función para cada elemento (devuelve).
every(función) 		  → si la función se cumple siempre.
some(función) 		  → si la función se cumple para alguno.
filter(función) 		→ devuelve un nuevo array con elementos que cumplen la función.
reduce(función)     → devuelve el valor de realizar un cálculo sobre los elementos del array.
                      ¡¡OJO!! Recibe un parámetro más en su callback (acumulador, valor, óndoce, array).

Los callbacks reciben tres parámetros opcionales en este orden:
  → el valor del elemento del array,
  → el índice del elemento y
  → el propio array.

*/

const feos = ["Rodrigo", "Juan", "Artura", "Javier"];

/*** Recorrer un objeto (no se modifica pero hay que utilizar map). */

/* const feos2 = feos.map((feo) => {
  return feo;
});

console.log(feos2); */

/*  // Versión reducida. Evitar a toda costa.
const feos2 = feos.map((feo) => feo);  */

/*** Añadir un nuevo valor al objeto (uso de spread operator). */

/* const nuevoFeo = "Juan Carlos";
const feos3 = [...feos, nuevoFeo];

console.log(feos3); */

/*** Eliminar un elemento del objeto (filter). */

/* const feos4 = feos3.filter((feo) => {
  return feo !== nuevoFeo;
});

console.log(feos4); */

/***  Actualizar un elemento del objeto. */

/* const nuevoValor = "Arturo";
const valorCambiar = "Artura";
const feos5 = feos.map((feo) => {
  if (feo === valorCambiar) {
    return nuevoValor;
  } else {
    return feo;
  }
});

console.log(feos5); */
