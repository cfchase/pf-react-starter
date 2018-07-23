import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Routes } from "./Routes"


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Patternfly-React</h1>
        </header>
        <Routes/>
      </div>
    );
  }
}

export default withRouter(App);