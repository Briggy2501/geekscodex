import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  NavLink,
  HashRouter
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';
import Games from './games';
import Twitch from './twitch';
import video from './video/outset.webm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      
    }

    this.closeNav = this.closeNav.bind(this);
  }

  componentDidMount(){
    const app = this;
  }

  closeNav(){
    let ref = 'nav';
    this.refs[ref].checked = !this.refs[ref].checked;
  }

  render(){
    return (
      <HashRouter>
        <div className="App">
          <Redirect to="/" />
          <nav className="topnav">
            <input className="menu-btn" type="checkbox" id="menu-btn" ref={'nav'} />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu">
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  onClick={this.closeNav}>
                    Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/twitch/"
                  activeClassName="active"
                  onClick={this.closeNav}>
                    Twitch
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/games/"
                  activeClassName="active"
                  onClick={this.closeNav}>
                    Games
                </NavLink>
              </li>
            </ul>
          </nav>

          <footer>
            <p>The Geeks Codex</p>
          </footer>
          <video playsInline autoPlay muted loop id="bgvid">
            <source src={video} type="video/webm"/>
          </video>

        </div>

        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/twitch/" component={Twitch} />
          <Route exact path="/games/" component={Games} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
