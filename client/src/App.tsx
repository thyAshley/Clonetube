import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/Homepage';
import SigninPage from './pages/SigninPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={HomePage} />
        <Route path="/signin" render={SigninPage} />
      </Switch>
    </Router>
  );
}

export default App;
