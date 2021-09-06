import Form from './Components/Form/Form';
import React, { Component } from 'react';
import './App.css';

import Container from './Components/Container/Container.styled';


class App extends Component {
  render() {
    return (
      <Container>
        <Form/>
      </Container>
    );
  }
}

export default App;