const { Stack } = require("../DS");
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
// 5️⃣ ***** EJERCICIO 5 ***** - tipologiasSeparadas() 5️⃣
// En este ejercicio debemos implementar la funcion tipologiasSeparadas() 
// la cual va a recibir por parametro un array con el numeros de tipologias en el orden que se van a construir.
// Supongamos que tenemos un barrio en donde la construccion de casas pueden ser de distintos tipos de tipologias en una misma manzana.
// Pero hay una limitacion, que no puede haber 2 tipologias iguales una al lado de la otra.
// Nuestro objetivo es utilizar el STACK para poder detectar si cuando nos pasan el array de como se van 
// a construir las casas necesitamos separar las tipologias que se repiten.
//
// EJEMPLOS:
// let arr = [1, 2, 2, 3, 3, 6, 4, 5]
// tipologiasSeparadas(arr) => [1, 2, 3, 6, 4, 5, 2, 3]
//
// REQUISITOS:
// 🟢 La función debe crear y retornar el Stack creado con las casas de forma correcta sin tipologias repetidas.
// 🟢 El Stack que retorna debe ser una instancia de la clase Stack.
// 🟢 En caso de que no hayan tipologias repetidas o que ya las recibamos separadas correctamente, debe retornar "No hay tipologias repetidas".
// 🟢 En caso de recibir un array vacio debe retornar "Tipologias inexistentes".

function tipologiasSeparadas(arr) {
  // Tu código aquí:
  
  //Nos piden que creemos una nueva instancia de Stack
  let NewStack = new Stack()
  //Se crea un auxiliar para ir guardando las casas que se repitan
  let aux = [];
  //Se crea una condición para que en caso de que el arrego se encuentre vacio retorne una oración 
  if (!arr.length) return "Tipologias inexistentes"
  //En el caso de que no sea asi
  //Se crea un bucle for para recorrer el arreglo 
  for (let i = 0 ; i < arr.length -1 ; i++) {
    //Se crea una condicion
    //Si el valor de la posicion en la que se esta recorriendo es igual al valor de la siguiente posicion
    if (arr[i] === arr[i+1]) {
      //Se agrega con el metodo push ese valor dentro del auxiliar
      aux.push(arr[i])
      //En el caso de que no sea asi
      //Se agrega a la nueva Stack con el metodo push ese valor
    } else NewStack.push(arr[i])
    //Se crea un metodo para que al arreglo se le agregue en la ultima posicion del arreglo
  } NewStack.push(arr[arr.length-1])
  //Con un bucle for, los valores que se guardaron en aux se sumen a la nueva instancia
  for (let x in aux) {
    NewStack.push(aux[x])
  }
  //Se crea una ultima condición que en caso de que el aux se encuentre vacio retorne la siguiente oración
  if (!aux.length) return "No hay tipologias repetidas"
  //Por ultimo se retorna la nueva instancia
  return NewStack
  // Termine el 5
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  tipologiasSeparadas,
}
