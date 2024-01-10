"use strict";
// Se hacen las importaciones necesarias.
// No es buena idea declarar funciones en el fichero principal.
import { traerPeliculas, traerPelicula } from "./biblioteca.js";
// Se ejecuta el código tras la carga del objeto window.

window.onload = () => {
  const apiFea = "https://swapi.dev/api/films";
  const menu = document.getElementById("listado");
  menu.addEventListener("click", (evento) => {
    traerPelicula(evento.target.id);
  });

  traerPeliculas(apiFea, menu);
}; // Fin del window.load.
