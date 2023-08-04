// Importa las actions types que necesites acá:
import {
  CREATE_HOUSE,
  DELETE_HOUSE,
  GET_ALL_HOUSES,
  GET_HOUSE,
} from "../actions/index";


// Estado inicial
const initialState = {
  houses: [],
  house: {},
};

//funcion reducer
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Acá va tu código:
    case GET_ALL_HOUSES:
      return {...state, houses: payload}
    case GET_HOUSE: 
    return {...state, house: payload}
    case CREATE_HOUSE: 
    return {...state, houses: state.houses.concat(payload)}
    case DELETE_HOUSE: 
    const others = state.houses?.filter((el)=> {
      if(el.id !== payload){
        return el
      }
    })
    return {...state, houses: others} 
    default:
      return initialState;
  }
};

export default rootReducer;
