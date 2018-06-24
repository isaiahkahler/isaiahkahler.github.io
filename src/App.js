import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';

class Page extends Component {
  render() {
    return (
      <div className="page section" id={this.props.id}>
        <div style={{ height: 52 + 'px' }} />
        {this.props.children}
      </div>
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <nav className="navbar is-fixed-top" role="navigation">
        <div className="navbar-brand">
          <div className="navbar-item">isaiah kahler</div>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            onClick={() => {
              document
                .querySelector('.navbar-burger')
                .classList.toggle('is-active');
              document
                .querySelector('.navbar-menu')
                .classList.toggle('is-active');
            }}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="#about">
              about
            </a>
            <a className="navbar-item" href="#skills">
              skills
            </a>
            <a className="navbar-item" href="#projects">
              projects
            </a>
            <a className="navbar-item" href="#experience">
              experience
            </a>
            <a className="navbar-item" href="#contact">
              contact
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

class LevelTitle extends Component {
  render() {
    return (
      <div className="level content">
        <div className="level-item">
          <h1>{this.props.title}</h1>
        </div>
      </div>
    );
  }
}

class Landing extends Component {
  render() {
    return (
      <section className="hero is-fullheight landing" id="about">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hey! I'm Isaiah.</h1>
            <h2 className="subtitle">I'm a computer science student and I code.</h2>
          </div>
        </div>
      </section>
    );
  }
}

class Container extends Component {
  render() {
    return(
      <div className="container">{this.props.children}</div>
    );
  }
}

class SkillBoard extends Component {
  render() {
    return(
      <div className="tile is-ancestor">
        <div className="tile is-vertical">
          <div className="tile is-parent">
            <div className="tile is-child js "></div>
          </div>
          <div className="tile is-vertical">
            <div className="tile is-parent">
              <div className="tile is-child node"></div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child cc"></div>
              <div className="tile is-child office"></div>
            </div>
          </div>
        </div>
        <div className="tile is-vertical">
          <div className="tile is-vertical">
            <div className="tile is-parent">
              <div className="tile is-child five"></div>
              <div className="tile is-child ts"></div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child three"></div>
              <div className="tile is-child react"></div>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child java"></div>
          </div>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Landing />
        <Page id="skills" classes="content">
          <LevelTitle title="skills" />
          <Container><SkillBoard /></Container>
        </Page>
        <Page id="projects">
          <LevelTitle title="projects" />
        </Page>
        <Page id="experience">
          <LevelTitle title="experience" />
        </Page>
        <Page id="contact"> 
          <LevelTitle title="contact" />
        </Page>
      </div>
    );
  }
}

let tiles = document.querySelectorAll('.is-child');
tiles.forEach(element => {
  element.style.height = element.style.width;
  console.log('did this run');
});

export default App;
