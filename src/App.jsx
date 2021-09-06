import Form from './Components/Form/Form';
import React, { Component } from 'react';
import './App.css';
import Container from './Components/Container/Container';


class App extends Component {
  state = {
  contacts: [],
  filter: '', 
  }

  formSubmitHandler = data => {
    console.log(data);
  }
  
  render() {
    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <Form onSubmit={this.formSubmitHandler} /> 
        </div>       
      </Container>

    );
  }
}

export default App;