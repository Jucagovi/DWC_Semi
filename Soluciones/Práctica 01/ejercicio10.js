"use strict";
function sumaPares(n) {
  let suma = 0;
  for (let i = 2; i <= n * 2; i += 2) {
    suma += i;
  }
  return suma;
}
