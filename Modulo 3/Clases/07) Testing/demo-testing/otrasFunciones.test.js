const { suma, mult} = require ("./funciones");

describe("Otros resultados", () => {
    it("Debe retornar 15 si es llamada con 7 y 8", () => {
        expect(suma(7, 8)).toBe(15)
    })

    it("Debe retornar 56 si es llamada con 7 y 8", () => {
        expect(mult(7, 8)).toBe(56)
    })
})