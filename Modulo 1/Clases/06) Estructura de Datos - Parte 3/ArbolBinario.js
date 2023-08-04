function BusquedaBinaria (valor) { //5
    this.root = valor
    this.left = null
    this.right = null
}

BusquedaBinaria.prototype.insert = function (valor) {//2
    if (valor < this.root) {// 2 < 5
        //Es menor >>> va a la izquierda/left
        if (this.left) { //Solo entro y hago recursion si la rama izquierda esta ocupada
            //Tengo algo a la izquierda
            //Recursion
            this.left.insert (valor) //Empieza de nuevo en el siguiente arbol
        }
        else {
            //No tengo nada a la izquierda
            this.left = new BusquedaBinaria (valor) //Se crea un nuevo arbol con el valor que se paso por parametro
        }
    }
    else if (valor > this.root) {
        //Es mayor >>> va a la derecha/right
        if (this.right) {
            this.right.insert (valor)
        }
        else {
            this.right = new BusquedaBinaria (valor)
        }
    }
};

const MiArbolito = new BusquedaBinaria(5) //Nueva Instancia
MiArbolito.insert (2)
console.log(MiArbolito);
console.log(BusquedaBinaria);

BusquedaBinaria.prototype.depthFirstForEach = function (cb, pedido) {
    // pedido >>> "In-order" (left, root, right)
    if (pedido === "In-order") { 
        if (this.left && this.left.depthFirstForEach(cb, pedido)); //Si hay algo a la izquierda, entonces hace recursion
        cb (this.root); //Crea un array y agrega los datos
        if (this.right && this.right.depthFirstForEach(cb, pedido));//Si hay algo a la derecha, entonces hace recursion
    }

    // pedido >>> "Pre-order" (root, left, right)
    if (pedido === "Pre-order") {
        cb (this.root);
        if (this.left && this.left.depthFirstForEach(cb, pedido));
        if (this.right && this.right.depthFirstForEach(cb, pedido));
    }

    // pedido >>> "Post-order" (left, right, root)
    if (pedido === "Post-order") {
        if (this.left && this.left.depthFirstForEach(cb, pedido));
        if (this.right && this.right.depthFirstForEach(cb, pedido));
        cb (this.root);
    }
}