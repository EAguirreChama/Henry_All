import React from "react";
// import styledSpecies from "./Species.module.css";

export default function Species({ species, handleSpecies, handleAllSpecies }) {
  // console.log(species);
  return (
    <div>
      <h2>Species</h2>
      {
        species.map((especie, index) => {
          return (
          <button 
          key={index} 
          onClick= {handleSpecies} 
          value= {especie}
          >{especie}</button>
          )
        })
      }
      <button onClick={handleAllSpecies} 
      children = "All Animals"></button>
    </div>
  )
}
