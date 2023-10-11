"use strict";

function cadenaInversa(str) {
  var resultado = "";
  for (var i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}
