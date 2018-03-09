import React, { Component } from 'react';
import propTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';
import ProjectGraph from '../components/ProjectGraph';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import ReactGridLayout from 'react-grid-layout';
import axios from 'axios';
const getRandomColor = function() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

class ProjectView extends Component {
  constructor(props) {
    super(props);

    axios
      .get(this.props.endpoint)
      .then(res => {
        var obj = this.toNodesAndEdges(res);
        this.setState({
          nodes: obj.nodes,
          edges: obj.edges
        });
        console.log(`project data gotten.`);
      })
      .catch(err => {
        console.error(err);
      });
  }
  toNodesAndEdges(data) {
    //TODO. data is an array of the project's hierarchy.
  }

  render() {
    //TODO replace this
    const taskNodes = [
      { id: '1', label: 'Design mockup for UI', color: '#e04141' },
      {
        id: '2',
        label: 'Translate mockup to front end code',
        color: '#e09c41'
      },
      { id: '3', label: 'Create a landing page', color: '#e0df41' },
      {
        id: '4',
        label: 'Make an API / back-end from a project template',
        color: '#7be041'
      },
      { id: '5', label: 'Set up a database', color: '#41e0c9' },
      { id: '6', label: 'Form a basic MVP working website' }
    ];
    //Connections between tasks:
    //const taskEdges = this.state.data.map((proj) => proj.childNode && proj.childNode.map(
    // (child) => ({from: proj._id, to: child._id})));

    const taskEdges = [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 6 },
      { from: 4, to: 6 },
      { from: 3, to: 6 },
      { from: 5, to: 6 }
    ];

    var layout = [
      { i: 'a', x: 0, y: 0, w: 1, h: 3, static: true },
      { i: 'b', x: 1, y: 0, w: 1, h: 3, static: true }
    ];
    return (
      <div>
        <h1>Wilson's project tree</h1>

        <ReactGridLayout
          className="layout"
          layout={layout}
          cols={2}
          rowHeight={60}
          width={1200}
        >
          <div key="a">
            <ProjectGraph nodes={taskNodes} edges={taskEdges} />
          </div>
          <div key="b">
            <div>
              <h2> project info </h2>
              <p>blablabla </p>
              <p>
                <blockquote>
                  We want to build this thing that integrates dog owners with
                  dog lovers.
                </blockquote>
              </p>
            </div>
          </div>
        </ReactGridLayout>
      </div>
    );
  }
  //TODO: WIRE THIS UP TO DB LATER.
}

export default ProjectView;
