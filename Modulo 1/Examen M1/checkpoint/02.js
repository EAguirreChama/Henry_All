// 2️⃣ ***** EJERCICIO 2 ***** - calcularImpuestos() 2️⃣
// En este ejercicio, debemos implementar la función calcularImpuestos, de forma recursiva.
// Debes retornar la suma total con los decimales incluidos.
// La función recibirá boletas/facturas con los impuestos anuales por la casa, aunque pueden haber 
// boletas vacias (por ende no son array), por lo que tendremos que validar eso.
// Sabiendo esto, si la persona no tiene impuestos, debes retornar false, si tiene impuestos debes sumarlos
// y si no es una boleta/factura (array), debes devolver "error"
// si no hay inconvenientes, devolverlos para que sepa el total que debe pagar.
//
//
// EJEMPLOS:
// [1,2,3,4,5] => 15
// {} => "Error"
// [] => False
//
//
// REQUISITOS:
//  🟢 La función debe obtener el total hallado de forma recursiva                                 
//  🟢 La función debe retornar el valor numérico correspondiente, contando tambien los decimales. 
//  🟢 Si no tiene impuestos, debes retornar false.                                               
//  🟢 Si factura no es un array, debes retornar "Error".                                              

const calcularImpuestos = (factura, i = 0, acc = 0) => {
  // Tu código aquí:

  //Se crea una condición que en caso de que el arreglo se encuente vacío retorne false
  if (factura.length == []) return false;
  //Se crea otra condición para saber si no es un array se retorne Error
  //Array.isArray nos dice si el parametro que pasamos es un arreglo, poniendo ! estamos negando, es decir, si no es un arreglo que retorne Error
  if (!Array.isArray(factura)) return "Error";
  else {
    //En caso de que sea un arreglo
    //Se crea una condición que si factura tiene solo una posicion, retorne ese unico valor
    if (factura == 1) return factura [0]
    //En caso de que sean más posiciones
    //Que el total sea igual a el valor de la posición cero + se vuelve a llama la funcion con los mismos parametros
    //factura.slice quiere decir que empiece de nuevo la función desde la posición 1
    acc = (factura[0] + calcularImpuestos(factura.slice(1), i = 0 , acc));
    //Se retorna el Numero con el metodo .toFixed para cuente tambien hasta dos decimales
    return Number(acc.toFixed(2))
  }
  // Termine el 2
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  calcularImpuestos
}
