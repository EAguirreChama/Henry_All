//Scope >>> alcance que tienen las variables

var Global = "Hola"

//Declaración de función
function a () {
    console.log(Global)
    Global = "Hello"
}

//Declaración de función
function b () {
    var Global = "Chau"
    console.log(Global)
}

//Ejecución de función
a()
b()

console.log (Global)
