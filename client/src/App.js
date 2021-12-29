import './App.css';
import Manager from './components/Manager';
import Player from './components/Player';
import Create from './views/Create';
import List from './views/List';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Manager />
      <Player />
      <Switch>
        <Route exact path="/players/list">
          <List />
        </Route>
        <Route exact path="/players/addplayer">
          <Create />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
