
import './App.css';

import React, { Component } from 'react'

class App extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    accept: false

  }

  handleChange = event => {
    const type = event.target.type;
    const name = event.target.name;
    const value = event.target.value;

    if (type === "checkbox") {
      const checked = event.target.checked;
      this.setState({
        [name]: checked
      })
    } else if (type === "text" || type === "email" || type === "password") {
      this.setState({
        [name]: value
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('enter')
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
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
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange} />
          </label>
          <label htmlFor="password">Your password:
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange} />
          </label>
          <label htmlFor="accept">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              checked={this.state.accept}
              onChange={this.handleChange}
            />
            I agree on everything
          </label>
          <button>Join</button>
        </form>
      </div>
    )
  }
}


export default App;
