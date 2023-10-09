const initialState = {
    contador: 0,
    nombre: '',
    apellido: '',
    amigos: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "AUMENTAR_CONTADOR":
            return {
                ...state,
                contador: state.contador + 1
            }
        case "CAMBIAR_NOMBRE": 
            return {
                ...state,
                nombre: action.payload
            }
        case "MODIFICAR_AMIGOS":
            return {
                ...state,
                amigos: action.payload
            }
        case "MODIFICAR_APELLIDO":
            return {
                ...state,
                apellido: action.payload
            }
        default: 
            return {...state}
    }
}

module.exports = reducer
