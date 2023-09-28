//Stack Funcion Constructora
//LIFO

function Stack () {
    //Funcion constructora es una clase
    this.array = []
}

Stack.prototype.agregar = function (num) {
    this.array.push(num)
}

Stack.prototype.borrar = function () {
    //El valor que queda sacando el ultimo
    return this.array.pop()
}

let NewStack = new Stack()
NewStack.agregar(2)
NewStack.agregar(10)
NewStack.agregar(3)
console.log(NewStack)
// NewStack.unshift(100) //Is not a function porque no esta dentro de mi prototipo

//Para ver que estoy borrando deberia poner console.log antes
NewStack.borrar()

console.log(NewStack)
