// Ecmascript 
// Se encarga de dar estandares para Js

// Nuevas Features
// Let & Const
// Let si puedo pisarlo y a Const no puedo pisarlo (su valor)

// Arrow Functions ( () => )

// Class
// Extendes es una herencia, es decir que se hereda las mismas propiedades que la funcion padre
// Super significa que heredamos las propiedas ==> super(parametro1, parametro2)

// Object Literals
const obj = (name) => {
    let object = {name} 
    return object // {name: Ernesto}
}
console.log(obj("Ernesto"));

// Template Strings (``)
const saludo = (saludo) => {
    return `${saludo} Compañero` // Hola Compañero
}
console.log(saludo("Hola"));

// Destructuring (arrays y objetos)
// Array
let array = [ 1, 2, 3]
let [a, , b] = array // 1 3
// Objeto
let objeto = {apellido:"Aguirre" , alumno: "Ernesto"}
let { apellido } = objeto // Aguirre

// Spread Operator
// Default ===> para mandar un valor por defecto
// Spread ===> hace una copia de los valores de los arrays/objetos
// Rest ===> permite que despues de los ... pase todos los datos que quieramos

// Babel 
// Es una libreria que nos pasa el codigo que tenemos a un lenguaje más viejo para que nos entienda cualquier tipo de pagina
