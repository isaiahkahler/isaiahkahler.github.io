import React, { Component } from 'react';
import './App.css';

class Page extends Component {
  render() {
    return (
      <div>
        page
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page />
        yeet
      </div>
    );
  }
}

export default App;
