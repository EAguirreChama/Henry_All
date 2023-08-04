import './App.css';
import Landing from './Componentes/Landing';
import { Route, Routes } from 'react-router-dom';
import Formulario from './Componentes/Formulario';
import Personajes from './Componentes/Personajes';
import Detail from './Componentes/Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/login" element={<Formulario/>}></Route>
        <Route path="/home" element={<Personajes/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
