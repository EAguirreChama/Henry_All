// Apply
let persona = {
    nombre: "Ernesto",
    apellido: "Aguirre",
}

let logNombre = function (arg1, arg2) {
    console.log(arg1 + " " + this.nombre + " " + this.apellido + "," + arg2);
}

logNombre.apply(persona, ["Hola", " cómo estás?"]) //Un arreglo con parametros
//Cuando pone "persona" significa que vamos a tomar el valor de la primera variable
//El resto es un arreglo con argumentos, es decir algo que podemos agregar a la funcion logNombre