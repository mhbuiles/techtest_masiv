import React from 'react';
import logo from './logo.svg';
import './App.css';
import RandomComic from './components/RandomComic';
import CurrentComic from './components/CurrentComic';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/' component = {RandomComic}></Route>
          <Route exact path = '/currentcomic' component = {CurrentComic}></Route>
          <Redirect from = '*' to = '/'></Redirect>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
