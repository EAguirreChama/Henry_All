// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
// 3️⃣ ***** EJERCICIO 3 ***** - casasPorAño() 3️⃣
// En este ejercicio debemos implementar la función casasPorAño(), la cual debe retornar
// cuantas casas por año se construyeron.
// La función recibira por parametro el / los años que se quieren consultar y devolvera
// la cantidad de casas que se pueden construir en base a la siguiente secuencia:
//
// - Si el año es 0 la cantidad de casas por año es de 0
// - Si el año es 1 la cantidad de casas por año es de 30
// - A partir del 2do año, se debe calcular con la siguiente formula: c(n-1) + c(n / n) => debe retornar 60
//
// EJEMPLOS:
// - casasPorAño(0) => 0
// - casasPorAño(1) => 30
// - casasPorAño(2) => 60
//
// REQUISITOS:
// 🟢 La función debe obtener la cantidad de casas por año de forma recursiva.
// 🟢 Si el valor de n recibido por parámetro es menor a 0, debe retornar false.
// 🟢 Si el valor de n recibido por parámetro es 1, debe retornar 30.

function casasPorAño(n) {
  // Tu código aquí:
  //Se crea una condición que en caso de que el numero pasado por parametro sea menor a 0, retorne false
  if (n < 0) return false
  //Se crea una siguiente condición que en caso de que el numero pasado por parametro sea igual a 1, retorne 30
  if (n === 1) return 30
  //En caso de que no sea ninguna de las anteriores
  //Se utiliza la formula pasada por consigna
  //Se vuelve a llamar la función
  return casasPorAño(n-1) + casasPorAño(n/n);
  // Termine el 3
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  casasPorAño,
}
