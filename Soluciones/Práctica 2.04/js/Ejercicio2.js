"use strict";

import { changeColor } from "./Biblioteca.js";

window.onload = function () {
  // Al hacer doble click en cualquier parte de la pantalla se cambia el color de fondo aleatoriamente.
  document.body.addEventListener("dblclick", changeColor, false);
}; // Fin del window.onload
