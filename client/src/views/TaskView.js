import React, { Component } from 'react';
import propTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import ReactGridLayout from 'react-grid-layout';
import axios from 'axios';
//import { Button, Collapse, Switch } from '@blueprintjs/core';
//collapsable contact details:

class TaskView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: []
    };
    var { task } = this.state;
    this.loadDataFromServer = this.loadDataFromServer.bind(this);
  }

  loadDataFromServer() {
    axios
      .get(this.props.url) //Pass in URL
      .then(res => {
        this.setState({ data: res.data });
      });
  }

  componentDidMount() {
    this.loadDataFromServer();
    setInterval(this.loadDataFromServer, 2000);
  }

  render() {
    var layout = [
      { i: 'profilecard', x: 0, y: 0, w: 1, h: 3, static: true },
      { i: 'taskinfo', x: 1, y: 0, w: 1, h: 3, static: true }
    ];

    return (
      <div>
        <h1> Taskname: {'task.title'}</h1>

        <ReactGridLayout
          className="layout"
          layout={layout}
          cols={2}
          rowHeight={60}
          width={1200}
        >
          <div key="profilecard">
            <div class="pt-card .pt-elevation-4">
              <h3> Task Description: </h3>
              <p class="title">task.description</p>
            </div>
          </div>

          <div key="taskinfo">
            <h3> Monetary reward</h3>
            <p>task.reward</p>
            <h3> Expiry date</h3>
            <p>task.deadline</p>
            <h3> Required expertise</h3>
            <p> PHP LAMP STACK </p>
            <h2> PUBLIC</h2>
          </div>
        </ReactGridLayout>
      </div>
    );
  }
  //TODO: WIRE THIS UP TO DB LATER.
}

export default TaskView;
