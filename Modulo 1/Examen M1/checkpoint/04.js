// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
//
//
// 4️⃣ ***** EJERCICIO 4 ***** - construccionCasas() 4️⃣
// En este ejercicio debemos implementar la función construccionCasas() la cual nos va a determinar
// cuantas casas se pueden construir segun la cantidad de bolsas de cemento que dispongamos.
// La función recibira por parametro la cantidad de bolsas de cemento que dispongamos y 
// dentro de la misma debe retornar otra funcion pasandole por parametros la cantidad de casas que querramos construir.
//
// INFO:
// 10 bolsas de cemento equivalen a 1 casa
// -Si la cantidad de casas que recibo es 0 o menor debe retornar "Por favor ingresar cuantas casas quieres construir"
// -Si la cantidad de bolsas de cemento no equivalen a 1 casa debe retornar "No se puede construir casas con esa cantidad de bolsas"
// -Si la cantidad de casas sobrepasa la cantidad de bolsas de cemento necesarias para construir esas casas... 
// -ej: bolsas de cemento = 10 y casas = 2 debe retornar `Solo puedes construir esta cantidad de casas: 1`
// -Si la cantidad de casas es igual a la cantidad de bolsas de cemento necesarias para construir esas casas debe retornar true
//
// EJEMPLOS:
// let casas = construccionCasas(100)
// casas(10) => 10 me devolveria true
//
// let casas = construccionCasas(0)
//casas(10) => 'No se puede construir casas con esa cantidad de bolsas'
//
// REQUISITOS:
//  🟢

function construccionCasas(bolsas) {
  // Tu código aquí:

  //Se retorna una función nueva
  return function(cantidadCasas){
    //Se crea una condición que en caso de que el valor de casas sea igual a menor a cero retorne la siguiente
    if (cantidadCasas <= 0) {
      return "Por favor ingresar cuantas casas quieres construir";
      //Si no es asi, la siguiente condición
      //Si la cantidad de bolsas es menor a 10
    } else if (bolsas < 10) {
      return "No se puede construir casas con esa cantidad de bolsas";
      //Si no es asi, la siguiente condición
      //Si la cantidad de casas es mayor al numero de bolsas
    } else if (cantidadCasas > bolsas / 10) {
      //Se retorna la oracion mas el valor. Se utiliza Math.floor para rendondear hacia abajo la división
      return "Solo puedes construir esta cantidad de casas: " + Math.floor(bolsas / 10);
    } else {
      //En el caso de que no sea ninguna de las anteriores que retorne true
      return true;
    }
  }
}
// Termine el 4

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  construccionCasas,
};
