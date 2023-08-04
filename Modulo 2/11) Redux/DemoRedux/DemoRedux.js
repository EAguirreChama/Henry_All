// Redux
// Es una libreria de gestion de estado, trabaja por separado de React.
// Brinda un estado unico.
// Plantea una Store (donde se almacenan todos los estados).
// No todos los componentes es necesario que accedan a la info del Store.
// npm i redux@4.0.5

// Dispatch, da aviso que quiere modificar la store(es decir un estado). 

// Principios de Redux
// Unica fuente de verdad, es el store. Donde esta toda la info para manejar mi pagina.
// El estado solo puede ser modificado mediante actions. (Las actions son objetos ==> propiedad obligatoria es un type: "siempre un string")


// Reducer ==> es una funcion
// Solo reducer puede hacer modificaciones en el estado global

// Primer parametro ==> state = initialState
// Segundo parametro ==> action 
 
// function (state= initialState, action){
    // if(action.type === ACTION {
        // return {
            // ...state, count: state.count + 1
        // }
    // })
// }

// Primero crear mi Store
// const { createStore } = require ("redux");

// getState nos muestra el estado actual
// console.log(store.getState());