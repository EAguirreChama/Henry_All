import { aumentarContador } from "./actions"

const initialState = {
    contador: 0,
    usuarios: [],
    usuario: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case aumentarContador: 
            return {
                ...state,
                contador: state.contador + 1
            }
        default:
            return {...state}
    }
}

export default reducer
