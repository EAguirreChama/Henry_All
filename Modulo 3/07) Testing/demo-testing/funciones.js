const suma = (a, b) => a + b;

const mult = (a, b) => a * b;

const obj = () => {
    return {name: "37a", modalidad: "FT"}
}

const array = () => {
    const arr = [
        "Ernesto", "Fabrizio", "Alejo"
    ]
    return arr
}

const promise = () => {
    const newPromise = new Promise((resolve, reject) => {
        resolve("Demo test promise")
    })
    return newPromise
}

const suma2 = (a, b, result) => {
    result(a, b)
}

module.exports = {
    suma,
    mult,
    obj,
    array,
    promise,
    suma2,
}