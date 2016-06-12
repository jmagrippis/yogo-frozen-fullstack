import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { OrderedMap } from 'immutable'

import SelectToppings from 'components/MakeYourFroyo/SelectToppings'

describe('(Component) SelectToppings', () => {
  it('should exist', () => {
    let data = {
      toppings: OrderedMap(),
      locale: 'en',
      toggleTopping: sinon.stub()
    }
    // TODO: Meaningful tests
    let wrapper = shallow(<SelectToppings {...data} />)
    expect(wrapper && true).to.equal(true)
  })
})
