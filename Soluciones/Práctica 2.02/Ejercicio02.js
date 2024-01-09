"use strict";

var doc = window.document;

// Función que al hacer clic en el párrafo cambia class de visible (visibility:visible) a oculto (visibility:hidden).
const clicParrafo = (id) => {
  let parrafo = doc.getElementById(id);
  parrafo.classList.add("oculto");
  parrafo.classList.remove("visible");
};

// Función que hace reaparece a los elementos con class=oculto.
const reaparecer = () => {
  let parrafos = doc.getElementsByTagName("p");
  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].classList.add("visible");
    parrafos[i].classList.remove("oculto");
  }
};

// Función para crear colores aleatorios.
const hexadecimal = () => {
  let caracteresHexadecimales = "0123456789ABCDEF";
  let hexadecimal = "#";
  for (let digito = 0; digito < 6; digito++) {
    hexadecimal = hexadecimal.concat(
      caracteresHexadecimales.charAt(
        Math.floor(Math.random() * caracteresHexadecimales.length)
      )
    );
  }
  return hexadecimal;
};

// Función que al hacer mouse out cambia el color del fondo.
const cambiarColor = (id) => {
  let parrafo = doc.getElementById(id);
  parrafo.style.backgroundColor = hexadecimal();
};
