import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


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
              <ul>
                <li><NavLink to="/" exact activeClassName="home_selected">Start</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/contact" activeStyle={{ backgroundColor: 'gray', }}>Contace</NavLink></li>
              </ul>
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
