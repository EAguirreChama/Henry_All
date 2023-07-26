'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, 
  según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value
   this.left = null
   this.right = null
}

BinarySearchTree.prototype.insert = function (value) {
   if (value < this.value) {
      if (this.left) {
         this.left.insert(value)
      }
      else {
         this.left = new BinarySearchTree (value)
      }
   }
   else if (value > this.value) {
      if (this.right) {
         this.right.insert(value)
      }
      else {
         this.right = new BinarySearchTree (value)
      }
   }
}
BinarySearchTree.prototype.contains = function (value) {
   if (this.value === value) {
      return true;
   } else if (value < this.value && this.left) {
      return this.left.contains(value);
    } else if (value > this.value && this.right) {
      return this.right.contains(value);
    }
    return false;
}
BinarySearchTree.prototype.depthFirstForEach = function (cb, orden) {
   if (orden === "in-order" || orden === undefined) {
      if (this.left && this.left.depthFirstForEach(cb, orden));
      cb (this.value);
      if (this.right && this.right.depthFirstForEach(cb, orden));
   }
   if (orden === "pre-order") {
      cb (this.value);
      if (this.left && this.left.depthFirstForEach(cb, orden));
      if (this.right && this.right.depthFirstForEach(cb, orden));
   }
   if (orden === "post-order") {
      if (this.left && this.left.depthFirstForEach(cb, orden));
      if (this.right && this.right.depthFirstForEach(cb, orden));
      cb (this.value);
   }
}
BinarySearchTree.prototype.size = function () {
   let count = 1 //inicializamos la variable de cuenta

   if(this.left) count += this.left.size() //cuenta cuantos hay en la izquierda
   if(this.right) count += this.right.size() //cuenta cuantos hay en la derecha
   return count
}
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
   if(this.left !== null) {
      array.push(this.left)
  }
  if(this.right !== null) {
      array.push(this.right)
  }
  cb(this.value)
  if (array.length > 0) {
      array.shift().breadthFirstForEach(cb, array)
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
