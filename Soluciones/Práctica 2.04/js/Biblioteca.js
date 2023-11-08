"use strict";

var doc = window.document;

// Variable global para controlar el intervalo.
var intervalo;

// Función que inicia el intervalo y muestra el mensaje en la pantalla.
const go = () => {
  intervalo = setInterval(function () {
    addElemento("h1", "h1", "¡Hola Feo!");
  }, 1000);
};

// Función que detiene el intervalo.
const stop = () => {
  clearInterval(intervalo);
};

// Función que borra todos los mensajes de la pantalla creados con la función go.
const reset = () => {
  // Se detiene el intervalo.
  stop();
  let container = doc.getElementById("h1");
  // Se eliminan los hijos.
  eliminarHijos(container);
};

// Función que elimina los hijos del elemento pasado por parámetro.
const eliminarHijos = (elementoPadre) => {
  let hijos = elementoPadre.children.length;
  for (let i = hijos - 1; i >= 0; i--) {
    elementoPadre.children[i].remove();
  }
};

// Función que añade un elemento a partir del id del elemento padre.
// Crea un elemento del tipo etiqueta pasado por parámetno y le añade el texto.
const addElemento = (idElementoPadre, etiqueta, texto) => {
  let container = doc.getElementById(idElementoPadre);
  let elemento = doc.createElement(etiqueta);
  elemento.innerHTML = texto;
  container.appendChild(elemento);
};

// Función que cambia el color creado con la función colorHexadecimal.
const changeColor = (evento) => {
  evento.target.style.backgroundColor = colorHexadecimal();
};

// Función que genera aleatorimente un color en formato hexadecimal.
const colorHexadecimal = () => {
  let letras = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let color = "#";
  for (let i = 0; i <= 5; i++) {
    color += letras[Math.floor(Math.random() * letras.length)];
  }
  return color;
};

// Función que muestra las coordendas del ratón sobre la pantalla.
const getPosition = (evento) => {
  let elemento = document.getElementById("coordenadas");
  elemento.innerHTML =
    "(" + `${evento.clientX}` + ", " + `${evento.clientY}` + ")";
};

// Función que cambia la papelera llena por una papelera vacía.
const vaciar = (evento) => {
  if (evento.target.getAttribute("src") === "./img/llena.jpg") {
    evento.target.setAttribute("src", "./img/vacia.jpg");
    evento.target.setAttribute("id", "vacia");
    let elemento = doc.getElementById("arrastrables");
    elemento.appendChild(evento.target.childNodes[0]);
  }
};

const mostrarContenido = (objeto) => {
  // Se accede al elemento hermano al que ha originado el evento y se le cambia la clase.
  objeto.nextElementSibling.classList.toggle("oculto");
};

export { go, stop, reset, changeColor, getPosition, mostrarContenido, vaciar };
