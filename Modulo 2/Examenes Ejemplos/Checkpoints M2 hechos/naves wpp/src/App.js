import React from "react";
import Nav from "./components/Nav/Nav";
import { Switch, Route } from "react-router-dom";
import Ships from "./components/Ships/Ships";
import Home from "./components/Home/Home";
import CreateCharacter from "./components/CreateCharacter/CreateCharacter";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";

function App() {
  return (
    <div>
      <Nav/>
      <Switch>
      <Route path="/character/create" component={CreateCharacter}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/character/:id" component={CharacterDetail}/>
      <Route exact path='/ships' component={Ships}/>
      </Switch>
    </div>
  );
}
export default App;
