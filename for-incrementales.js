const preciosSinIva = [1200, 340, 560, 30400, 500, 80, 7060, 400, 1000, 90000];
const iva = 1.21;
const límiteParaDescuento = 4000;
const descuento = 0.75;

function guardarPreciosConIva(preciosSinIva) {
  let preciosConIva = [];
  for (let i = 0; i < preciosSinIva.length; i++) {
    preciosConIva.push(preciosSinIva[i] * iva);
  }
  return preciosConIva;
}

function aplicarDescuento(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element > límiteParaDescuento) {
      res.push(element * descuento);
    }
  }
  return res;
}

function mostrarPrecios(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

const preciosConIva = guardarPreciosConIva(preciosSinIva);
const preciosConDescuento = aplicarDescuento(preciosConIva);
mostrarPrecios(preciosConIva);
console.log("--------------");
mostrarPrecios(preciosConDescuento);
