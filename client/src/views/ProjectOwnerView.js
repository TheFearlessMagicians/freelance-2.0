import React, { Component } from 'react';
import propTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import ReactGridLayout from 'react-grid-layout';
//import { Button, Collapse, Switch } from '@blueprintjs/core';
//collapsable contact details:

class ProjectOwnerView extends Component<{}, ICollapseExampleState> {
  constructor(props) {
    super(props);
    this.state = {
      //projects: [],
      projects: [
        'Project 1',
        'Project 2',
        'Project 3',
        'Project 4'
      ] /*props.project*/
    };
    this.loadDataFromServer = this.loadDataFromServer.bind(this);
  }

  loadDataFromServer() {
    axios
      .get(this.props.url) //Pass in URL
      .then(res => {
        this.setState({ projects: res.project });
      });
  }

  componentDidMount() {
    this.loadDataFromServer();
    setInterval(this.loadDataFromServer, 2000);
  }

  render() {
    var layout = [
      { i: 'profilecard', x: 0, y: 0, w: 1, h: 3, static: true },
      { i: 'info', x: 1, y: 0, w: 1, h: 3, static: true },
      { i: 'projects', x: 0, y: 2, w: 2, h: 3, static: true }
    ];

    let counter = 0;
    let projectColumns = 3;
    var projectlayout = [];
    this.state.projects.map((project, idx) => {
      projectlayout.push({});
    });
    var projectlayout = [
      { i: 'profilecard', x: 0, y: 0, w: 1, h: 3 },
      { i: 'info', x: 1, y: 0, w: 1, h: 3 },
      { i: 'projects', x: 0, y: 2, w: 2, h: 3 }
    ];
    return (
      <div>
        <h1> Project owner: Wilson J</h1>

        <ReactGridLayout
          className="layout"
          layout={layout}
          cols={2}
          rowHeight={60}
          width={1200}
        >
          <div key="profilecard">
            <div class="pt-card .pt-elevation-4">
              <h3> about me </h3>

              <p class="title">CEO & Founder, Example</p>
              <p>Harvard University</p>

              <a href="#">
                <i class="fa fa-dribbble" />
              </a>
              <a href="#">
                <i class="fa fa-twitter" />
              </a>
              <a href="#">
                <i class="fa fa-linkedin" />
              </a>
              <a href="#">
                <i class="fa fa-facebook" />
              </a>
            </div>
            <div class="pt-card .pt-elevation-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec dapibus et mauris, vitae dictum metus.
              </p>
            </div>
          </div>
          <div key="info">
            <h2> Person's information</h2>
            <p>blablabla </p>
          </div>
          <div key="projects">
            <h2> list of projects </h2>
            <p>blablabla </p>
          </div>
        </ReactGridLayout>
      </div>
    );
  }
  //TODO: WIRE THIS UP TO DB LATER.
}

export default ProjectOwnerView;
