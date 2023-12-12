"use strict";

// Se importan las funciones desde la biblioteca.
import { numeroAleatorio, esPar } from "./biblioteca.js";

window.onload = () => {
  // Se crea la promesa con el códgo que es susceptible a retrasarse.
  const promesaPar = new Promise((resolver, rechazar) => {
    // Se retrasa la ejecución del código artificialmente.
    setTimeout(() => {
      let numero = numeroAleatorio(0, 100);
      if (esPar(numero)) {
        resolver("El número es par."); // Se resuelve positivamente.
      } else {
        rechazar(new Error("El número es impar.")); // Se rechaza la respuesta (negativamente).
      }
    }, 3000);
  });

  console.log(`El resultado ha sido:`);
  // Para acceder al contenido de la promesa hay que consumirla con .then y .cath .
  promesaPar
    .then((datosResolver) => {
      // Resolver devuelve una cadena de texto.
      console.log(`${datosResolver}`);
    })
    .catch((datosRechazar) => {
      // Rechazar devuelve un objeto del tipo error.
      // Se accede al mensaje de error a través de su propiedad message.
      // También puede devolver una cadena de texto, pero lo habitual es que devuelva un objeto error.
      console.log(datosRechazar.message);
    });
}; // Fin del window.onload
