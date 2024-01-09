"use strict";

var doc = window.document;

const crearTabla = (ancho, alto) => {
  // Obtener la referencia del elemento div.
  var div = document.getElementById("container");

  // Crea un elemento <table> y un elemento <tbody>.
  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");
  tblBody.setAttribute("id", "tabla");

  let contador = 1;
  // Crea las celdas.
  for (var i = 0; i < ancho; i++) {
    // Crea las filas de la tabla.
    var fila = document.createElement("tr");

    for (var j = 0; j < alto; j++) {
      /* Crea un elemento <td> y un nodo de texto, haz que el nodo de
             texto sea el contenido de <td>, ubica el elemento <td> al final
            de la fila de la tabla.*/
      var celda = document.createElement("td");
      // Se usa el contenido de la celda como "id".
      // Es mejor utilizar crypto.randomUUID(),
      // pero para este ejemplo es válido.
      celda.setAttribute("id", contador);
      var textoCelda = document.createTextNode(contador);
      contador++;
      celda.appendChild(textoCelda);
      fila.appendChild(celda);
    }

    // Agrega la fila al final de la tabla (al final del elemento tblbody).
    tblBody.appendChild(fila);
  }

  // posiciona el <tbody> debajo del elemento <table>.
  tabla.appendChild(tblBody);
  // appends <table> into <body>.
  div.appendChild(tabla);
};

// Función que añade o quita class="primo" a cada elemento de la tabla.
const colorearPrimos = () => {
  let contador = 1;
  let filas = doc.getElementsByTagName("tr");
  for (var i = 0; i < filas.length; i++) {
    let celdas = doc.getElementsByTagName("td");
    let columnas = celdas.length / filas.length;
    for (var j = 0; j < columnas; j++) {
      let celda = doc.getElementById(contador);
      if (esPrimo(celda.id)) {
        celda.classList.toggle("primo");
      }
      contador++;
    }
  }
};

// Función para comprobar si un número es primo.
const esPrimo = (numero) => {
  let primo = true;
  for (let i = 2; (i < numero) & primo; i++) {
    if (numero % i == 0) {
      primo = false;
    }
  }
  return primo;
};

crearTabla(10, 10);
window.setTimeout(colorearPrimos, 3000);
