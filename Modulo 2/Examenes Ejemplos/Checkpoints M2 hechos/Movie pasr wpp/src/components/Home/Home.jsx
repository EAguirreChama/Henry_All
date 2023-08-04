import "./home.css";
import * as actions from "./../../redux/actions/index";
import React, { Component } from "react";
import img from "../../img-cp2/main-image-cp2.jpg"
import { connect } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";

// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  componentDidMount() {
    this.props.getAllMovies()
  }

  render() {
    const {movies} = this.props
    return (
      <div className="home">
        <h1>Henry Movies</h1>
        <img src={img} alt="henry-movies-logo" />
        <h3>Movies</h3>
        <h4>Checkpoint M2</h4>
        {movies?.map(el=>{
          return <MovieCard 
          key={el.id}
          id={el.id}
          name={el.name}
          director={el.director}
          releaseYear={el.releaseYear}
          description={el.description}
          image={el.image}
          runningTime={el.runningTime}
          />
        })}
      </div>
    );
  }
}

export const mapStateToProps = state => ({movies: state.movies })

export const mapDispatchToProps = ({getAllMovies: actions.getAllMovies})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
