import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchRestaurantSuggestion, searchRestaurants, selectRestaurant } from './actions/restaurantsActions'

import Map from './components/Map/Map'
import Search from './components/Search/Search'

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
    this.props.fetchRestaurantSuggestion(this.props.ui.location)
  }

  render() {
    return (
      <div>
        <Search
          location = {this.props.ui.location}
          onChange = {this.props.searchRestaurants}/>
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
    fetchRestaurantSuggestion: (location) => dispatch(fetchRestaurantSuggestion(location)),
    searchRestaurants        : (location, keyword) => dispatch(searchRestaurants(location, keyword)),
    selectRestaurant         : (restaurant) => dispatch(selectRestaurant(restaurant))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)