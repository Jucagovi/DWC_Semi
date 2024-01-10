// Función para consumir promesas generalista.
const getDatos = (url) => {
  // Obtiene datos de una API y los transforma a JSON.
  return (
    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        return datos.results;
      })
      // Si se produce un error se devuelve un mensaje.
      .catch((error) => {
        return `Se ha producido un error: ${error.message}`;
      })
  );
};

// Función para dibujar datos en el DOM.
const mostrarDatos = (datos, donde) => {
  let cadena = "";
  if (Array.isArray(datos) && datos.length) {
    datos.map((valor, indice, array) => {
      cadena += `<p>Imprimir algo</p>`;
    });
  } else {
    cadena = "No se han encontrado planetas en esta galaxia.";
  }
  donde.innerHTML = cadena;
};

export { getDatos, mostrarDatos };
