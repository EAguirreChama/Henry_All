const fullFilled1 = new Promise((resolve, _reject) => {
    resolve('Resuelto')
})

const fullFilled2 = new Promise((resolve, _reject) => {
    resolve("Resuelto 2")
})

const rejected1 = new Promise((_resolve, reject) => {
    reject('Rechazado')
})


// Caso 1
fullFilled1.then((value) => console.log("Caso 1:", value))

// Caso 2
rejected1.then(
    (value) => console.log(value),
    (reason) => console.log("Caso 2:", reason)
)

// Caso 3
// La promesa se resuelve y no tengo successHandler
fullFilled1 // promesa => "Resuelto"
.then() // promesa => "Resuelto" // No tiene un manejador
.then((value) => console.log("Caso 3:", value)) // Si se resuelve ===> "Caso 3: Resuelto" // Si tiene un manejador

// Caso 4
// La promesa se rechaza y no tengo un errorHandler
rejected1 // se rechaza
// Para que llegue al catch, si o si, debe pasar por el .then
// El .then no tiene como manejar el error (falta el errorHandler)
.then((value) => console.log(value)) // promesa reject (error) => 
.then((value) => console.log(value)) // pasa lo mismo 
.then((value) => console.log(value)) // pasa lo mismo 
.then((value) => console.log(value)) // pasa lo mismo === promesa reject (error) =>
.catch((error) => console.log("Caso 4:", error)) // si puede manejar el error y retorna ==> "Caso 4: Rechazado"

// Caso 5
fullFilled1
.then(
    (value) => {return "Te paso info"}, // promesa que se resuelve al valor de ("Te paso info") =>
    (error) => console.log(error)
)
.then(
    (value) => console.log("Este es el segundo then:", value)
)

// Caso 6 
rejected1
.then(
    (value) => {return "Otro value"},
    (error) => {throw error} // trhow lanza información
)
.then(
    (value) => console.log("Caso 6:", value),
    (error) => console.log("ErrorHandler:" , error)
)

// Caso 7
fullFilled1
.then(
    (value) => {return rejected1},
    (error) => {throw error}
)
.then(
    (value) => console.log("SuccessHandler:", value),
    (error) => {throw error}
)
.catch(error => console.log("Catch:", error))
