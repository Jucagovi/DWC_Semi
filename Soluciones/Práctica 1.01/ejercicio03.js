"use strict";
function esMultiplo(numero) {
  let resultado;
  if (numero % 3 === 0 && numero % 5 === 0) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
