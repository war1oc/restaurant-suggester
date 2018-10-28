import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'

import { DEFAULT_ZOOM_LEVEL, API_KEY } from "../../constants/map"
import './Map.css'
import Marker from '../Marker/Marker'

/**
 * Map component
 *
 * Google map react wrapper
 */
export default class Map extends Component {
  static propTypes = {
    location          : PropTypes.object.isRequired,
    restaurants       : PropTypes.arrayOf(PropTypes.object),
    selectedRestaurant: PropTypes.object,
    selectRestaurant  : PropTypes.func,
  }

  static defaultProps = {
    isLoading  : false,
    restaurants: []
  }

  render() {
    const markers = this.props.restaurants.map(restaurant => {
      return (
        <Marker
          key        = {restaurant.id}
          lat        = {restaurant.location.lat}
          lng        = {restaurant.location.lng}
          isSelected = {restaurant.id === this.props.selectedRestaurant.id}
          onClick    = {this.props.selectRestaurant}
          restaurant = {restaurant}
        >
        </Marker>
      )
    })

    return(
      <div className='map'>
        <GoogleMapReact
          defaultCenter    = {this.props.location}
          defaultZoom      = {DEFAULT_ZOOM_LEVEL}
          bootstrapURLKeys = {{key: API_KEY}}
        >
        {markers}
        </GoogleMapReact>
      </div>
    )
  }
}