import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {

  minDate = new Date().toISOString().slice(0, 10)

  state = {
    text: "",
    checked: false,
    date: this.minDate
  }
  render() {

    return (
      <>
        <div className="form">
          <input type="text" placeholder="Enter task" value={this.state.text} />
          <input type="checkbox" checked={this.state.checked} id="important" />
          <label htmlFor="important" >High priority task</label>
          <input type="date" min={this.minDate} value={this.state.date} />
          <label htmlFor="deadline">Set deadline</label>
          <br />
          <button>Add new task</button>
          <hr />
        </div>
      </>
    );
  }
}

export default AddTask;