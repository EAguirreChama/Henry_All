/* 6️⃣ ***** EJERCICIO 6 ALGORITMOS***** - ordenarPedidos() 6️⃣

Debemos ordenar a cada cliente. Para esto nos guiaremos con los pedidos; desde el más barato al más caro, 
¡teniendo como referencia al precio! Debemos de entender cómo viene la información. Es un arreglo de objetos,
donde el objeto tiene el nombre del cliente y otro objeto, que es el pedido donde tiene el nombre y el 
precio del trago. Debemos ordenarlos a partir del precio del trago.

📝 EJEMPLO 📝 
(INPUT) ➡ 
[
  {nombre: "Franco", pedido: {nombre: 'Fernet', precio: 260}}, 
  {nombre: "juan", pedido: {nombre: 'Gancia', precio: 220}}, 
  {nombre: "Nico", pedido: {nombre: 'Vodka', precio: 285}}, 
  {nombre: "Fer", pedido: {nombre: 'Martini', precio: 430}}]

ordenarPedidos(array) ➡ (OUTPUT)
[
  {nombre: "juan", pedido: {nombre: 'Gancia', precio: 220}},
  {nombre: "Franco", pedido: {nombre: 'Fernet', precio: 260}},  
  {nombre: "Nico", pedido: {nombre: 'Vodka', precio: 285}}, 
  {nombre: "Fer", pedido: {nombre: 'Martini', precio: 430}}]

REQUISITOS
  🟢 Implementar algún algoritmo de ordenamiento para ordenar el arreglo de MENOR a MAYOR.
  🟢 ¡NO utilizar el método sort de array! (Si lo haces, no funcionará el test)
  🟢 Fijate como acceder a cada precio para realizar la respectiva logica a la hora de comparar.
*/

function ordenarPedidos(tragos) {
   // Tu código aquí:
   for (let i = 0 ; i < tragos.length ; i++) {
    for (let j = i + 1 ; j < tragos.length; j++) {
      if (tragos[i].pedido.precio > tragos[j].pedido.precio) {
        let aux = tragos[i]
        tragos[i] = tragos [j]
        tragos[j] = aux
      }
    }
  }
  return tragos
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
   ordenarPedidos,
}
