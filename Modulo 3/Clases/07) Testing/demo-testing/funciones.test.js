const { suma, mult, obj, array, promise, suma2} = require ("./funciones");

// beforeAll(() => {
//     console.log("Before all");
// })

describe("Funciones", () => {
    
    it("Debe retornar 10 si le pasamos 4 y 6", () => {
        expect(suma(4, 6)).toBe(10)
    })
    
    it("Debe retornar la multiplicación de sus parametros", () => {
        expect(mult(4, 5)).toBe(20)
        expect(mult(5, 6)).toBe(30)
    })

})

describe("Objetos", () => {
    it("El objeto debe contener la propiedad name", () => {
        expect(obj()).toHaveProperty("name")
    })

    it("El objeto debe tener dos propiedas: name y modalidad", () => {
        const object = {name: "37a", modalidad: "FT"}
        expect(obj()).toEqual(object)
    })

    it("Debe contener la propiedad modalidad", () => {
        expect(obj().modalidad).toBeTruthy()
    })

    it("No debe contener la propiedad alumno", () => {
        expect(obj().alumno).toBeFalsy()
    })
})

describe("Arrays", () => {
    it("Debe tener un string con el valor de Ernesto", () => {
        expect(array()).toContain("Ernesto")
    })
})

describe("Promesas", () => {
    it("La promesa debe resolverse correctamente", () => {
        return promise().then(
            value => expect(value).toBe("Demo test promise")
        )
    })
})

describe("MookFunctions", () => {
    it("Debe retornar 10 si es llamada con 4 y 6", () => {
        const result = (a, b) => {
            return a + b
        }
        const prueba = jest.fn(() => result(4, 6))
        suma2(4, 6, prueba)
        // Para que sea llamada una sola vez
        expect(prueba.mock.calls.length).toBe(1)
    })
})