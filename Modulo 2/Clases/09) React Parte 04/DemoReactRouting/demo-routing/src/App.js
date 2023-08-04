import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Componentes/Home';
import About from './Componentes/About';
import Profile from "./Componentes/Profile";
import Person from "./Componentes/Person";

function App() {
  return (
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}>
          <Route path=':person' element={<Person/>}/>
        </Route>
      </Routes>
  );
}

export default App;
