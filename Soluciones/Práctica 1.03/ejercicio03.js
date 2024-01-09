"use strict";

function eliminarDuplicados(arr) {
  var resultado = [];
  for (var i = 0; i < arr.length; i++) {
    if (resultado.indexOf(arr[i]) === -1) {
      resultado = [...resultado, arr[i]];
    }
  }
  return resultado;
}
