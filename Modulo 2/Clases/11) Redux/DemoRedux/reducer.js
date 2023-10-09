const { AUMENTAR_CONTADOR, CAMBIAR_NOMBRE, MODIFICAR_AMIGOS, MODIFICAR_APELLIDO } = require ('./actionTypes') 

const initialState = {
    contador: 0,
    nombre: '',
    apellido: '',
    amigos: []
}

const reducer = (state = initialState, action) => {
    
    if (action.type === AUMENTAR_CONTADOR) {
        return{
            ...state,
            contador: state.contador + 1
        }
    }
    
    if (action.type === CAMBIAR_NOMBRE) {
        return {
            ...state,
            nombre: action.payload
        }
    }
    
    if (action.type === MODIFICAR_AMIGOS) {
        return {
            ...state,
            amigos: action.payload
        }
    }
    
    if (action.type === MODIFICAR_APELLIDO) {
        return {
            ...state,
            apellido: action.payload
        }
    }
}

module.exports = reducer
