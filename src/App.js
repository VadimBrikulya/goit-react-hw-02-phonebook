import Form from './Components/Form/Form';
import React, { Component } from 'react';
import './App.css';



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
     
        <div>
          <h1>Phonebook</h1>
          <Form onSubmit={this.formSubmitHandler} /> 
        </div>             
    );
  }
}

export default App;