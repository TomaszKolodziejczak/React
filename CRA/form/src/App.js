
import './App.css';

import React, { Component } from 'react'

class App extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    accept: false,
    message: '',

    errors: {
      username: false,
      email: false,
      password: false,
      accept: false,
    }
  }

  messages = {
    username_incorrect: 'Name must contain at least 3 characters with no spaces',
    email_incorrect: "No '@' in email",
    password_incorrect: 'Password must contain at least 7 characters',
    accept_incorrect: "Unconfirmed"
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

    const validation = this.formValidation();
    if (validation.correct) {
      this.setState({
        username: '',
        email: '',
        password: '',
        accept: false,
        message: 'Form has been sent',

        errors: {
          username: false,
          email: false,
          password: false,
          accept: false,
        }
      })
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          password: !validation.password,
          accept: !validation.accept,
        }
      })
    }
  }

  formValidation = () => {
    let username = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false

    if (this.state.username.length > 3 && this.state.username.indexOf(' ') === -1) {
      username = true;
    }

    if (this.state.email.indexOf('@') !== -1) {
      email = true;
    }

    if (this.state.password.length > 6) {
      password = true;
    }

    if (this.state.accept) {
      accept = true;
    }

    if (username && email && password && accept) {
      correct = true;
    }

    return ({
      username,
      email,
      password,
      accept,
      correct
    })
  }

  componentDidUpdate() {
    if (this.state.message !== '') {
      setTimeout(() => this.setState({
        message: ''
      }), 3000)
    }
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
            {this.state.errors.username && <span>{this.messages.username_incorrect}</span>}
          </label>

          <label htmlFor="email">Your email:
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange} />
            {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
          </label>

          <label htmlFor="password">Your password:
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange} />
            {this.state.errors.password && <span>{this.messages.password_incorrect}</span>}
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
          {this.state.errors.accept && <span>{this.messages.accept_incorrect}</span>}
          <button>Join</button>
        </form>
        {this.state.message && <p>{this.state.message}</p>}
      </div>
    )
  }
}


export default App;
