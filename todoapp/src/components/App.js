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
        active: false,
        finishDate: null,
      },
      {
        id: 5,
        text: 'excercise4',
        deadline: '2021-08-08',
        important: false,
        active: false,
        finishDate: null,
      },
      {
        id: 6,
        text: 'excercise4',
        deadline: '2021-08-08',
        important: false,
        active: false,
        finishDate: null,
      },
    ]
  }

  deleteTask = (id) => {

    // method 1
    // const tasks = [...this.state.tasks];
    // const idx = tasks.findIndex(task => task.id === id)
    // tasks.splice(idx, 1)
    // this.setState({
    //   tasks //tasks: tasks
    // })

    // method 2
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })

  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = !task.active
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })

  }

  render() {
    return (
      <div className="App">
        To Do App
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
