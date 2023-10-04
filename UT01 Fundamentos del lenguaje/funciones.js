"use strict";

/******* ANTES DE EMPEZAR *******/

/* let y var */

/******* Coerción de datos (débilmente tipado)  */

let a = "2",
  b = 5;
console.log(typeof a + " " + typeof b); // string number
console.log(a + b); // muestra 25

/******* OJO con los boolean */

// undefined, null, 0 "" y NaN se evaluan siempre como false.

/******* Operador ternario */

/* let altura; // Variable no definida.
console.log(altura ? true : false); // Al no estar definido, false.
altura = 1;
console.log(altura ? true : false); // Al estar definido, true. */

/******* FUNCIONES *******/

/******* Declaración de funciones declaración */

/* function doblar(num1) {
  var res = num1 * 2;
  return `El resultado es ${res}`;
}

console.log(doblar(151)); */

/******* Parámetros predeterminados */

/* function saludar(persona = "Amigo") {
  return `¡Hola ${persona}!`;
}

console.log(saludar()); */

/******* Funciones como parámetro */

/* function alpha(num, fun) {
  return fun(num);
}

console.log(alpha(50, doblar)); */

/******* Hoisting en funciones */

//Existe pero no es recomedable utilizarlo.

/******* Funciones anónimas (expresión) */

/* const feo = function (num1, num2) {
  return num1 + num2;
};
console.log(typeof feo);
console.log(feo);
console.log(feo(5, 7)); */

//Se usan en la definición de métodos de los objetos.

//Otro uso de la funciones anónimas (como parámetros)

/* var beta = alpha(5, function (num) {
  return num * 2;
});

console.log(`El valor de beta es ${beta}`); */

/******* Funciones flecha (usadas como callbacks, no como métodos) */

/* const potencia = (num) => {
  return num ** 3;
} */

/******* El pseudoarray (objeto iterable) arguments */

/* function sumarB() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
} */
