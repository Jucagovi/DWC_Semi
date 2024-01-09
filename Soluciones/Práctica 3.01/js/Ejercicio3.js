"use strict";

import { mostrarGentuza } from "./biblioteca.js";

window.onload = function () {
  const url = "https://swapi.dev/api/people";
  // En este ejercicio no se va a provocar el retraso de tres segundos ya que la API ya lo tiene.
  fetch(url)
    .then((objetoRespuesta) => {
      // Se recibe un objeto respuesta y se consume (para acceder a su contenido).
      return objetoRespuesta.json();
    })
    .then((datosRespuesta) => {
      // Esta API devuelve un objeto y en su clave "results" están los datos que se están buscando.
      // Recuerda que cada API es diferente y habrá que consultar su documentación para saber cómo funciona.
      mostrarGentuza(
        datosRespuesta.results,
        document.getElementById("gentuza")
      );
    })
    .catch((error) => {
      // Problemas con la gestión de errores según el servidor.
      console.error(error);
    });
}; // Fin del window.onload
