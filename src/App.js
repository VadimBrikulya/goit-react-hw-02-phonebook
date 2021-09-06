
import Contacts from 'Components/Contacts/Contacts';
import React, { Component } from 'react';
import css from "./App.module.css";

import Form from './Components/Forms/Form';
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
          <Contacts/>
        </div>
                     
    );
  }
}

export default App;