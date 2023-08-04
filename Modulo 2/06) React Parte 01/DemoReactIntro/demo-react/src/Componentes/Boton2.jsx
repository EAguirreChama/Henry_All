// Boton Clases
import React from "react";

class Boton2 extends React.Component {
    // Si mi componente de clase esta recibiendo una propiedad se tiene que hacer si o si el constructor y el super(pero siempre ponerlo para no olvidarse)
    // No se puede hacer destructuring
    constructor (props) {
        super(props)
    }
    // Antes de poner el return
    render () {
        return (
            <>
                {/* Siempre tengo que poner el this en clases */}
                <button>{this.props.texto}</button>
            </>
        )
    };
};
export default Boton2