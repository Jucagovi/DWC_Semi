"use strict";

function rellenarVector(cantidad) {
  let vector = [];
  for (let i = 0; i < cantidad; i++) {
    vector[i] = Math.floor(Math.random() * 101);
  }
  return vector;
}

function imprimirVector(vector) {
  let linea = "[";
  for (let i = 0; i < vector.length; i++) {
    if (i < vector.length - 1) {
      linea = `${linea} ${vector[i]} -`;
    } else {
      linea = `${linea} ${vector[i]}`;
    }
  }
  return (linea = `${linea} ]`);
}

function sumar(vector1, vector2) {
  let vector = [];
  for (let i = 0; i < vector1.length; i++) {
    vector[i] = vector1[i] + vector2[vector2.length - i - 1];
  }
  return vector;
}

function calcular(fn1, fn2, fn3) {
  let vector1 = rellenarVector(100);
  let vector2 = rellenarVector(100);
  let vector3 = sumar(vector1, vector2);
  console.log(imprimirVector(vector1));
  console.log(imprimirVector(vector2));
  console.log(imprimirVector(vector3));
}
