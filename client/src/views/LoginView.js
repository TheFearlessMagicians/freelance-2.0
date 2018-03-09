import React, { Component } from 'react';
import './LoginView.css';

import { Route, Switch } from 'react-router-dom';
import * as BluePrint from '@blueprintjs/core';

// import { gql } from 'apollo-boost';
// import { Query } from 'react-apollo';
// import moment from 'moment';

import MarketplaceView from './MarketplaceView';

const Home = () => (
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
);

class Login extends Component {
  render() {
    return (
      <div class="pt-navbar-group pt-align-left">
        <button
          onClick={MarketplaceView.render}
          type="button"
          class="pt-button pt-icon-log-in pt-large pt-intent-primary pt-align-left"
        >
          Log In
        </button>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
