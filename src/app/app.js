import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/custom.css';
import Routes from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
