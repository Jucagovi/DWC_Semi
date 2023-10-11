"use strict";

function categoriaEdad(edad, esEstudiante) {
  let categoria;
  if (edad < 12) {
    categoria = esEstudiante ? "Niño Estudiante" : "Niño";
  } else if (edad >= 12 && edad <= 17) {
    categoria = esEstudiante ? "Estudiante Adolescente" : "Adolescente";
  } else if (edad >= 18 && edad <= 64) {
    categoria = "Adulto";
  } else {
    categoria = "Adulto Mayor";
  }
  return categoria;
}
