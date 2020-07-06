import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TestA from './Pages/TestA';
import TestB from './Pages/TestB';
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
      <Router>
      <div className="App-container">
        <h5>Selecciona una de las pruebas</h5>
        <nav className="menu">
          <ul >
            
            <li>
              <Link to="/testa" style={{textDecoration:'none',color:'#ffffff',fontWeight:'bold'}}>Test A</Link>
            </li>
            <li>
              <Link to="/testb" style={{textDecoration:'none',color:'#ffffff',fontWeight:'bold'}}>Test B</Link>
            </li>
          </ul>
        </nav>
        <div className="pageContainer">

        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/testa">
            <TestA />
          </Route>
          <Route path="/testb">
            <TestB />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
        </div>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
