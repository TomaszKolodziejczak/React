import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {

  minDate = new Date().toISOString().slice(0, 10)

  state = {
    text: "",
    important: false,
    deadline: this.minDate
  }

  handleDeadline = (e) => {
    this.setState({
      deadline: e.target.value,
    })
  }

  handleCheckbox = (e) =>
    this.setState({
      important: e.target.checked,
    })

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  handleAddButton = (props) => {
    const { text, deadline, important } = this.state
    if (text.length > 2) {
      const add = this.props.add(text, deadline, important)
      if (add) {
        this.setState({
          text: "",
          important: false,
          deadline: this.minDate
        })
      }
    } else {
      alert("Your task is to short")
    }
  }


  render() {

    return (
      <>
        <div className="form">
          <input type="text" placeholder="Enter task" onChange={this.handleText} value={this.state.text} />
          <input type="checkbox" checked={this.state.important} onChange={this.handleCheckbox} id="important" />
          <label htmlFor="important" >High priority task</label>
          <input type="date" min={this.minDate} onChange={this.handleDeadline} value={this.state.deadline} />
          <label htmlFor="deadline">Set deadline</label>
          <br />
          <button onClick={this.handleAddButton}>Add new task</button>
          <hr />
        </div>
      </>
    );
  }
}

export default AddTask;