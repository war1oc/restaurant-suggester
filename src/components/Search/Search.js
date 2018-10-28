import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import './Search.css'

/**
 * Search component
 */
export default class Search extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    onChange: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.onChange = debounce(this.props.onChange, 500)
  }

  handleChange = (event) => {
    if (typeof this.props.onChange === 'function') {
      this.onChange(this.props.location, event.target.value.trim())
    }
  }

  render() {
    return (
      <div className="search-container">
        <input 
          className   = "search-input"
          type        = "text"
          placeholder = "What are you craving for?"
          onChange    = {this.handleChange}
        />
      </div>
    )
  }
}