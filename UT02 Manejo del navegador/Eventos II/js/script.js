"use strict";

window.onload = () => {
  // ***************** Arrastrar y soltar *********************************

  /** Eventos a tener en cuenta:
   *    - dragstart   --> comienza el evento de arrastrar,
   *    - dragover    --> mientras el elemento arrastrado esté encima del soltable,
   *    - drop        --> cuando se suleta el elemento arrastrado sobre el soltable.
   *
   * De modo opcional también se dispone de:
   *    - dragenter   --> cuando el elemento arrastrado entra sobre el soltable,
   *    - dragleave   --> cuando el elemento arrastrado sale del elemento soltable,
   *    - dragend     --> cuando se termina el evento (después del drop).
   *
   *    Se utilizan, entre otras cosas, para aplicar diseño al evento a través de clases.
   *
   * DataTransfer es un objeto temporal para guardar información que se produce al empezar el arrastre de un elemento.
   * Posee los siguiente métodos:
   *    - setData()   --> configura un par clave-valor durante el proceso de arrastre.
   *    - getData()   --> obtienen el valor de la clave especificada como parámetro.
   *    - clearData() --> borra el contenido del objeto si no se le especifica parámetro.
   */

  // Asignar propiedad "dragable" a los objetos arrastables.

  var arr = document.getElementsByClassName("arrastrable");
  for (var i = 0; i < arr.length; i++) {
    arr[i].setAttribute("draggable", true);
  }

  var elementoArrastrado; // Elemento que va a ser arrastarado. ¡¡Evitar!!

  document.getElementById("zona_con_arrastrar").addEventListener(
    "dragstart",
    (evento) => {
      elementoArrastrado = evento.target; // Forma de hacerlo con objeto completo. ¡¡Evitar!!

      evento.dataTransfer.setData("identificador", evento.target.id);
      evento.dataTransfer.setData("nombre", evento.target.localName);
      console.log(evento);
      console.log(evento.dataTransfer.getData("identificador"));
      console.log(evento.dataTransfer.getData("nombre"));
    },
    false
  );

  document.getElementById("zona_con_arrastrar").addEventListener(
    "dragover",
    (evento) => {
      evento.preventDefault(); // ¡¡IMPORTANTE!! -> previene el funcionamiento por defecto.
    },
    false
  );

  document.getElementById("zona_con_arrastrar").addEventListener(
    "drop",
    (evento) => {
      evento.preventDefault(); // ¡¡IMPORTANTE!! -> previene el funcionamiento por defecto.
      if (evento.target.classList.contains("soltable")) {
        console.log(`Soltado en ${evento.target.className}`);

        evento.target.appendChild(
          //elementoArrastrado // ¡¡Evitar!!
          document.getElementById(evento.dataTransfer.getData("identificador"))
        );
      }
    },
    false
  );

  //****************************************************************
  //** Delegación de eventos */

  // Seleccion de los elementos del DOM para los ejemplos.
  let botones = document.getElementsByClassName("boton");

  // Declaración de funciones para los ejemplos.

  const anadirBoton = () => {
    // Se añade el botón al contenedor.
    document.getElementById("contenedor").innerHTML +=
      "<button class='boton'>Botón nuevo</button>";
  };

  const anadirBotonConId = () => {
    // Se crea el identificador.
    let identificador = crypto.randomUUID();
    // Se añade el botón al contenedor con id.
    document.getElementById(
      "contenedor"
    ).innerHTML += `<button class='boton' id="${identificador}">Botón nuevo</button>`;
    // Se añade el evento al nuevo botón.
    document.getElementById(identificador).addEventListener(
      "click",
      (evento) => {
        console.log(evento.target);
      },
      false
    );
  };

  const anadirEvento = (elementos) => {
    // Se transforma elementos en un Array (de este modo puedo usar tanto getElement como querySelector).
    Array.from(elementos).forEach((elemento) => {
      elemento.addEventListener("click", (evento) => {
        console.log(evento.target.tagName);
        console.log(evento.target);
      });
    });
  };

  //** ¿Cómo solucionamos el problema de los eventos? */
  document.getElementById("nuevo").addEventListener("click", () => {
    anadirBoton();
    //anadirBotonConId();
  });

  anadirEvento(botones);

  let contenedor = document.getElementById("contenedor");
  /*  contenedor.addEventListener(
    // Se utiliza la delegación de eventos.
    "click",
    (evento) => {
      console.log(evento.target.tagName);
    },
    false
  ); */
}; // Fin del window.onload.
