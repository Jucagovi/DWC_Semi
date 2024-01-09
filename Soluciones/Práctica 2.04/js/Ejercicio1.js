"use strict";

import { go, stop, reset } from "./Biblioteca.js";

window.onload = function () {
  var doc = window.document;

  // Elementos (botones) que se deben controlar.
  const elementoComenzar = doc.getElementById("comenzar");
  const elementoParar = doc.getElementById("parar");
  const elementoReset = doc.getElementById("reset");

  // Acciones que debe hacer cada botón.
  elementoComenzar.addEventListener("click", go, false);
  elementoParar.addEventListener("click", stop, false);
  elementoReset.addEventListener("click", reset, false);
}; // Fin del window.onload
