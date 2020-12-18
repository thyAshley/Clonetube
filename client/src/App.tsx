import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
