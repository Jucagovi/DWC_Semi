"use strict";

function contarVocales(str) {
  var vocales = "aeiouAEIOU";
  var contador = 0;
  for (var i = 0; i < str.length; i++) {
    if (vocales.indexOf(str[i]) !== -1) {
      contador++;
    }
  }
  return contador;
}
