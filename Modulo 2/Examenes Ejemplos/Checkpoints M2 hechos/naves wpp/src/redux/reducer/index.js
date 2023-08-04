// Importa las action types acá
import * as TYPES from "../actions/index"




const initialState = {
  characters: [],
  characterDetail: {},
  ships: [],
};

const rootReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    // Acá va tu código:
  case TYPES.GET_CHARACTERS: 
  return {...state, characters: payload}
  case TYPES.GET_CHARACTER_DETAIL:
    return {...state, characterDetail: payload}
  case TYPES.CREATE_CHARACTER:
    return {...state, characters: state.characters.concat(payload)}
  case TYPES.DELETE_CHARACTER:
    const CHARACTERS_ACTUALIZADOS = state.characters.filter((el)=>{
      if(el.id !== payload){
        return el
      }
    })
  return {...state, characters: CHARACTERS_ACTUALIZADOS}
  case TYPES.GET_SHIPS: 
  return {...state, ships: payload}

  default: 
  return initialState
  }
};

export default rootReducer;
