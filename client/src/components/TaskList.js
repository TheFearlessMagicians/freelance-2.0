import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import _ from 'lodash';
import axios from 'axios';
/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
class TaskList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: [], // TODO: PASS THIS AS A PROP
      handleClick: id => {
        //TODO: REDRECT TO TASKVIEW.
        alert('REDIRECT TO ID: ' + id);
        console.log('redirected ');
      },

      newCounter: 0
    };
    axios
      .get(this.props.endpoint)
      .then(res => {
        this.setState({ items: res }); //if this doesn't show up,  do var that = this;
        console.log(`Public task data gotten.`);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    //TODO: onClick here doesn't work.
    return (
      <div>
        <ReactGridLayout
          className="layout"
          cols={8}
          rowHeight={30}
          width={1200}
        >
          {this.state.items.map(function(name, index) {
            return (
              <div
                style={{ 'background-color': 'coral' }}
                key={index.toString()}
                data-grid={{
                  x: (index * 2) % 8,
                  y: Math.floor(index * 2 / 8),
                  w: 1,
                  h: 1
                }}
                onClick={index => this.state.handleClick(index)}
              >
                {name}
              </div>
            );
          })}
        </ReactGridLayout>
      </div>
    );
  }
}

export default TaskList;
