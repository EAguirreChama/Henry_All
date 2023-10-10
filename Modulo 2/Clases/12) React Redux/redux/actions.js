// Incrementar en uno el counter
const INCREMENTAR_COUNTER = {
 type: 'INCREMENTAR_COUNTER'
}

// Decrementar en uno el counter
const DECREMENTAR_COUNTER = {
  type: 'DECREMENTAR_COUNTER'
}

// Action creator
function  increment(n) {
  return {
    type: 'INCREMENTAR_N',
    payload: n
  }
}

module.exports = {
  INCREMENTAR_COUNTER,
  DECREMENTAR_COUNTER,
  increment,
}
