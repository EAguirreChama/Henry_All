// Simple Call
function a() {
    function b() {
        return this
    }
    return b()
}
console.log(a())

//Metodo de un objeto
var Objeto = {
    Prop: "Tengo 21 años",
    f: function () {
        return this.Prop
    }
}

console.log(Objeto.f())
