import './App.css';
import Title from './Componentes/Title';
import Alumnos from './Componentes/Alumnos';
import Boton from './Componentes/Boton';
import Boton2 from './Componentes/Boton2';

function App() {

  const amigos = [
    {name: "Ernesto" , age: 21 },
    {name: "Fabrizio" , age: 20},
    {name: "Alejo" , age: 22},
    {name: "Ignacio" , age: 21},
    {name: "Nicolas" , age: 22},
  ]

  return (
    <div>
      <Title/>
      <Alumnos amigos={amigos} clase="Tecnico"/>
      <Boton texto="BOTON FUNCIONAL"/>
      <Boton2 texto="BOTON CON CLASES"/>
    </div>
  );
}

export default App;
 