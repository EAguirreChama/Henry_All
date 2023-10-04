// Componente funcional
import { useEffect, useState } from "react"

const Contador2 = () => {

    // Para estados
    // El primero parametro es el estado y el segundo es lo que me permite modificar el estado
    //El valor inicial de mi estado es 
    
    const [cont, setCont] = useState(0)
    let [saludo, setSaludo] = useState("Este es el contador") 

    const handlerClickMas = () => {
        setCont(cont + 1)
        setSaludo(saludo= "Estoy aumentando")
    }
    const handlerClickMenos = () => {
        setCont(cont - 1)
        setSaludo(saludo= "Estoy disminuyendo")
    }
    useEffect(() => {
        // Lo que se muestra en el desmontaje
        // return () => alert("Nos vemos")
    }, [cont])

    return (
        <div>
            <h1>Contador Funcional</h1>
            <p>{cont}</p>
            <h3>{saludo}</h3>
            <button onClick={handlerClickMas}>Aumentar</button>
            <button onClick={handlerClickMenos}>Disminuir</button>
        </div>
    )
}

export default Contador2
