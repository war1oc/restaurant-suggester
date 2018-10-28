import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Popover, { ArrowContainer } from 'react-tiny-popover'

import './Marker.css'

/**
 * Marker component for placement on map
 */
export default class Marker extends Component {
  static propTypes = {
    lat        : PropTypes.number.isRequired,
    lng        : PropTypes.number.isRequired,
    restaurant : PropTypes.object,
    isSelected : PropTypes.bool,
    isSuggested: PropTypes.bool,
    onClick    : PropTypes.func
  }

  static defaultProps = {
    restaurant : {},
    isSelected : false,
    isSuggested: false
  }

  handleRestaurantSelect = () => {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(this.props.restaurant)
    }
  }

  handleOutsideClick = () => {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick({})
    }
  }

  render() {
    return (
      <Popover
        isOpen         = {this.props.isSelected}
        position       = {'top'}
        padding        = {10}
        onClickOutside = {this.handleOutsideClick}
        content        = {({ position, targetRect, popoverRect }) => (
          <ArrowContainer
            position    = {position}
            targetRect  = {targetRect}
            popoverRect = {popoverRect}
            arrowColor  = {'white'}
            arrowSize   = {10}
          >
            <div
              className = 'popover'
              onClick   = {this.handleRestaurantSelect}
            >
              {this.props.restaurant.name}
            </div>
          </ArrowContainer>
        )}
      >
        <div
          className = 'marker'
          onClick   = {this.handleRestaurantSelect}
        >
        </div>
      </Popover>
    )
  }
}