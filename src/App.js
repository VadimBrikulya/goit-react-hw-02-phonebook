import Form from './Components/Forms/Form';
import React, { Component } from 'react';
import css from "./App.module.css";



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
     
        <div className={css.App}>
          <h1>Phonebook</h1>
          <Form onSubmit={this.formSubmitHandler} /> 
        </div>             
    );
  }
}

export default App;