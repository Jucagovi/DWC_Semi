"use strict";

function validarProducto(
  nombre = "Producto Genérico.",
  precio = 100,
  impuesto = 21
) {
  if (isNaN(precio) || isNaN(impuesto)) {
    return `Error. Número(s) no valido(s).`;
  } else {
    let precioFinal = precio + (precio * impuesto) / 100;
    return `Producto: ${nombre}   -   Precio: ${precioFinal}`;
  }
}

console.log(validarProducto());
console.log(validarProducto("Pelota", "q", 15));
console.log(validarProducto("Pelota", 50));
console.log(validarProducto("TV FHD", 875, 21));
