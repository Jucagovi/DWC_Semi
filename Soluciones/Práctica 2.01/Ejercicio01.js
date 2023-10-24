"use strict";

var doc = window.document;

// Función censor(). Recoje todo el texto del body y sustituye "sexo" por "Contenido Bloqueado".
const censor = () => {
  doc.body.innerHTML = doc.body.innerHTML.replace(
    /sexo/g,
    "<span class='destacado'>Contenido Bloqueado</span>"
  );
  console.log("Contenido censurado.");
};

// Se programa la ejecución a los tres segundo de cargar la página.
window.setTimeout(censor, 3000);
