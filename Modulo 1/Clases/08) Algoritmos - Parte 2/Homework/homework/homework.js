'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Se resuelve de manera recursiva
  // Caso base 
  if (array.length <= 1) return array

  // Las variables
  const pivot = array[Math.floor(Math.random()*array.length)] // (Math Random (Numero entre 0 y 1) + Longitud del Arreglo) MathFloor (Rendondeo hacia abajo)
  const izquierda = [] // Los menores al pivote
  const derecha = [] // Los mayores al pivote
  const equals = [] // El pivote

  for(let i = 0 ; i < array.length ; i++) { // Recorremos el array
    if (array[i] !== pivot) { // Se descarta que el numero en esa posicion sea igual al pivote
      if (array[i] < pivot) izquierda.push(array[i]) // Si es menor al pivote
      else derecha.push(array[i]) // Si es mayor al pivote
    } 
    else equals.push (array[i]) // Si es igual al pivote se lo coloca en equals
  }
  return quickSort(izquierda).concat(equals).concat(quickSort(derecha)) // Recursion
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  if (array.length < 2) return array
  const Mitad = Math.floor (array.length/2)
  let left = array.slice(0, Mitad)
  let right = array.slice (Mitad, array.length)

  array = []
  left = mergeSort(left)
  right = mergeSort (right)

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift())
    }
    else array.push (right.shift())
  }
  array = array.concat(left, right)
  return array
};

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
