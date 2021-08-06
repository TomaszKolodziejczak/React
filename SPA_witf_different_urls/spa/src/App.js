import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <nav>
              <ul><Link to="/">Start</Link></ul>
              <ul><Link to="/news">News</Link></ul>
              <ul><Link to="/contact">Contace</Link></ul>
            </nav>
          </header>
          <section>
            Hello
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
