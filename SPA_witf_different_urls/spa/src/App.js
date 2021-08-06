import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Home = () => <h1>Home</h1>
const News = () => <h1>News</h1>
const Contact = () => <h1>Contact</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <ul><Link to="/">Start</Link></ul>
              <ul><Link to="/news">News</Link></ul>
              <ul><Link to="/contact">Contace</Link></ul>
            </nav>
          </header>
          <section>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
            <Route path="/contact" component={Contact} />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
