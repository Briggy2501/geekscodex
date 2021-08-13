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
import Games from './games'

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  componentDidMount(){
    const app = this;
    let variable = 'variable';
    variable += ' more text';
    let i = 0;
    i++;
    let var2 = 'shit';
    let var3 = 'fuck';
    console.log(i);
    console.log(`this is also a string but here is a variable -> ${variable} but I dont worry about it here ${var2} or here ${var3}`);
  }

  footerText(){
    return 'This is footer Text';
  }

  render(){
    return (
      <HashRouter>
        <div className="App">
          <Redirect to="/" />
          <nav className="topnav">
            <input className="menu-btn" type="checkbox" id="menu-btn" ref="nav" />
            <label className="menu-icon" htmlfor="menu-btn">
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
                  to="/games/"
                  activeClassName="active"
                  onClick={this.closeNav}>
                    Games
                </NavLink>
              </li>
            </ul>
          </nav>

          <footer>
            {this.footerText}
          </footer>
        </div>

        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/games/" component={Games} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
