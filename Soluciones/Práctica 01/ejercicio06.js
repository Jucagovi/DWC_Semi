"use strict";
function cumpleCondiciones(edad, tieneTrabajo, tieneCasa) {
  let resultado;
  if (edad >= 18 && tieneTrabajo && tieneCasa) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
