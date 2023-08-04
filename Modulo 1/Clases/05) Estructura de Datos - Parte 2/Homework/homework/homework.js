'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. 
  En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null; //Se declara la cabeza que es igual a null
}

function Node(element) {//Funcion constructora
  this.value = element; //Propiedad value = al parametro
  this.next = null;//Propiedad que hace de gancho

}
LinkedList.prototype.add = function (element) {//Nuevo Metodo
  let node = new Node(element) //Se declara una variable donde estamos instanciado un nodo, un nuevo nodo
                               //Node{value: , next:}
  let current = this.head //Se declara el puntero que es igual a la cabeza(this.head) Es una variable que guarda la referecia de head (this es para referencias)

  if (current === null) {//Es lo mismo que !this.head //Se entra una unica vez
    this.head = node 
    return node
  }
  while (current.next !== null) { //Si la propiedad de current es igual a null
    current = current.next 
  }

  current.next = node //Va a mirar la propiedad al nodo nuevo
  return node
}
LinkedList.prototype.remove = function () {
  let current = this.head //Node {value: element, next:null}
  if (!current) return null
  if (!current.next) {
    let Head = current.value //Para guardar la variable
    this.head = null //Borro el nodo
    return Head //Retorno su valor
  }
  while (current.next.next) { //Si existe esto
    current = current.next //Entonces pisamos el valor de current
  }
  let final = current.next.value  //Repito lo de la linea 43 para abajo
  current.next = null
  return final

}
 
// Primera Forma
// LinkedList.prototype.search = function (element) {
//   let current = this.head
//   if (current.value === element || (typeof element === "function" && element(current.value))) {
//     return current.value
//   }
//   while (current.next) {
//     current = current.next
//     if (current.value === element ||(typeof element === "function" && element(current.value))) return current.value
//   }
//   return null
// }

LinkedList.prototype.search = function (arg) {
  let current = this.head
  while (current) {
    if (typeof arg === "function") {
      if (arg(current.value)) return current.value
    }
    else {
      if (current.value === arg) return arg
    }
    current = current.next
  }
  return null
}


/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.array = []
  this.numBuckets = 35 //35 filas
}

HashTable.prototype.hash = function (key) { //este metodo solo me dice en que posicion guardar el key
  //charCodeAt >>> dice que numero le corresponde a cada letra
  let hash = 0 //Numero de hasheo
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i) //El numero que le corresponde a lo que esta en la posicion i = (i)
  }

  return hash % this.numBuckets 
}

HashTable.prototype.set = function (key, value) { //se encarga de generar y guardar el key: value en la posicion que le corresponde

  //typeof me dice que tipo de dato que es, pero como un string
  if (typeof key !== "string") throw TypeError("Keys must be string")

  let index = this.hash(key) //this para acceder al metodo //En que posicion guardar las cosas

  //Para acceder a la posicion de un array []
  if (!this.array[index]) {
    this.array[index] = {}
  }

  this.array[index][key] = value
}

HashTable.prototype.get = function (clave) {
  let index = this.hash(clave)
  return this.array[index][clave]
}

HashTable.prototype.hasKey = function (clave) {
  //con let index guardo la posicion en el array que le corresponde a esa clave
  let index = this.hash(clave)
  //busco si hay ya hay algo en esa posicion con esa clave
  return this.array[index].hasOwnProperty(clave)
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
