import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/index"
import ShipCard from "../ShipCard/ShipCard";
// Este componente hay que resolverlo de la mano de ShipCard para hacerlo funcionar correctamente!
// Importar las actions como Object Modules y no hacerles destructuring, sino los test no funcionarán!
// Ej: import * as actions from '...'
export default function Ships() {

  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(actions.getShips())
  },[dispatch])
  const ships = useSelector(state => state.ships)
  return (
    <div>
      <h1>The most iconic Ships!</h1>
      {ships && ships.map(cadaShip=>{
        return (
          <ShipCard 
          key={cadaShip.name}
          name={cadaShip.name}
          image={cadaShip.image}
          />
        )
      })}
    </div>
  )
};