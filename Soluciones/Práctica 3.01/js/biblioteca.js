const numeroAleatorio = (min = 0, max = 10) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const esPar = (numero) => {
  return numero % 2 === 0;
};

const ordenarArray = (aOrdenar) => {
  const nuevoArray = aOrdenar.sort((valorA, valorB) => {
    let respuesta;
    if (valorA.first_name > valorB.first_name) {
      respuesta = 1;
    } else if (valorB.first_name > valorA.first_name) {
      respuesta = -1;
    } else {
      respuesta = 0;
    }
    return respuesta;
  });
  return nuevoArray;
};

const mostrarFeos = (cosas, donde) => {
  let cadena = "";
  // Si tiene valores...
  if (cosas.length) {
    // ...se ordenan.
    const cosasOrdenadas = ordenarArray(cosas);
    // Se imprime el array ordenado.
    cosasOrdenadas.map((valor, indice, array) => {
      cadena += `<p>${valor.first_name} ${valor.last_name} tiene como correo electrónico ${valor.email}.</p>`;
    });
  } else {
    cadena = "No se han encontrado feos (y eso es muy raro).";
  }
  donde.innerHTML = cadena;
};

const mostrarGentuza = (cosas, donde) => {
  let cadena = "";
  cosas.length
    ? cosas.map((valor, indice, array) => {
        cadena += `<div>
        <p class="gentuzaNombre">${valor.name}</p>
        <ul>
          <li>Peso: ${valor.mass}</li>
          <li>Color de pelo: ${valor.hair_color}</li>
          <li>Año de nacimiento: ${valor.birth_year}</li>
        </ul>
        </div>`;
      })
    : (cadena = "No se ha econtrado gentuza (y eso es muy raro).");
  donde.innerHTML = cadena;
};

export { numeroAleatorio, esPar, mostrarFeos, mostrarGentuza };
