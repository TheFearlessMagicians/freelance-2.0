import { render } from 'react-dom';
import 'react-sortable-tree/style.css';
import React, { Component } from 'react';
import SortableTree, {
  addNodeUnderParent,
  removeNodeAtPath,
  changeNodeAtPath
} from 'react-sortable-tree';

export default class TreeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        { name: 'Describe Task Here!' },
        {
          name: 'Describe Task Here!',
          expanded: true,
          children: [{ name: 'Dependent Task Here!' }]
        }
      ]
    };
  }

  render() {
    const getNodeKey = ({ treeIndex }) => treeIndex;
    return (
      <div>
        <div style={{ height: 300 }}>
          <SortableTree
            treeData={this.state.treeData}
            onChange={treeData => this.setState({ treeData })}
            generateNodeProps={({ node, path }) => ({
              title: (
                <input
                  style={{ fontSize: '1.1rem' }}
                  value={node.name}
                  onChange={event => {
                    const name = event.target.value;

                    this.setState(state => ({
                      treeData: changeNodeAtPath({
                        treeData: state.treeData,
                        path,
                        getNodeKey,
                        newNode: { ...node, name }
                      })
                    }));
                  }}
                />
              ),
              buttons: [
                <button
                  onClick={() =>
                    this.setState(state => ({
                      treeData: addNodeUnderParent({
                        treeData: state.treeData,
                        parentKey: path[path.length - 1],
                        expandParent: true,
                        getNodeKey,
                        newNode: {}
                      }).treeData
                    }))
                  }
                >
                  Add Child
                </button>,
                <button
                  onClick={() =>
                    this.setState(state => ({
                      treeData: removeNodeAtPath({
                        treeData: state.treeData,
                        path,
                        getNodeKey
                      })
                    }))
                  }
                >
                  Remove
                </button>
              ]
            })}
          />
        </div>
      </div>
    );
  }
}
