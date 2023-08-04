// Componente de clases
import React from "react";

class Contador extends React.Component {
    constructor(props){
        super(props)
        // No puede tener otro nombre
        // Es un estado de uso de local
        this.state = {
            counter: 0,
            saludo: "Este es el contador"
        };
    };

    clickStateMas = () => {
        // Si queremos modificar el estado se utiliza setState
        this.setState({ counter: this.state.counter + 1 , saludo: "Estoy aumentando"}, () => {console.log(this.state.counter);})
    }
    clickStateMenos = () => {
        this.setState({ counter: this.state.counter - 1 , saludo: "Estoy disminuyendo"}, () => {console.log(this.state.counter);})
    }

    render () {
        return (
            <div>
                <h1>Contador Clase</h1>
                <h3>{this.state.saludo}</h3>
                <p>{this.state.counter}</p>
                <button onClick={this.clickStateMas}>Aumentar</button>
                <button onClick={this.clickStateMenos}>Disminuir</button>
            </div>
        )
    };
};

export default Contador;