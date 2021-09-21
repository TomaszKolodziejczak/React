
import './App.css';

import React, { Component } from 'react'

class App extends Component {

  state = {
    username: '',
    email: ''

  }

  handleChange = event => {

    const value = event.target.value;
    this.setState({
      username: value
    })
  }

  render() {
    return (
      <div className="App">
        <form>
          <label htmlFor="user">Your name:
            <input
              type="text"
              id="user"
              name="username"
              value={this.state.username}
              onChange={this.handleChange} />
          </label>

          <label htmlFor="email">Your email:
            <input
              type="email"
              id="uemailser"
              name="username"
              value={this.state.email}
              onChange={this.handleChange} />
          </label>

          <label htmlFor="user">Your name:
            <input
              type="text"
              id="user"
              name="username"
              value={this.state.username}
              onChange={this.handleChange} />
          </label>
        </form>
      </div>
    )
  }
}


export default App;
