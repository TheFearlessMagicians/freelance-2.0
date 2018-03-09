import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import TaskList from '../components/TaskList';
import axios from 'axios';
class MarketplaceView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      onLayoutChange: layout => {
        return;
      },
      endpoint: 'TODO CHANGE THIS TO REST ENDPOINT'
    };
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
    const thisColor = 'coral';
    return (
      <div>
        <h2> Projects & Tasks Marketplace </h2>
        <TaskList
          onLayoutChange={this.state.onLayoutChange}
          endpoint={this.state.endpoint}
          color={thisColor}
        />{' '}
        //trying to pass color. Can't do it? Go to tasklist.
      </div>
    );
  }
}

export default MarketplaceView;
