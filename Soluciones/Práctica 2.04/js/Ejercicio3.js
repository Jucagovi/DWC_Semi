"use strict";

import { getPosition } from "./Biblioteca.js";

window.onload = function () {
  // Devulve la posición del ratón al moverlo por la pantalla.
  document.body.addEventListener("mousemove", getPosition, false);
}; // Fin del window.onload
