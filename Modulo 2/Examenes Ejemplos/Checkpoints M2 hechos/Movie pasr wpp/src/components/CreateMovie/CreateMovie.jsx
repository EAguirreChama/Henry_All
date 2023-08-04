import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateMovie = () => {
  const [inps, setInps] = React.useState({
    name: "",
    releaseYear: 0,
    description: "",
    director: "",
  });

  const handleOnchange = ({target}) => {
    const inptValue = target.value;
    //releaseYear
    const inptName = target.name
    setInps({
      ...inps,
      [inptName]: inptValue
    })
  };
  const dispatch = useDispatch()
  const handleSubmit =(e)=>{
    e.preventDefault()
    dispatch(actions.createMovie(inps))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" onChange={handleOnchange} />

        <label>ReleaseYear: </label>
        <input type="number" name="releaseYear" onChange={handleOnchange} />

        <label>Description: </label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          onChange={handleOnchange}
        ></textarea>

        <label>Director: </label>
        <input type="text" name="director" onChange={handleOnchange} />
        <button type="submit">Create Movie</button>
      </form>
    </div>
  );
};

export default CreateMovie;
