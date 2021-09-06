import React, { Component } from 'react';
class Form extends Component {

    render() {
        return (
            <form>
                <label>
                    Name
                    <input type="tel" placeholder = "Name" />
                </label>
            </form>
        );
    }
}

export default Form;