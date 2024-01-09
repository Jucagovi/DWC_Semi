"use strict";

function encontrarMaximo(arr) {
  var maximo = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maximo) {
      maximo = arr[i];
    }
  }
  return maximo;
}
