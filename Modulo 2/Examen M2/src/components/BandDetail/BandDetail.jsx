/* 8️⃣ ***COMPONENTE BANDDETAIL*** 8️⃣

Implementar el componente BandDetail. En este ejercicio tendrás que renderizar las diferentes propiedades 
de la banda.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que despachar una action con el "id" de la banda cuando se monta el componente. Luego, traer esa 
información de tu estado global.

🟢 Tendrás que renderizar algunos datos de la banda correspondiente.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser funcional.
❗Tienes que usar hooks.
❗NO hacer un destructuring de los hooks, debes utilizarlos con la siguiente forma:
      -'React.useState' - 'React.useEffect';
*/


import React from 'react';
import * as actions from "../../redux/actions/index"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const BandDetail = (props) => {
      const dispatch = useDispatch();

      const {id} = useParams();

      React.useEffect(() => {
            dispatch(actions.getBandDetail(id));
      }, [id, dispatch]);

      const banda = useSelector((state) => state.bandDetail);

   return (
      <div className='detail'>
            <h1>{banda.name}</h1>
            <img src={banda.image} alt={banda.name}></img>
            <h5>Entradas disponibles: {banda.tickets}</h5>
            <h5>Fecha del evento: {banda.functionDate}</h5>
            <h5>Origen de la banda: {banda.origin}</h5>
            <h5>Integrantes: {`${banda.members.join(" ")} `}</h5>
            <h3>{banda.description}</h3>
      </div>
   )
};

// Termine el Test 08
export default BandDetail;
