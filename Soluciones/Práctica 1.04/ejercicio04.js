"use strict";

let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

function imprimirFecha() {
  var f = new Date();
  console.log(
    diasSemana[f.getDay()] +
      ", " +
      f.getDate() +
      " de " +
      meses[f.getMonth()] +
      " de " +
      f.getFullYear()
  );
  clearTimeout(id);
}

const id = setTimeout(imprimirFecha, 3000);
