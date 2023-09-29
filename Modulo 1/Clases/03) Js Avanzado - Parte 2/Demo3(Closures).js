// Con LET
var CreaFuncion = function () {
    var array = [] 
// [ 
                // function () { console.log(i);} (cuando i = 0) 
                // function () { console.log(i);} (cuando i = 1)  
                // function () { console.log(i);} (cuando i = 2) 
// ]

    for (let i = 0 ; i < 3 ; i++) {
        // i = 0 (cuando inicia) hasta 3 se repite
        array.push (
            function () { console.log(i);} //Guardo toda esta funcion en el array
        )
    }
    return array
}

var Funciones = CreaFuncion () // Si llamo una función tengo el valor de retorno, es decir >>> array
// [ 
                // function () { console.log(i);} (cuando i = 0) 
                // function () { console.log(i);} (cuando i = 1)  
                // function () { console.log(i);} (cuando i = 2) 
// ]

Funciones [0] () // Queda el valor i = 0
Funciones [1] () // Queda el valor i = 1
Funciones [2] () // Queda el valor i = 2
// Sucede porque la variable es "LET"
