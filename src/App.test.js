import React from 'react'
import { shallow } from 'enzyme'

import { App } from './App'

function setup() {
  const props = {
    ui: {
      location : { lat: 35.648795, lng: 139.7000483 },
      isLoading: false,
      error    : {}
    },
    fetchRestaurantSuggestion: jest.fn
  }

  const enzymeWrapper = shallow(<App {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe('<App/>', () => {
  it('renders a map component', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.exists('Map')).toEqual(true)
  });
})