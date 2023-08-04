import "./CharacterCard.css";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions"

// Importar las actions como Object Modules, sino los test no funcionarán!

//PARA QUE LOS TEST CORRAN, DEBEN HACER ESTE COMPONENTE COMO UN FUNCIONAL COMPONENT.

const CharacterCard = ({
  id,
  name,
  race,
  role,
  faction,
  image,
  ship,
}) => {
  const dispatch = useDispatch()
  const handleClose = (id)=>{
    dispatch(actions.deleteCharacter(id))
  }

  return (
    <div className="card">
      <button onClick={handleClose(id)}>X</button>
      <Link to={`/character/${id}`}><h3>{name}</h3></Link>
      <img src={image} alt={name} />
      <p>{faction}</p>

    </div>
  );
};

export default CharacterCard;
