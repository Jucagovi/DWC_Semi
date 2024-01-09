"use strict";

import { mostrarContenido } from "./Biblioteca.js";

// Se realiza todo el código cuando se cargen todos los componentes del objeto window.
window.onload = () => {
  // Se seleccionan todos los los <div> con clase "elemento" .
  const elementos = document.getElementsByClassName("elemento");

  // Se añade el evento onClick a todos ellos.
  for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i]);
    elementos[i].addEventListener("click", (evento) => {
      // La función callback recibe el evento que contiene el objeto que ha provocado el evento (target).
      // Se le pasa a la función mostrarContenido.
      mostrarContenido(evento.target);
    });
  }
}; // Fin window.onload.
