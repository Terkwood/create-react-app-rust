import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import loadAdd from './App.rs';

class App extends Component {
  constructor() {
    super();
    switch (process.env.NODE_ENV) {
      case 'production':
        fetch('app.wasm')
          .then(response => response.arrayBuffer())
          .then(bytes => WebAssembly.instantiate(bytes, {}))
          .then(result => {
            const addtwo = result.instance.exports['addtwo'];
            alert(`return value was ${addtwo(3)}`);
          });
        break;
      case 'development':
        loadAdd().then(result => {
          const addtwo = result.instance.exports['addtwo'];
          alert(`return value was ${addtwo(2)}`);
        });
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
