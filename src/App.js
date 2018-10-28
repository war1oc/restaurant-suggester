import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchRestaurants, selectRestaurant } from './actions/restaurantsActions'

import Map from './components/Map/Map'

/**
 * App component
 */
export class App extends Component {
  static propTypes = {
    ui                : PropTypes.object.isRequired,
    restaurants       : PropTypes.arrayOf(PropTypes.object),
    selectedRestaurant: PropTypes.object
  }

  static defaultProps = {
    ui                : {},
    restaurants       : [],
    selectedRestaurant: {}
  }

  componentDidMount() {
    this.props.fetchRestaurants(this.props.ui.location);
  }

  render() {
    return (
      <div>
        <Map
          location           = {this.props.ui.location}
          isLoading          = {this.props.ui.isLoading}
          restaurants        = {this.props.restaurants}
          selectedRestaurant = {this.props.selectedRestaurant}
          selectRestaurant   = {this.props.selectRestaurant}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ui                : state.uiStore,
    restaurants       : state.restaurantStore.restaurants,
    selectedRestaurant: state.restaurantStore.selectedRestaurant
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestaurants: (payload) => dispatch(fetchRestaurants(payload)),
    selectRestaurant: (payload) => dispatch(selectRestaurant(payload))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)