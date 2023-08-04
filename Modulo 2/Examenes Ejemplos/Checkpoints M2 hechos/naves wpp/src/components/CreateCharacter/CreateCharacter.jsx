import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";


// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateCharacter = () => {
  const [inps, setInps] = React.useState({
    name: "",
    race: "",
    role: "",
    faction: "",
    ship: {
      name: "",
      seurname: ""
    },
  });
  function handleChange({ target }) {
    let valueInp = target.value;
    let nameInp = target.name;
    nameInp !== "ship"
      ? setInps({
          ...inps,
          [nameInp]: valueInp,
        })
      : setInps({
          ...inps,
          [nameInp]: { name: valueInp },
        });
  }

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.createCharacter(inps));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name: </label>
        <input type="text" name="name" onChange={handleChange} />

        <label htmlFor="">Race: </label>
        <input type="text" name="race" onChange={handleChange} />

        <label htmlFor="">Faction: </label>
        <input type="text" name="faction" onChange={handleChange} />

        <label htmlFor="">Role: </label>
        <input type="text" name="role" onChange={handleChange} />

        <label htmlFor="">Ship: </label>
        <input type="text" name="ship" onChange={handleChange} />

        <button type="submit">Create Character</button>
      </form>
    </div>
  );
};

export default CreateCharacter;
