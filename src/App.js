
import Contacts from 'Components/Contacts/Contacts';
import React, { Component } from 'react';
import css from "./App.module.css";

import Form from './Components/Forms/Form';
class App extends Component {
  state = {
  contacts: [],
  filter: '', 
  }

  addContact = (data) => {
    this.state.contacts()
  }
  

  render() {
    return (
     
        <div className={css.App}>
          <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
          <Contacts/>
        </div>
                     
    );
  }
}

export default App;