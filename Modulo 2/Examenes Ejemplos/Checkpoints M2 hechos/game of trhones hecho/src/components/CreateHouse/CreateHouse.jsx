import React from "react";
import { useDispatch } from "react-redux";
import { createHouse } from "../../redux/actions";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
// Recordar que los hooks de React deben utilizarse de la forma "React.useState", "React.useEffect", etc.
// Los tests no van a reconocer la ejecución haciendo destructuring de estos métodos.
const CreateHouse = () => {
   const dispatch = useDispatch()
  const [dataHouse, setdataHouse] = React.useState({
    name: "",
    region: "",
    words: "",
  });
  function handleOnchange(e) {
    const valueInput = e.target.value;
    const nameInput = e.target.name;
    setdataHouse({
      ...dataHouse,
      [nameInput]: valueInput,
    });
  }
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(createHouse(dataHouse))
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input type="text" name="name" onChange={handleOnchange} />

      <label>Region: </label>
      <input type="text" name="region" onChange={handleOnchange} />

      <label>Words: </label>
      <input type="text" name="words" onChange={handleOnchange} />

      <button type="submit">Create</button>
    </form>
  );
};

export default CreateHouse;
