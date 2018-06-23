import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';

class Page extends Component {
  render() {
    return (
      <div className="page">{this.props.children}</div>
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation">
        <div className="navbar-brand">
          <div className='navbar-item'>isaiah kahler</div>
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" onClick={() => {alert("oh");}}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">about</div>
            <div className="navbar-item">skills</div>
            <div className="navbar-item">projects</div>
            <div className="navbar-item">contact</div>
          </div>
        </div>
      </nav>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page> 
          <Nav />
        </Page>
        <Page> </Page>
      </div>
    );
  }
}

export default App;
