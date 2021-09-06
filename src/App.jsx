// import Form from './Components/Form/Form';
import React, { Component } from 'react';
import './App.css';

import Container from './Components/Container/Container.styled';


class App extends Component {
  state = {
  contacts: [],
  filter: '',
  name: '',
  number: ''
  }
  
  handleChange = e => {
    const {name, value} = e.currentTarget
    this.setState ({[name]: value})
   };
  
  render() {
    return (
      <Container>
        <form>
          <label>            
            Name <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"                     
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
          </label>
                <label>
                    Number <input
                            type="tel"
                            name="number"
                            value={this.state.number}
                            onChange={this.handleChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                          />
                </label>
        </form>
      </Container>
    );
  }
}

export default App;