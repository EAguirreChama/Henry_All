//Recursion

function factorial (x) {//4 
    if (x === 0 || x === 1) return 1
    else if (x < 0) return 0 

    //Aqui entra la recursion
    //La funcion se tiene que llamar asi misma
    return x * factorial(x - 1) //Nuevo contexto, se hace todo de nuevo
}

console.log (factorial (4))

// Factorial de 4 >>> se expresa 4! = 4*3*2*1 = 24 = 4*3! seria 4*(3*2*1)
// 4! = 4*3!
// 3! = 3*2!
// 2! = 2*1!
// 1! = 1
// 0! = 1
// Para numeros naturales 

//Pila de ejecucion
// 1
// 2 * factorial(1) = 2*1 (1 reemplaza al factorial de 1) y se elemina el anterior
// 3 * factorial(2) = 3*2 (2 reemplaza al factorial de 2) y se elemina el anterior
// 4 * factorial(3) = 4*6 (6 reemplaza al factorial de 3) y se elemina el anterior
// factorial (4) = 24 y se elemina el anterior
// global context

//Hacer en la hoja con contextos(cuadritos xdlol)
