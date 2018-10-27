import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'

import './Map.css'
import { ZOOM_LEVEL, API_KEY } from "../../constants/map"

/**
 * Map component
 * 
 * Google map react wrapper
 */
export default class Map extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }
  
  static defaultProps = {
    isLoading: false,
  }
  
  render() {
    return(
      <div className='map'>
        <GoogleMapReact
          defaultCenter    = {this.props.location}
          defaultZoom      = {ZOOM_LEVEL}
          bootstrapURLKeys = {{key: API_KEY}}
        >
        </GoogleMapReact>
      </div>
    )
  }
}