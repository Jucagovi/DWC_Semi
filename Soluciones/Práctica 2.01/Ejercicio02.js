"use strict";

// Para facilitar el acceso a la raíz del documento.
let doc = window.document;

// El número de párrafos de la página.
let parrafos = doc.getElementsByTagName("p");

// Función que crea el informe.
const informe = () => {
  // Contendrá el código para añadir el texto del resumen al <div> con id=info.
  let informacion = "";

  // Añadiendo la cantidad de párrafos (parrafos.length).
  informacion += `<p id='parrafo1'><strong>Cantidad de párrafos: </strong> ${parrafos.length}</p>`;

  // El texto del segundo parrafo (parrafos[1]).
  informacion += `<p id='parrafo2'><strong>Texto del segundo párrafo: </strong><br/>${parrafos[1].innerHTML}</p>`;

  // El número de enlaces de la página.
  let enlaces = doc.getElementsByTagName("a");
  informacion += `<p id='parrafo3'><strong>El número de enlaces es: </strong>${enlaces.length} </p>`;

  // La dirección del primer enlace.
  informacion += `<p id='parrafo4'><strong>La dirección del primer enlace: </strong>${enlaces[0].getAttribute(
    "href"
  )}</p>`;

  // La dirección del penúltimo enlace.
  informacion += `<p id='parrafo5'><strong>La dirección del penúltimo enlace: </strong>${enlaces[
    enlaces.length - 2
  ].getAttribute("href")}</p>`;

  // Añadiendo la información (5 párrafos) al div.
  document.getElementById("info").innerHTML = informacion;
};

window.setTimeout(informe, 3000);
