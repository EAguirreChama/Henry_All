// Call
let persona = {
    nombre: "Ernesto",
    apellido: "Aguirre",
}
let logNombre = function () {
    console.log(this.nombre + " " + this.apellido);
}
logNombre.call(persona)
