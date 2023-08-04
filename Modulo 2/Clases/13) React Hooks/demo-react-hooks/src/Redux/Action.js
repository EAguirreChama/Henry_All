import { GET_CHARACTERS } from "./Action_types";
import { CLEAN_CHARACTERS } from "./Action_types";

export const getCharacters = () => {
    return function(dispatch) {
        fetch("https://rickandmortyapi.com/api/character/")
        .then(response => response.json())
        .then(data => dispatch({type: GET_CHARACTERS, payload: data.results}))
    }
}

export const cleanCharacters = () => {
    return {
        type: CLEAN_CHARACTERS
    }
}