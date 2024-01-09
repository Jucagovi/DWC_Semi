"use strict";

var doc = window.document;

// Se crea el array de imagenes.
var imagenes = [
  "https://content.r9cdn.net/rimg/dimg/d7/6d/bf09ef37-city-22202-164d2243c9c.jpg?crop=true&width=1020&height=498",
  "https://www.civitatis.com/blog/wp-content/uploads/2020/02/guggenheim.jpg",
  "https://www.viguetasnavarras.com/wp-content/uploads/2021/05/portada.jpg",
  "https://espanafascinante.com/wp-content/uploads/plaza-arriaga-cascoviejobilbao_eus.jpg",
];

// Se crea el elemento div que va a contener las imagenes.
const div = doc.createElement("div");
div.setAttribute("id", "container");
doc.body.appendChild(div);

// Se crea el elemento imagen y lo añade dentro del div.
const imagen = doc.createElement("img");
imagen.setAttribute("id", "img");
imagen.src = "";
imagen.alt = "";
div.appendChild(imagen);

// Variable item que se utiliza en el intevalo del carrousel.
var item = 0;

// Función que cambia la opacidad de la imagen.
const desvanecer = () => {
  var opacidad = 1;
  var intervaloOpacidad = setInterval(function () {
    if (opacidad <= 0) {
      clearInterval(intervaloOpacidad);
    } else {
      img.setAttribute("style", `opacity: ${opacidad}`);
      opacidad = opacidad - 0.1;
    }
  }, 160);
  opacidad = 1;
};

// Función dibujar. Cada vez que se llama esta funcion, se muestra la imagen de la posicion que se pasa.
const dibujar = (item) => {
  imagen.src = imagenes[item - 1];
};

// Función intervalo que muestra las imagenes cada dos segundos.
var intervaloCarrousel = setInterval(function () {
  item++;
  dibujar(item);
  desvanecer();
  //Si la variable que se va incrementando es igual que la longitud del array, se vuelve al principio del array de fotos.
  if (item == imagenes.length) {
    item = 0;
  }
}, 2000);
