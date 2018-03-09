import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Graph from 'react-graph-vis';

class CreateProjectGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: {
        nodes: [{id:'1', label: 'starting node'}],
        edges: []
    },
    nNodes:1,

    };
    this.onSelect = this.onSelect.bind(this);
  }
  onSelect(event) {
      co
    var { nodes, edges } = event;
    let taskID = nodes;
    this.setState(
        {nNodes: this.state.nNodes + 1}
    );
    let newname = "new Task no."+this.state.nNodes;

    this.setState( {

           graph:{
               nodes: this.state.graph.nodes.concat({
                   'id':this.state.nNodes,
                   'label':newname
               } ),
               edges:  this.state.graph.edges.concat({'from':taskID,'to':this.state.nNodes})
            },

        }
    );
}

  render() {
    var options = {
      layout: {
        hierarchical: true
      },
      edges: {
        color: '#000000'
      }
    };
    var events = {
      select: this.onSelect
}


    return (
      <Graph
        graph={this.state.graph}
        options={options}
        events={events}
        style={{ height: '1000px' }}
      />
    );
  }
}

export default CreateProjectGraph;
