
import { Component } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import css from "./Filter.module.css";

class Filter extends Component {
  inputFilterId = shortid.generate();

  render() {
    return (
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
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};

export default Filter;