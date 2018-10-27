import React from 'react'
import { shallow } from 'enzyme'

import Map from './Map'

function setup() {
  const props = {
    location: { lat: 35.648795, lng: 139.7000483 }
  }

  const enzymeWrapper = shallow(<Map {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe('<Map/>', () => {
  it('should render a container with map class', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('div').hasClass('map'))
  })
})