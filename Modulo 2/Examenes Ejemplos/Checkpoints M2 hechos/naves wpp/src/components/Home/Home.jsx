import "./home.css";
import React, { Component } from "react";
import img from "../../img-cp2/cp-fm2-image.png"
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import CharacterCard from "../CharacterCard/CharacterCard";
// Importar las actions como Object Modules y no hacerles destructuring, sino los test no funcionarán!
// Ej: import * as actions from '...'
// Aparte Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.
const getCharacters = actions.getCharacters
export class Home extends Component {
  componentDidMount(){
    this.props.getCharacters()
  }
  render() {
    const {characters} = this.props
    return (
      <div className="home">
        <h1>Star Wars</h1>
        <h2>May the force be with you</h2>
        <img src={img} alt="star-wars-logo" />
        <h3>Characters</h3>
        {characters && characters.map((m)=>{
          return (
            <CharacterCard 
            key={m.id}
            id={m.id}
            name={m.name}
            race={m.race}
            role={m.role}
            faction={m.faction}
            image={m.image}
            ship={m.ship}
            />
          )
        })}
      </div>
    );
  }
}

export const mapStateToProps = (state) => { 
  return {
    characters: state.characters
  }
 }

export const mapDispatchToProps = ({getCharacters})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
