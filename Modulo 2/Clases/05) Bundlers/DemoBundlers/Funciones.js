// require nos permite traer los archivos
// Si traemos un objeto o un array podemos hacer destructuring

// Primera forma
// const { num1, num2, nombre } = require("./Constantes") // recibimos la info como objeto

// Segunda forma
// const constantes = require("./Constantes") // recibimos la info como objeto

// Tercera forma (la que utiliza es6)
// Siempre que se hace destructuring se pone los nombre de la info que queremos traer del otro archivo
// import {num1, num2, nombre} from "./Constantes"

export const sumar = (a , b) => a + b

export const printName = (name) => {
    console.log(name)
}

// Primera forma
// sumar(num1, num2)
// printName(nombre)

// Segunda forma
// sumar(constantes.num1, constantes.num2)
// printName(constantes.nombre)

// Tercera forma
// sumar(num1, num2)
// printName(nombre)
