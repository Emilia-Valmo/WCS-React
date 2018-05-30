import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Author from "./Author";
import "bootstrap/dist/css/bootstrap.css";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenue sur la quête React d'Emilia</h1>
        </header>
      <div>
        <Author name="Emilia ;)"/>
      </div>
      </div>
    );
  }
}

export default App;
