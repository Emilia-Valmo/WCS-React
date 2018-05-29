import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyTimer from './MyTimer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenue sur la quête React d'Emilia</h1>
        </header>
        <div>
          <MyTimer />
        </div>
      </div>
    );
  }
}

export default App;
