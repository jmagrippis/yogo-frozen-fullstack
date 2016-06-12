import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { OrderedMap } from 'immutable'

import SelectFlavour from 'components/MakeYourFroyo/SelectFlavour'

describe('(Component) SelectFlavour', () => {
  it('should exist', () => {
    let data = {
      flavours: OrderedMap(),
      locale: 'en',
      setFlavour: sinon.stub()
    }
    // TODO: Meaningful tests
    let wrapper = shallow(<SelectFlavour {...data} />)
    expect(wrapper && true).to.equal(true)
  })
})
