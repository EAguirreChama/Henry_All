import "./movieCard.css";
import { Link } from "react-router-dom";
import React from "react";
import * as actions from "./../../redux/actions/index";
import { useDispatch } from "react-redux";
// Importar las actions como Object Modules, sino los test no funcionarán!

//PARA QUE LOS TEST CORRAN, DEBEN HACER ESTE COMPONENTE COMO UN FUNCIONAL COMPONENT.

const MovieCard = ({
  id,
  name,
  director,
  releaseYear,
  description,
  image,
  runningTime,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <button onClick={() => dispatch(actions.deleteMovie(id))}>x</button>

      <Link to={`/movie/${id}`}>
        <h3>{name}</h3>
      </Link>
      <img src={image} alt={name} />
      <p>ReleaseYear: {releaseYear}</p>
      <p>Director: {director}</p>
    </div>
  );
};

export default MovieCard;
