"use strict";

function sonAnagramas(palabra1, palabra2) {
  let resultado;
  palabra1 = palabra1.replace(/\s/g, "").toLowerCase();
  palabra2 = palabra2.replace(/\s/g, "").toLowerCase();

  var palabraOrdenada1 = palabra1.split("").sort().join("");
  var palabraOrdenada2 = palabra2.split("").sort().join("");

  // Comparamos las palabras ordenadas
  if (palabraOrdenada1 === palabraOrdenada2) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
