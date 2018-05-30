import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp';
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Bienvenue sur la quête React d'Emilia</h1>
          </header>
          <SignUp />
        </div>

      </div>
    );
  }
}

export default App;
