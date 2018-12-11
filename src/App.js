import React, { Component } from 'react';
import './App.css';

import { Logo } from './shared/components/Logo';

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
