import React from "react";
// import PropTypes from "prop-types";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map(({id, name, number}) => (
      <li key={id}>
            {name + ":" + number}
            
        {<button
            className={css.TaskList_button}
            type="button"
            name="delete"
            onClick={() => onRemoveContact(id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

// ContactList.propTypes = {
//   onRemoveContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//   })),
// }
export default ContactList;