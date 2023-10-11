"use strict";

const dniInicial = 48357001;
const dniFinal = 48360000;

function contarDni(letra) {
  let todosLosDnis = "";
  let secuenciaLetrasNIF = "TRWAGMYFPDXBNJZSQVHLCKE";
  let contador = 0;
  for (let i = dniInicial; i <= dniFinal; i++) {
    if (letra == secuenciaLetrasNIF.charAt(i % 23)) {
      contador++;
      todosLosDnis = todosLosDnis.concat(i + letra.concat("   "));
    }
  }
  console.log(`Hay ${contador} DNI entre ${dniInicial} y ${dniFinal}`);
  return todosLosDnis;
}
