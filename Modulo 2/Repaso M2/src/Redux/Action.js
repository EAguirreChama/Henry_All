import { GET_CHARACTERS, GET_CHARACTERS_DETAIL, CLEAN_DETAIL } from "./Action_types";
import axios from "axios";

export const getCharacters = () => {
    return function (dispatch){
        fetch("https://apisimpsons.fly.dev/api/personajes?limit=20&page=1")
        .then(response => response.json())
        .then(data => dispatch({type: GET_CHARACTERS, payload: data.docs}))
    }
}

// Forma 1 con Axios
// export const getCharacters = () => {
//     return function(dispatch){
//         axios("https://apisimpsons.fly.dev/api/personajes?limit=20&page=1")
//         .then(response => response.data)
//         .then(data => dispatch({type: GET_CHARACTERS, payload: data.docs}) )
//     }
// }

// Forma 2 con Axios
// export const getCharacters = () => {
//     return async function(dispatch){
//         const response = await axios ("https://apisimpsons.fly.dev/api/personajes?limit=20&page=1")
//         return dispatch ({type: GET_CHARACTERS, payload: data.docs})
//     }
// }

export const getCharactersDetail = (id) => {
    return function(dispatch){
        axios(`https://apisimpsons.fly.dev/api/personajes?limit=20&page=1/${id}`)
        .then(response => response.data)
        .then(data => dispatch({type: GET_CHARACTERS_DETAIL, payload: data}))
    }
}

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL,
    }
}