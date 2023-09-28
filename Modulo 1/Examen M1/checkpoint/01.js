const { Queue } = require("../DS");
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

// 1️⃣ ***** EJERCICIO 1 ***** - henryParty() 1️⃣
// Tenemos complicaciones! 
// Se esta organizando una fiesta para inagurar las nuevas casas pero hay gente desconocida que intenta ingresar
// La función recibirá por parámetro un array que representa en orden la fila de personas que intentan ingresar
// necesitamos que solo ingresen los que tienen los ticket:"VIP" y que sean conocidos!
// ingresa las personas validas a una nueva QUEUE, donde iremos filtrando los invitados para que solo queden los invitados correctos.
//
// El array de movimientos tendrá la siguiente forma:
//
// [{name:"Carol", ticket:"FALSO", estado: "Desconocido"},
// {name:"Gonzalo", ticket:"VIP",estado: "Conocido"},
// {Name: "Micaias", ticket:"VIP", estado: "Desconocido"}], donde ticket y estado, representan el ingreso 
// de un persona al nuevo QUEUE.
// Finalmente, la función debe retornar la QUEUE que representa los invitados validos para ingresar
//
// EJEMPLOS:
//
// - henryParty([{name:"Carol", ticket:"FALSO", estado: "Desconocido"},⚠️
// {name:"Gonzalo", ticket:"VIP", estado: "Conocido"}, 🟢
// {Name: "Micaias", ticket:"VIP", estado: "Desconocido"}] ⚠️
// ) => Queue [name:"Gonzalo", ticket:"VIP",estado: "Conocido"}]

// REQUISITOS:
//  🟢 La función debe retornar la QUEUE resultante de procesar los movimientos.
//  🟢 Si la función intenta retirar a una persona cuando la Queue se encuentra vacía,
//    debe retornar false
//  🟢 La QUEUE que retorna la función debe ser una instancia de la clase QUEUE.

function henryParty(arr) {
  // Tu código aquí:

  //Se crea una nueva instancia
  let NuevaQueue = new Queue() 
  //Se crea un bucle while con una condición
  while (arr.length > 0 ) { //La condición es que el largo del array sea mayor a 0, luego de eso el bucle corta
    //Se crea una variable persona que será para agregar con el metodo ".shift" 
    let Persona = arr.shift() 
    //Se crea una primera condición donde si el valor de la propieda ticket es igual a VIP seguira el recorrido
    if (Persona.ticket === "VIP") {
      //Se crea una segunda condición donde, una vez aceptada la anterior, hay que comprobar si el valor de la propieda estado es igual a Conocido
      if (Persona.estado === "Conocido") {
        //Aqui se hace uso del metodo enqueue para ir agregando a Persona los objetos que tengan validas las anteriores condiciones
        NuevaQueue.enqueue(Persona)
      }
    }
  }
  //Se crea una condición usando el metodo size, para ver si contiene algo, que en caso de estar vacía las nueva Queue se retorna false
  if (NuevaQueue.size() === 0) return false
  //Se retorna la NuevaQueue
  return NuevaQueue
  
  //Termine el 1
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  henryParty
}
