"use strict";

function filtrarPares(arr) {
  var resultado = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      resultado = [...resultado, arr[i]];
    }
  }
  return resultado;
}
