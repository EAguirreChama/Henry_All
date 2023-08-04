import React from "react";
import Nav from "./components/Nav/Nav";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import CreateMovie from "./components/CreateMovie/CreateMovie";

function App() {
  return (
    <div>
      <Route path="/" component={Nav}/>
      <Route exact path="/" component={Home}/>
      <Route path="/movie/:id" component={MovieDetail}/>
      <Route path="/movies/create" component={CreateMovie}/>
    </div>
  );
}
export default App;
