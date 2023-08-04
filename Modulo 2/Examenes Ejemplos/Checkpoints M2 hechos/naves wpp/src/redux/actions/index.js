import axios from "axios";

// Aca deben declarar las variables donde tengan el action types.
export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const CREATE_CHARACTER = "CREATE_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const GET_SHIPS = "GET_SHIPS";
// Esten atentos a que los nombres de las variables coincidan.

// Fijarse que la sintaxis de nuestra Action creator es distinta a lo que venimos haciendo. Esto es
// debido al uso del middleware "thunk", el cual nos permite trabajar con acciones asincrónicas.
// Necesitamos hacer uso de este middleware ya que nuestras peticiones al back siempre son asincrónicas,
// por lo tanto, necesitamos ese "delay" para despachar nuestra action hasta que la data nos llegue.
// Vas a tener que usar la funcion "dispatch" recibida en la funcion interna para despachar la action que
// va a llegar a nuestro reducer.
// Acá pueden ver un poco mejor la explicación y algunos ejemplos: https://github.com/reduxjs/redux-thunk
//
// NOTA:
//      Para obtener la informacion del detalle recorda utilizar la ruta http://localhost:3001/character/:id
//      Usar ruta 'http://localhost:3001/characters' para buscar todas los personajes en nuestro back.

// Inicializamos id en 4, para que nuestros próximos ID's no se pisen con los existentes.
// La vas a usar en la funcion createMovie, descomentala cuando te haga falta;
// Desde el componente ejecutamos la action creator, pasandole como argumento los values que vamos a utilizar para crear la movie.
// Puedes usar spread operator para copiar el objeto payload.

// 🚨 IMPORTANTE SI USAN PROMESAS HAY QUE RETORNARLAS! LOS TESTS PUEDEN FALLAR SI NO LO HACEN 🚨


export const getCharacters = () => async dispatch => {
    const resolve = await fetch("http://localhost:3001/characters");
    const data = await resolve.json().catch(err=>console.error(err))
    return dispatch({type: GET_CHARACTERS, payload: data})
};

export const getCharacterDetail = (id) => async dispatch => {
    const resolve = await fetch(`http://localhost:3001/character/${id}`);
    const data = await resolve.json().catch(err=>console.error(err))
    return dispatch({type: GET_CHARACTER_DETAIL, payload: data})
};

let id = 3;

export const createCharacter = (newCharacter) => {
    id++
    let payload = {...newCharacter, id}
    return {type: CREATE_CHARACTER, payload}
};

// Desde el componente ejecutamos la action creator, pasandole como argumento el id de la movie que queremos eliminar.
export const deleteCharacter = (payload) => {
    return {type: DELETE_CHARACTER, payload}
};

// Para obtener las naves, recorda mapear la info que te llega de la api, para retornar un array solo de naves, proba hacer un console.log()
// de lo que te devuelve la api, para mayor certeza.

export const getShips =  () => async dispatch => {
    const response = await fetch("http://localhost:3001/characters");
    const arrayCharacters = await response.json();
    arrayCharacters.map(cadaObjeto =>{
        console.log(cadaObjeto)
    })

};
