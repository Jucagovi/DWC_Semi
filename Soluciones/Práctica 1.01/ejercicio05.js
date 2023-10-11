"use strict";
function categoriaEdad(edad) {
  let resultado;
  if (edad < 12) {
    resultado = "Niño";
  } else if (edad >= 12 && edad <= 17) {
    resultado = "Adolescente";
  } else if (edad >= 18 && edad <= 64) {
    resultado = "Adulto";
  } else {
    resultado = "Adulto Mayor";
  }
  return resultado;
}
