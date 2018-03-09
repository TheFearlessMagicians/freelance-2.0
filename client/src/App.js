import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

// import { gql } from 'apollo-boost';
// import { Query } from 'react-apollo';
// import moment from 'moment';

import Header from './components/Header';
import MarketplaceView from './views/MarketplaceView';
import Project from './views/ProjectView';
import TaskRegisterView from './views/taskRegisterView';
import Login from './views/LoginView';
import ApolloExample from './views/ApolloExample';
import ProjectOwnerView from './views/ProjectOwnerView';
import MyProjectsView from './views/MyProjectsView';
import TaskView from './views/TaskView';
import TreeView from './views/TreeView';

const Home = () => <p className="App-intro">TechFair LA Hackathon Project</p>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <br />
        <br />
        <br />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/project" component={Project} />
          <Route path="/marketplace" component={MarketplaceView} />
          <Route path="/projectOwnerView" component={ProjectOwnerView} />
          <Route path="/apollo-example" component={ApolloExample} />
          <Route path="/task-register" component={TaskRegisterView} />
          <Route path="/project-register" component={TreeView} />
          <Route path="/login" component={Login} />
          <Route path="/myprojects" component={MyProjectsView} />
          <Route path="/taskView" component={TaskView} />
        </Switch>
      </div>
    );
  }
}

export default App;
