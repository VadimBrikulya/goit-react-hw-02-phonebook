import React, { Component } from 'react';
class Form extends Component {
        state = {        
        name: '',
        number: ''
    }

        handleChange = e => {
        const {name, value} = e.currentTarget
        this.setState ({[name]: value})
    };
  
        handleSbmit = e => {
        e.preventDefault();
        console.log(this.state);
    };
    render() {
        return (
            <form onSubmit = {this.handleSbmit}>
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
          
          <button type="submit">add contact</button>
        </form>
        );
    }
}

export default Form;