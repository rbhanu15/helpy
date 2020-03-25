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

import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-161824546-1');
  ReactGA.pageview('/landing');
}

function App() {
  initializeReactGA()
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