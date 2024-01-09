"use strict";

let masaMarcos = 90;
let alturaMarcos = 1.9;
let masaJuan = 75;
let alturaJuan = 1.8;

let imcMarcos = masaMarcos / (alturaMarcos * alturaMarcos);
let imcJuan = masaJuan / (alturaJuan * alturaJuan);

let imcMarcosMayorQueJuan = imcMarcos > imcJuan;

console.log(`IMC de Marcos: %.2f`, imcMarcos);
console.log(`IMC de Marcos: %.2f`, imcJuan);
console.log(
  `¿Tiene Marcos un IMC mayor que el de Juan?: ${imcMarcosMayorQueJuan}`
);
