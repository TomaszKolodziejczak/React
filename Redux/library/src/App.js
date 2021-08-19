import React, { Component } from 'react';
import { Provider } from 'react-redux'

import Form from './Form';
import List from './List';

import store from './store/store';

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div>
          <Form />
          <p>Book</p>
          <List />
        </div >
      </Provider>
    );

  }
}

export default App;
