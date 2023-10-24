"use strict";

// Para facilitar el acceso a la raíz del documento.
var doc = window.document;

// Añadir botón borrar.
const insertarBoton = () => {
  const nuevoBoton = doc.createElement("button");
  nuevoBoton.innerText = "Reset";
  nuevoBoton.onclick = function () {
    borrar();
  };
  doc.body.appendChild(nuevoBoton);
};

// Función que elimina todas las palabras creadas.
const borrar = () => {
  let tabla = doc.getElementById("bodyTabla");
  if (tabla.hasChildNodes()) {
    while (tabla.childNodes.length > 2) {
      tabla.removeChild(tabla.lastChild);
    }
  }
};

// Función para generar un UUID aleatorio (cortesía de ChatGPT).
const generarUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// Reutilización de la función toCani pero parametrizada para indicar el id de destino.
function toCani(id) {
  let cadena = doc.getElementById(id).textContent;
  let cadenaCani = "";
  cadena = cadena.toLowerCase();
  for (let i = 0; i < cadena.length; i++) {
    if (i % 2 == 0) {
      cadenaCani = cadenaCani.concat(cadena.charAt(i).toUpperCase());
    } else {
      cadenaCani = cadenaCani.concat(cadena.charAt(i));
    }
  }
  cadenaCani = cadenaCani.replaceAll("c", "k");
  cadenaCani = cadenaCani.replaceAll("C", "K");
  doc.getElementById(id).innerHTML = cadenaCani;
}

// Función que recoge el texto escrito y lo añade a la tabla.
const getValueInput = () => {
  //Se obtiene el valor del input type text.
  let valor = doc.getElementById("texto").value;

  // Se comprueba que el valor no esté vacío.
  if (valor.trim() !== "") {
    // Se crea un elemento tipo texto.
    var textoCelda = doc.createTextNode(valor);

    // Se obtiene el nodo <tabla> por medio de su id="bodyTabla".
    let tabla = doc.getElementById("bodyTabla");

    // Se inserta una fila.
    var fila = tabla.insertRow(-1);

    // Se crea la primera celda de la fila.
    var celda1 = fila.insertCell(0);

    // Se añade un id tipo UUID para identificar cada celda.
    celda1.setAttribute("id", generarUUID());

    // Se crea la segunda celda de la fila.
    var celda2 = fila.insertCell(1);

    // Se añaden las celdas.
    // La celda2 es el botón Caniar que pasa como parámetro el id de la celda a la función toCani.
    celda1.innerHTML = textoCelda.textContent;
    celda2.innerHTML = `<button onclick="toCani(\'${celda2.parentElement.firstChild.id}\')">Caniar</button>`;
  }
  // Borrar la entrada del formulario.
  doc.getElementById("texto").value = "";
};

insertarBoton();
