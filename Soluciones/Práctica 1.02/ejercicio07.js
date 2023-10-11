"use strict";

function buscarLarga(frase) {
  var palabras = frase.split(" ");
  var palabraLarga = "";
  for (var i = 0; i < palabras.length; i++) {
    if (palabras[i].length > palabraLarga.length) {
      palabraLarga = palabras[i];
    }
  }
  return palabraLarga;
}
