import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions"

// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.
// TIP: Aqui seria un buen momento para utilizar el hook useSelector.

const CharacterDetail = ({match}) => {
  let id = match.params.id
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(actions.getCharacterDetail(id))

  }, [id, dispatch]);
  const character = useSelector(state => state.characterDetail)
  return (
    <div>
      <h4>{character.name}</h4>
      <h4>{character.faction}</h4>
      <h4>{character.role}</h4>
      <h4>{character.race}</h4>
      <img src={character.image} alt={character.name}/>
      <h4>{character.ship.name}</h4>
      <img src={character.ship.image} alt={character.ship.name}/>
    </div>
  );
};


export default CharacterDetail;
