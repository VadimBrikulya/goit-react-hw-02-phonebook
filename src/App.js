import React, { Component } from 'react';
import css from "./App.module.css";
import shortid from "shortid";

import Form from './Components/Forms/Form';
import ContactList from 'Components/ContactList/ContactList';
import Filter from 'Components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  findFilterValue = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  

  formSubmitHandler = (person) => {
    const contact = {
      id: shortid.generate(),
      name: person.name,
      number: person.number,
    }
    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  }
  removeContact = (name) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((pers) => pers.name !== name),
    }));
  };
  render() {
    const normalizeFilter = this.state.filter.toLowerCase();
    const filterCurrentTel = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return (
     
        <div className={css.App}>
          <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} filterContact={filterCurrentTel}
          onAdd={this.addNewContact} />
        
        <Filter filter={this.state.filter} onFilter={this.findFilterValue} />
        <ContactList
          contacts={filterCurrentTel}
          onDeleteContact={this.removeContact}
        />
      </div>
      
                     
    );
  }
}

export default App;