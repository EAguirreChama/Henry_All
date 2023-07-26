function ArbolBinario(value) {
    this.value = value
    this.left = null
    this.right = null
}

//Agregar un nodo en el lugar correspondiente
ArbolBinario.prototype.insert = function (value) {
    if (value < this.value) { 
        // Es menor
        // Fijarse si esta ocupado
        if (this.left) { // this.left !== null
            // Si hay alguien a la izquierda, recursion
            // Con recursion se crean contextos
            this.left.insert(value)
        }
        else {
            // Si no hay nadie, creo un nuevo arbol, nueva instancia (new + NombredelaFuncionPadre (parametro))
            this.left = new ArbolBinario(value)
            return value
        }
    }
    else { 
        // Es mayor o igual
        if (this.right) { // this.right !== null
            // Si hay alguien a la derecha, recursion
            this.right.insert(value)
        }
        else {
            // Si no hay nadie, creo un nuevo arbol, nueva instancia (new + NombredelaFuncionPadre (parametro))
            this.right = new ArbolBinario(value)
            return value
        }
    }
}

// Cantidad de nodos en el Arbol
ArbolBinario.prototype.size1 = function () {
    if (this.right === null && this.left === null) return 1;
    if (this.right === null && this.left !== null) return 1 + this.left.size1() // Cuando a la derecha no hay nada y a la izquierda si
    if (this.right !== null && this.left === null) return 1 + this.right.size1() // Cuando a la izquierda no hay nada y a la derecha si
    if (this.right !== null && this.left !== null) return 1 + this.left.size1() + this.right.size1() // Cuando hay en ambos lados
}
ArbolBinario.prototype.size2 = function () {
    let contador = 1 
    if (this.left) contador += this.left.size2()
    if (this.right) contador += this.right.size2()
    return contador
}

// Fijarse si hay un valor dentro del arbol
ArbolBinario.prototype.contains = function (value) {
    if (this.value === value) return true
    if (value > this.value) {
        // Si entro aqui, va a la derecha porque es mayor
        if (this.right === null) return false
        return this.right.contains(value) // Recursion
    }
    if (value < this.value) {
        // Si entro aqui, va a la derecha porque es mayor
        if (this.left === null) return false
        return this.left.contains(value) // Recursion
    }
}

// Recorrer el arbol
ArbolBinario.prototype.depthFirstForEach = function (cb, pedido) {
    if (pedido === "in-order" || pedido === undefined) {
        if(this.left) this.left.depthFirstForEach(cb, pedido)
        cb(this.value)
        if(this.right) this.rightdepthFirstForEach(cb, pedido)
    }
    if (pedido === "pre-order") {
        cb(this.value)
        if(this.left) this.left.depthFirstForEach(cb, pedido)
        if(this.right) this.rightdepthFirstForEach(cb, pedido)
    }
    if (pedido === "post-order") {
        if(this.left) this.left.depthFirstForEach(cb, pedido)
        if(this.right) this.rightdepthFirstForEach(cb, pedido)
        cb(this.value)
    }
}

// Recorrer de otra forma (por niveles)
ArbolBinario.prototype.breadthFirstForEach = function (cb, array = []) {
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
