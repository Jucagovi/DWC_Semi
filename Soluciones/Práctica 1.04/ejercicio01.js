"use strict";

function toCani(cadena) {
  let cadenaCani = "";
  cadena = cadena.toLowerCase();
  for (let i = 0; i < cadena.length; i++) {
    if (i % 2 == 0) {
      cadenaCani = cadenaCani.concat(cadena.charAt(i).toUpperCase());
    } else {
      cadenaCani = cadenaCani.concat(cadena.charAt(i));
    }
    cadenaCani = cadenaCani.replaceAll("c", "k");
    cadenaCani = cadenaCani.replaceAll("C", "K");

    return cadenaCani.concat("HHH");
  }
}
