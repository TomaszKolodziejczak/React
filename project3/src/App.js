import React, { Component } from 'react';
import './App.css';

const data = [
  { id: 1, title: 'Message 1', body: 'MsgText 1' },
]

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Message no ${index}`,
    body: `MsgText ${index}`
  })
}, 5000)

class App extends Component {

  state = {
    comments: [...data]
  }

  getData = () => {
    if (this.state.comments.length !== data.length) {
      this.setState({
        comments: [...data],
      })
    }
  }

  componentDidMount() {
    this.idI = setInterval(this.getData, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.idI)
  }

  render() {
    const comments = this.state.comments.map(comment => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <p>{comment.body}</p>
      </div>
    ))
    return (
      <div className="App">
        {comments.reverse()}
      </div>
    );
  }
}

export default App;
