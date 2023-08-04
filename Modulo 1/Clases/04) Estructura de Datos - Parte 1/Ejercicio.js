//Ejercicio del Dia
//Un closuer es una funcion que retorna otra funcion

function contador () {
    let obj = {
        name: "FT",
        last: "37a",
        count: 1 
    };

    let counter = function () { //Es una función
        return obj.count++;
    };
    return counter; //Para que sea una closuer no se tiene que haber un llamado a función().
};
let newCounter = contador ()
console.log(newCounter()); 
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Otra forma de declarar funciones
// function counter () {
//     return obj.count++;
// }
// Es mejor declarar las funciones en constantes