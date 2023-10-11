"use strict";

function multiplicar(valor) {
  let i, j;
  for (i = 2; i <= valor; i++) {
    console.log(`Tabla de multiplicar del ${i}.`);
    for (j = 0; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log();
  }
}

function tablas(valor, fn) {
  if (valor > 2) {
    return fn(valor);
  } else {
    console.log(
      `Error. Para mostrar las tablas el valor del parámetro tiene que ser mayor que 2.`
    );
  }
}
