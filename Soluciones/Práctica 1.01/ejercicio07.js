"use strict";

function mayorDeTres(a, b, c) {
  let mayor;
  if (a >= b && a >= c) {
    mayor = a;
  } else if (b >= a && b >= c) {
    mayor = b;
  } else {
    mayor = c;
  }
  return mayor;
}
