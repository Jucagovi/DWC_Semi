"use strict";

// Función insertar después.
function insertAfter(nuevoElemento, existenteElemento) {
  // La propiedad nextSibling devuelve el siguiente nodo en el mismo nivel de árbol.
  existenteElemento.parentNode.insertBefore(
    nuevoElemento,
    existenteElemento.nextSibling
  );
}
