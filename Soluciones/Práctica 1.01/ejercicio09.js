"use strict";

function doblar(n, multiplicador) {
  var resultado = multiplicador;
  for (var i = 1; i <= n; i++) {
    console.log(resultado);
    resultado *= 2;
  }
}
