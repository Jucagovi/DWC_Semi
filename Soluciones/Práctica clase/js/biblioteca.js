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

const traerPeliculas = async (url, donde) => {
  let texto = "<h3>Películas</h3>";
  // Falta el control de errores.
  const peliculas = await getDatos(url);
  peliculas.map((pelicula, indice) => {
    texto += `<p id=${indice + 1} class='pelicula'>${pelicula.title}</p>`;
  });
  donde.innerHTML = texto;
};

const traerPelicula = async (numero) => {
  const datos = document.getElementsByClassName("informacion");
  const url = `https://swapi.dev/api/films/${numero}`;
  console.log(url);
  const pelicula = await getDatos(url);
  console.log(pelicula);
  /* datos.innerHTML = `<h2>${pelicula.title}</h2>
  <h3>${pelicula.director}</h3>
  <h4>Productor${pelicula.productor}</h4>
  <p>${pelicula.opening_crawl}</p>`; */
};

export { getDatos, mostrarDatos, traerPeliculas, traerPelicula };
