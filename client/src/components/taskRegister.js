import React from 'react';
// import { Button, Input } from 'antd';
import { Button } from 'react-bootstrap';
import { axios } from 'axios';

const buttonStyle = function(isPrivate) {
  if (isPrivate) return { 'background-color': 'red' };
  return { 'background-color': 'green' };
};

class TaskRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      reward: 0,
      isPrivate: true
    };
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleRewardChange = this.handleRewardChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDescriptionChange(e) {
    console.log('logged ' + e);
    this.setState({ description: e.target.value });
  }
  handleRewardChange(e) {
    console.log('logged ' + e);
    this.setState({ reward: e.target.value });
  }
  handleClick(e) {
    this.setState(prevState => ({ isPrivate: !prevState.isPrivate }));
  }

  handleSubmit(e) {
    e.preventDefault();
    let description = this.state.description.trim();
    let reward = this.state.reward;
    if (!description || !reward) return;

    axios
      .post(this.props.url)
      .then(res => {
        this.setState({ data: res });
        console.log(`${this.state.description} posted`);
      })
      .catch(err => {
        console.error(err);
      });
  }

  // var Checkbox = React.createClass({
  //   getInitialState: function() {
  //     return {checked: true}
  //   },
  //   handleCheck: function() {
  //     this.setState({checked: !this.state.checked});
  //   },
  //   render:

  // React.render(<Checkbox />,
  //   document.getElementById('react-container')
  // );

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          name="Description"
          placeholder="Describe Task Here"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />

        <input
          type="number"
          name="Reward"
          placeholder="Reward Value"
          value={this.state.reward}
          onChange={this.handleRewardChange.bind(this)}
        />

        <button
          onClick={this.handleClick}
          style={buttonStyle(this.state.isPrivate)}
        >
          {this.state.isPrivate ? 'Private' : 'Public'}
        </button>

        <input type="submit" />
      </form>

      // if (this.state.checked) {
      //  	msg = " public";
      // 		 }
      // 		 else {
      // 		 	msg = " private";
      // 		 }
      // 		 return (
      // 		 	<div>
      // 		 	<input type= "checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} />

      // 		 	<p>Click to make this {msg}.</p>
      // 		 	</div>
      // 		 	);
      // 		 });x
      // 	<br />

      // 	<br>
      // 		<Button onClick = {() => this.onSubmit()}> Add Task <button />
      // 	<br />

      // 		<form />
    );
    // }
  }
}

export default TaskRegister;
