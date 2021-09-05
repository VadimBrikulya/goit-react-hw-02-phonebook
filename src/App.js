import Form from 'Components/Form';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
  contacts: [],
  name: ''
}

  render() {
    return (
      <div>
        <Form/>
      </div>
    );
  }
}

export default App;