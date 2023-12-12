"use strict";

// Se importan las funciones desde la biblioteca.
import { mostrarFeos } from "./biblioteca.js";

window.onload = () => {
  // Se configura el origen de los datos.
  const ficheroFeos = "./objetos/feos.json";

  // El enunciado pide que se ejecute a los tres segundos de la carga de la página.
  setTimeout(() => {
    // Se realiza la petición a través del objeto XMLHttpRequest con la API fetch.
    fetch(ficheroFeos)
      // Cuando se obtengan los datos (no sé cuándo será)...
      .then((objetoRespuesta) => {
        // Se consume la promesa (objeto response) y se obtienen los datos (no sé el tiempo que tardará en hacer la conversión).
        return objetoRespuesta.json();
        // Se devuelven esos datos al siguiente then para que se consuman allí.
      })
      .then((datosRespuesta) => {
        // Se utilia una función para pintar los datos en el DOM.
        mostrarFeos(datosRespuesta, document.getElementById("feos"));
      });
  }, 3000);
}; // Fin del window.onload
