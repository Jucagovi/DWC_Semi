"use strict";

var arrayDni = [];

function pedirDni() {
  let dni;
  dni = prompt("Introduce un DNI sin la letra  \n(-1 para terminar) ");
  if (isNaN(dni) || dni < -1 || dni > 99999999) {
    console.log("ERROR. Datos no válidos.");
  } else {
    if (dni != -1) {
      arrayDni.push(letraDni(dni));
    } else {
      clearInterval(id);
      imprimirVector(arrayDni);
    }
  }
}

function letraDni(dni) {
  let secuenciaLetrasNIF = "TRWAGMYFPDXBNJZSQVHLCKE";
  return dni.toString().concat(secuenciaLetrasNIF.charAt(dni % 23));
}

function imprimirVector(vector) {
  console.log(`Has introducido ${vector.length} DNI.`);
  for (let i = 0; i < vector.length; i++) {
    console.log(vector[i]);
  }
}

const id = setInterval(pedirDni, 5000);
