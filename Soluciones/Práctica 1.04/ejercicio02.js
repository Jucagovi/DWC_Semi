"use strict";

var totalTiempo;

function temporizador(minutos, segundos) {
  if (segundos == undefined) {
    segundos = minutos;
    minutos = 0;
  }
  if (
    minutos < 0 ||
    segundos < 0 ||
    segundos > 59 ||
    isNaN(minutos) ||
    isNaN(segundos)
  ) {
    console.log("ERROR");
    clearInterval(id);
  } else {
    console.log(`Inicio Cuenta Atrás:`);
    totalTiempo = minutos * 60 + segundos;
  }
}

function actualizarReloj() {
  console.log(formatearHora(totalTiempo));
  if (totalTiempo == 0) {
    clearInterval(id);
  } else {
    totalTiempo--;
  }
}

function formatearHora(duracion) {
  let segundos = parseInt(duracion % 60);
  let minutos = parseInt((duracion / 60) % 60);
  let horas = parseInt((duracion / (60 * 60)) % 24);

  horas = horas < 10 ? "0" + horas : horas;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;

  return horas + ":" + minutos + ":" + segundos;
}

const id = setInterval(actualizarReloj, 1000);
