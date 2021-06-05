import SideBar from './components/Sidebar/Sidebar'
import Context from './components/Context/Context'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
          <Route path="/">
            <Navbar/>
            <SideBar/>
            <Context/>
            <Footer/>
          </Route>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
