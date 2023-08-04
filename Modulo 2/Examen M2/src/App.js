/* 1️⃣ ***COMPONENTE APP*** 1️⃣
Implementar el componente App. En este ejercicio tendrás que crear diferentes rutas para algunos componentes. 
¡Ten en cuenta los nombres y las especificaciones de cada uno!

REQUISITOS
🟢 El componente Nav debe renderizarse en todas las rutas.
🟢 El componente Home debe renderizarse en la ruta "/".
🟢 El componente BandDetail debe renderizarse en la ruta "/band/:id".
🟢 El componente CreateBand debe renderizarse en la ruta "/band/create".
*/

import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import BandDetail from "./components/BandDetail/BandDetail";
import CreateBand from "./components/CreateBand/CreateBand";
import React from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
   return (
      <div> 
         <Nav/>
         <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/band/:id" element={<BandDetail/>} ></Route>
            <Route path="/band/create" element={<CreateBand/>}></Route>
         </Routes>
      </div>
   );
};

// Termine el Test 01
export default App;
