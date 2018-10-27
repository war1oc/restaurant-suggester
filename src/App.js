import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Map from './components/Map/Map'

/**
 * App component
 */
export class App extends Component {
  static propTypes = {
    ui: PropTypes.object.isRequired
  }

  static defaultProps = {
    ui: {}
  }

  render() {
    return (
      <div>
        <Map
          location  = {this.props.ui.location}
          isLoading = {this.props.ui.isLoading}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ui: state.uiStore
  }
}

export default connect(
  mapStateToProps
)(App)