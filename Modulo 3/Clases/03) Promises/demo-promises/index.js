const miPromesa = new Promise((resolve, reason) => {
    resolve('Salió todo bien') 
    reason('Algo salió mal')
})

miPromesa.then(
    (value) => console.log(value),  // SuccessHandler ===> siempre el primer cb es el caso de exito
    (reason) => console.log(reason) // ErrorHandler  ===> siempre el segundo cb es el caso de error
)

const axios = require('axios');

axios
.get('https://rickandmortyapi.com/api/character/')
.then(
    (response) => response.data.results,
    // (error) => console.log(error)
)
// .then(
//     (data) => (data.results),
//     (error) => console.log(error) 
// )
.then(
    (results) => console.log(results), 
    // (error) => console.log(error) 
)
.catch(error => console.log(error)) // Maneja todos los errores
.finally(() => console.log("Hola este es el Finally")) // Siempre ejecuta lo que digo  