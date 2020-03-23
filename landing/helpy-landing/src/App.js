import React from 'react';
import './App.css';
import Landing from '../src/components/landing.js'
import AGB from '../src/components/agb.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Landing></Landing>
          </Route>
          <Route path="/agb">
            <AGB />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;