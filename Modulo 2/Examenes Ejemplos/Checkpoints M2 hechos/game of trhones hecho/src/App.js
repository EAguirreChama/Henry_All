import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Houses from './components/Houses/Houses';
import HouseDetail from './components/HouseDetail/HouseDetail';
import CreateHouse from './components/CreateHouse/CreateHouse';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
      <Route exact path="/" component={Houses}/>
      <Route exact path="/houses/:houseid" component={HouseDetail}/>
      <Route exact path="/house/create" component={CreateHouse}/>
      </Switch>

    </div>
  );
};

export default App;
