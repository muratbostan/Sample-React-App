import SideBar from './components/Sidebar/Sidebar'
import Context from './components/Context/Context'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
          <Route path="/">
          <header></header>
            <SideBar/>
            <Context/>
          </Route>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
