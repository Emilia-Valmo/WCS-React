import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from "./Home";
import History from "./History";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenue sur la quête React d'Emilia</h1>
        </header>
        <div>
          <NavLink exact to="/" activeClassName="selected" activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}> Accueil </NavLink>
          <NavLink exact to="/notre-histoire" activeClassName="selected" activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}> Notre histoire </NavLink>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notre-histoire" component={History} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
