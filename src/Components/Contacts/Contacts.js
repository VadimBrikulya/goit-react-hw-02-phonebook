import React, { Component } from 'react';

class Contacts extends Component {
    render() {
        return (
            <div>
                <h2>Contacts</h2>
                <form>
                    <label htmlFor={this.nameInputId} >            
                    Find <br/><input
                            type="text"
    
                            />
                            
                </label>
                </form>
            </div>
        );
    }
}

export default Contacts;