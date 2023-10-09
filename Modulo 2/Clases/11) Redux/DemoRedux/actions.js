// store.dispatch({type: 'AUMENTAR_CONTADOR'})
// store.dispatch({type: 'CAMBIAR_NOMBRE', payload: 'Ernesto'})
// store.dispatch({type: 'MODIFICAR_AMIGOS', payload: ['Fabrizio', 'Alejo', 'Nicolas']})
// store.dispatch({type: 'MODIFICAR_APELLIDO', payload: ['Aguirre Chama']})

const { AUMENTAR_CONTADOR, CAMBIAR_NOMBRE, MODIFICAR_AMIGOS, MODIFICAR_APELLIDO } = require ('./actionTypes') 

const aumentarContador = () => {
    return {type: AUMENTAR_CONTADOR}
}
const cambiarNombre = () => {
    return {type: CAMBIAR_NOMBRE, payload: 'Ernesto'}
}
const modificarAmigos = () => {
    return {type: MODIFICAR_AMIGOS, payload: ['Fabrizio', 'Alejo', 'Nicolas']}
}
const modificarApellido = () => {
    return {type: MODIFICAR_APELLIDO, payload: ['Aguirre Chama']}
}

module.exports = {
    aumentarContador,
    cambiarNombre,
    modificarAmigos,
    modificarApellido
}
