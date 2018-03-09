import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <br />
    <br />
    <h1 className="App-title">
      <font color="white">React</font>
    </h1>

    <NavLink to="/home" activeClassName="active-nav">
      Home
    </NavLink>
    <span>" "</span>
    <NavLink to="/project" activeClassName="active-nav">
      Project Graph
    </NavLink>
    <span>" "</span>
    <NavLink to="/apollo-example" activeClassName="active-nav">
      Apollo Example
    </NavLink>
    <span>" "</span>
    <NavLink to="/projectOwnerView" activeClassName="active-nav">
      projectOwnerView
    </NavLink>
    <span>" "</span>
    <NavLink to="/marketplace" activeClassName="active-nav">
      marketplace
    </NavLink>
    <span>" "</span>
    <NavLink to="/myprojects" activeClassName="active-nav">
      myprojects
    </NavLink>
    <span>" "</span>
    <NavLink to="/taskView" activeClassName="active-nav">
      TaskView
    </NavLink>
    <span>" "</span>
    <NavLink to="/project-register" activeClassName="active-nav">
    create a new project
    </NavLink>
    <span>" "</span>

    <Link to="/login">Login</Link>
  </header>
);

export default Header;
