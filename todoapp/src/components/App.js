import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {
  counter = 0
  state = {
    tasks: [

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

  addTask = (text, deadline, important) => {

    const task = {
      id: this.counter,
      text, //text: text,
      deadline, //deadline: deadline,
      important, //important: important,
      active: true,
      finishDate: null,
    }
    this.counter++
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }

  render() {
    return (
      <div className="App">
        <h1>To Do App</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
