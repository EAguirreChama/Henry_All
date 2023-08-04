function Saludar (Saludo) { // Parametro fijo
    return function ( Nombre ) { //Parametro que puede cambiar 
        console.log (Saludo + " " + Nombre);
    }
} //Un return por funcion, es decir una funcion por Closure
    // SaludarHola se volvera una función
var SaludarHola = Saludar("Hola") // Con los parentesis se ejecuta la funcion 

                        // function ( Nombre ) { //Asociado el valor Saludo = "Hola"
                        //     console.log (Saludo + " " + Nombre);
                        // }
//Se llama a la función SaludarHola y espera un parametro

SaludarHola("Camila") // Es una funcion, por lo que se eredo una función (es lo que retorna la ejecución que se esta ejecutando)
SaludarHola("Ernesto")
SaludarHola("Fabrizio")

var SaludarHi = Saludar("Hi") //Se debe crear una nueva variable

                        // function ( Nombre ) {
                        //     console.log (Saludo + " " + Nombre);
                        // }
SaludarHi("Camila")
SaludarHi("Ernesto")
SaludarHi("Fabrizio")