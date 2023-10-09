const { incremento, decremento } = require("./actions")
const { createStore } = require("redux")
const contador = require("./reducer")

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
const store = createStore(contador)

// Obtenemos el elemento con el id `valor`.
const valor = document.querySelector("#valor")

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.

function renderContador() {
  const valorActual = store.getState().contador
  valor.innerHTML = valorActual
  // Obtenemos la propiedad 'contador' de nuestro store:
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
}

// Ejecutamos la función 'renderContador':
renderContador();

// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:

store.subscribe(renderContador)

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:
const incrementoAsync = document.querySelector("#uncrementoAsync")
const incrementoImpar = document.querySelector("#incrementImpar")
const botonIncremento = document.querySelector("#incremento")
const botonDecremento = document.querySelector("#decremento")

botonIncremento.addEventListener("click", () => {
  store.dispatch(incremento())
})

botonDecremento.onclick = () => {
  store.dispatch(decremento())
}

incrementoImpar.onclick = () => {
  store.getState().contador % 2 !== 0 && store.dispatch(incremento());
}

incrementoAsync.onclick = () => {
  setTimeout(() => {
    store.dispatch(incremento())
  }, 1000)
}
