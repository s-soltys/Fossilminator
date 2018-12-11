import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Logo = () => <img src={logo} className="App-logo" alt="logo" />;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <p>
            First version of Fossiliminator!
          </p>
        </header>
      </div>
    );
  }
}

export default App;
