// BIND 
let persona = {
    nombre: "Ernesto",
    apellido: "Aguirre",
}

let logNombre = function () {
    console.log(this.nombre + " " + this.apellido);
}

let logNombrePersona = logNombre.bind(persona)
logNombrePersona()