/* 6️⃣ ***COMPONENTE CREATEBAND*** 6️⃣

Implementar el componente CreateBand. Este consistirá en un formulario controlado con estados de react.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Aquí tendrás que renderizar una serie de elementos HTML con distintos atibutos e información dentro.

🟢 Debes manejar cada uno de los inputs de tu formulario mediante un estado local llamado "input".

🟢 La información del formulario se debe despachar al estado global cuando se hace un submit.

🟢 Debes manejar los errores que pueden tener los inputs del formulario.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser funcional.
❗¡Puedes implementar el manejo de errores como mejor prefieras! Sólo recuerda renderizar el error apropiado en cada caso.
❗NO hacer un destructuring de los hooks, debes utilizarlos con la siguiente forma:
      - 'React.useState'
      - 'React.useEffect'
*/

import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from "../../redux/actions/index"

const validate = (state) => {
      const errors = {};

      if(state.name.length > 30 || state.origin.length > 30){
            errors.nameBanda = 'Nombre u Origen demasiado largo';
      }
      if(state.tickets < 0){
            errors.tickets = 'Los tickets deben ser un numero positivo';
      }
      return errors;
}

const CreateBand = () => {
      const [state, setState] = React.useState({
            name: '',
            origin: '',
            description: '',
            tickets: 0,
      })

      const [error, setError] = React.useState({});

      const dispatch = useDispatch();

      const handleChange = (event) => {
            setState({
                  ...state,
                  [event.target.name]: event.target.value
            });
            setError(
                  validate({
                        ...state,
                        [event.target.name]: event.target.value
                  })
            )
      }

      const handleSubmit = (event) => {
            event.preventDefault();

            if(!Object.keys(error).length){
                  dispatch(actions.createBands(state));
            }
      }

   return (
      <div>
            <form onSubmit={handleSubmit}>
                  <label>Name: </label> 
                  <input type="text" name='name'onChange={handleChange}/>
                  {error.nameBanda && <p>{error.nameBanda}</p>}

                  <label>Origin: </label>
                  <input type="text" name='origin'onChange={handleChange}/>
                  {error.nameBanda && <p>{error.nameBanda}</p>}

                  <label>Description: </label>
                  <textarea name='description'onChange={handleChange}></textarea>
                  
                  <label>Tickets: </label>
                  <input type="number" name='tickets'onChange={handleChange}/>
                  {error.tickets && <p>{error.tickets}</p>}

                  <button type="submit">Create Band</button>
            </form>
      </div>
   )
};

// Termine el Test 06
export default CreateBand;
