/* 2️⃣ ***COMPONENTE NAV*** 2️⃣
Implementar el componente Nav. En este ejercicio tendrás que asociar dos etiquetas Link to='' a 
distintos elementos.

REQUISITOS
🟢 El primer <Link> debe dirigir a "/" con el texto "Home".
🟢 El segundo <Link> debe dirigir a "/band/create" con el texto "Create Band".

IMPORTANTE
❗Este componente debe ser funcional.
*/
import './nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
   return (
   <div className='nav'>
      <Link to="/">Home</Link>
      <Link to="/band/create">Create Band</Link>
   </div>
   )
};

// Termine el Test 02
export default Nav;
