import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {

  state = {
    tasks: [
      {
        id: 0,
        text: 'excercise0',
        deadline: '2021-08-08',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'excercise1',
        deadline: '2021-08-11',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'excercise2',
        deadline: '2021-08-08',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: 'excercise3',
        deadline: '2021-08-08',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: 'excercise4',
        deadline: '2021-08-08',
        important: false,
        active: true,
        finishDate: null,
      },
    ]
  }

  render() {
    return (
      <div className="App">
        To Do App
        <AddTask />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
