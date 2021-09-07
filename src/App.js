import Filter from "Components/Filter/Filter";
import React, { Component } from 'react';
import css from "./App.module.css";
// import shortid from 'shortid';
import ContactForm from "Components/ContactForm/ContactForm"

class App extends Component {
  state = {
  contacts: [],
  filter: '', 
  }

  formOnSubmitHandler = data => {
    console.log(data);
 }

  render() {
    return (
     
      <div>
        <div className={css.App}>          
          <h1>Phonebook</h1>
          
          <ContactForm onSubmit={this.formOnSubmitHandler} />
          </div>
        <div className={css.contactBox}>
          <h2>Contacts</h2>
          <Filter />
          </div>
        </div>
                     
    );
  }
}

export default App;