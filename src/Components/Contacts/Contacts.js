import React, { Component } from 'react';
import css from "./Contacts.module.css"
import shortid from "shortid";
class Contacts extends Component {
    inputFilterId = shortid.generate();
    render() {
        return (
            <div>
                <h2>Contacts</h2>
                <form>
                    
                    <label htmlFor={this.inputFilterId}>
                        Find contacts by name
                        <input
                        className={css.input}
                        onChange={this.props.onFilter}
                        type="text"
                        value={this.props.filter}
                        id={this.inputFilterId}
                        />
                    </label>
                    
                </form>
            </div>
        );
    }
}

export default Contacts;