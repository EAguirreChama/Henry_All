//ListaEnlasada

//DosInstancias >>> La lista en si y otra para los nodos

function LinkedList () {
    this.head = null;
}

function Node(element) {//5
    this.value = element;
    this.next = null;
}

//Metodo que se encarga de enganchar los nodos
LinkedList.prototype.add = function (element) { //5
    //Se crea una instancia con New (instancia de la clase) (una caja con value y next) (cada vez que hacemos un new Node)
    //Instancias, clases y funciones constructoras siempre con Mayusculas

    let node = new Node(element) // Node {value:5 , next: null}
    let current = this.head //Este es el puntero
    //Condicional
    if (current === null) { //Es lo mismo que poner !current 
        this.head = node
        return node //Me va a mostrar {value:5 , next: null}
    }
    //Para recorrer la lista
    while(current.next !== null) {
        current = current.next    
    }

    current.next = node
    return node
}

//Metodo para contar los nodos
LinkedList.prototype.size = function () {
    //Se utiliza current para ir recorriendo porque es nuestro puntero
    let current = this.head // Head { Node: {value: 5, next: Node: {value: 7, next: Node: {value: 2, next: null} } } } 
    //Declarar contador
    let contador = 0

    if(current === null) {
        console.log ("La lista está vacía");
        return
    }

    while (current !== null) {
        console.log(current.value);
        contador++
        current = current.next
    }
    
    return contador
}

let NewList = new LinkedList ()
console.log (NewList.add(5)) // LinkedList { Node: {value: 5, next: null} }
console.log (NewList.add(7)) // LinkedList { Node: {value: 7, next: null} }
console.log (NewList.add(2)) // LinkedList { Node: {value: 2, next: null} }
console.log (NewList)
console.log (NewList.size());