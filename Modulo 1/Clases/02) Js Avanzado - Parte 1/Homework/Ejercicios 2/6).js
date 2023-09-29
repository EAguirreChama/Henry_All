(6 / "3")         // Js obliga a transforma a "3" en number >>> 2
"2" * "3"         // Operacion matematica, obliga a transformar a ambos en number >>> 6
4 + 5 + "px"      // 9 y va a concatenar con el string y vuelve todo en string >>> "9px"
"$" + 4 + 5       // Se tiene un String y se concatena el resto >>> "$45"
"4" - 2           // Pasa el string a number >>> 2
"4px" - 2         // No puede resolverlo porque no puede pasar a number ese string >>> NaN
7 / 0             // Infinity (porque todo numero dividido por 0 tiende a infinito)
{}[0]             // undefined (busca la propiedad 0 y no existe en el objeto)
parseInt("09")    // convierte a 9
5 && 2            // da 2 (toma el segundo (porque ambos se consideran true) y es lo mismo) cuando tenes && siempre el segundo
2 && 5            // da 5 (misma razon)
5 || 0            // da 5 (siempre me quedo con el true)
0 || 5            // da 5 (misma razon)
[3]+[3]-[10]      // concatena el [3] y [3] , luego transforma el resultado en string (33) y despues vuelve el array en numero >>> 23
3>2>1             // false (porque 3 si es mayor a 2, devuelve true. true es igual a 1 y 1 no es mayor que 1)
[l] == ![]        // true (son distintos espacios de memoria, y da true porque estamos negando) (los arrays estan en distinto lugar)
