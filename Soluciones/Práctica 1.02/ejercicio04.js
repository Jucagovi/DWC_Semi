"use strict";

function esPalindromo(str) {
  var limpio = str.toLowerCase();
  var len = limpio.length;
  for (var i = 0; i < len / 2; i++) {
    if (limpio[i] !== limpio[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
