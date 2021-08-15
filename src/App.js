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
import video from './video/glass.mp4';
import CookieConsent from "react-cookie-consent";
import Konami from 'react-konami-code';
import EbonDeath from './ebondeath';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: '',
      konamiDynamicClass: '',
      thing: '',
      videoBG: 'vidOn'
    }

    this.closeNav = this.closeNav.bind(this);
    this.konamiClass = this.konamiClass.bind(this);
    this.handleBackground = this.handleBackground.bind(this);
  }

  componentDidMount(){
    const app = this;
  }

  closeNav(){
    let ref = 'nav';
    this.refs[ref].checked = !this.refs[ref].checked;
  }

  konamiClass = () => {
    this.setState({
      konamiDynamicClass: 'konami'
    })
  }

  handleBackground(value){
    switch (value){
      case 'welcome' :
        this.setState({
          background: value,
          videoBG: 'vidOn'
        });
        break;
      case 'dungeonMaster' :
        this.setState({
          background: value,
          videoBG: 'vidOff'
        });
        break;
      default :
        this.setState({
          background: value,
          videoBG: 'vidOn'
        });
    }
  }

  render(){
    return (
      <HashRouter>
        <div className="App">
          <Redirect to="/" />
          <nav className={`${this.state.konamiDynamicClass} topnav`}>
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
                  to="/ebondeath"
                  activeClassName="active"
                  onClick={this.closeNav}>
                    Ebon Death
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

          <Switch>
            <Route exact path="/">
              <Welcome handleBackground={this.handleBackground}/>
            </Route>
            <Route exact path="/ebondeath/">
              <EbonDeath handleBackground={this.handleBackground} />
            </Route>
            <Route exact path="/twitch/"><Twitch /></Route>
            <Route exact path="/games/"><Games /></Route>
          </Switch>

          <footer>
            <p>The Geeks Codex Ⓒ 2021</p>
            <a target="_blank" href="http://www.videezy.com">Broll by Videezy</a>
          </footer>
          <video playsInline autoPlay muted loop id="bgvid" className={`${this.state.videoBG} video`}>
            <source src={video} type="video/webm"/>
          </video>
          <Konami action={this.konamiClass}></Konami>
          <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
        </div>
      </HashRouter>
    );
  }
}

export default App;
