import Characters from './Componentes/Characters';
import Contador from './Componentes/Contador';
import { useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState({
    contador: true,
    characters: true
  });

  const toggle = (event) => {
    setShow({
      ...show,
      [event.target.name]: !show[event.target.name]
    })
  };

  return (
    <div className="App">
      <button onClick={toggle} name="contador">{show.contador ? "Hide" : "Show"}</button>
      {show.contador && <Contador/>}
      <button onClick={toggle} name="characters">{show.characters ? "Hide" : "Show"}</button>
      {show.characters && <Characters/>}
    </div>
  );
}

export default App;
