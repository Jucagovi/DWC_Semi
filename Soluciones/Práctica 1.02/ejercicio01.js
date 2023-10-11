"use strict";

function suma() {
  let i;
  let salir = false;
  for (i = 0; i < arguments.length && !salir; i++) {
    if (isNaN(arguments[i])) {
      salir = true;
      return `Error. Por lo menos un parámetro no es de tipo numérico. El primero encontrado es: ${arguments[i]}.`;
    }
  }
  if (arguments.length <= 2) {
    return `Error. Para sumar necesito como mínimo 2 números.`;
  }
  let suma = 0;
  for (i = 0; i < arguments.length; i++) {
    suma = suma + arguments[i];
  }
  return `Todo bien, feo(a). La suma es: ${suma}.`;
}
