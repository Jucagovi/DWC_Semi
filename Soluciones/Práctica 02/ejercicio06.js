"use strict";

function cambiarLetras(str) {
  var resultado = "";
  for (var i = 0; i < str.length; i++) {
    var caracter = str[i];
    switch (caracter) {
      case "a":
        resultado += "e";
        break;
      case "e":
        resultado += "i";
        break;
      case "i":
        resultado += "o";
        break;
      case "o":
        resultado += "u";
        break;
      case "u":
        resultado += "a";
        break;
      default:
        resultado += caracter;
    }
  }
  return resultado;
}
