import Filter from 'Components/Filter/Filter';
import React, { Component } from 'react';
import css from "./App.module.css";
import shortid from 'shortid';
import Form from './Components/Forms/Form';

class App extends Component {
  state = {
  contacts: [],
  filter: '', 
  }

  addContact = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  }

  render() {
    return (
     
        <div className={css.App}>
          <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
          <h2>Contacts</h2>
        <Filter/>
        </div>
                     
    );
  }
}

export default App;