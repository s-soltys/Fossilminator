import React, { Component } from 'react';
import './style/style.scss';
import './style/custom.scss';

import { Logo } from './shared/components/Logo';
import { NavigationHeader } from './navigation/components/NavigationHeader';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationHeader />
        <main role="main" class="container mt-5 pt-3">
          <div className="row">
            <div className="col-6">
              <Logo />
            </div>
            <div className="col-6 d-flex align-items-center">
              First version of Fossiliminator!
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
