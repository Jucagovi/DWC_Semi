"use strict";

// Para facilitar el acceso a la raíz del documento.
var doc = window.document;

// Función que devuelve un número aleatorio entre inicio y fin incluidos.
function aleatorio(inicio, fin) {
  return Math.floor(Math.random() * fin) + inicio;
}

// Función que borra la lista creada. Dejando el HTML como estaba al inicio.
function deleteList() {
  let lista = document.getElementById("lista");
  if (lista.hasChildNodes()) {
    while (lista.childNodes.length > 2) {
      lista.removeChild(lista.lastChild);
    }
  }
}

// Función que crea un nuevo elemento en la lista (evento onClick del botón en HTML).
function nuevoNumero() {
  // Se obtiene el elemento que contiene el <li>.
  let lista = doc.getElementById("lista");

  // Se crea uno elemento (nodo) tipo <li>.
  let li = doc.createElement("li");

  // Se obtiene el texto que se le va a añadir al elemento <li>.
  let liTexto = doc.createTextNode(aleatorio(1, 1000));

  // Se añade al elemento <li> el texto liTexto.
  li.innerHTML = liTexto.textContent;

  // Se añade el elemento <li> inmediatamente despúes de los <li> (hijos) ya exitentes.
  lista.appendChild(li);
}
