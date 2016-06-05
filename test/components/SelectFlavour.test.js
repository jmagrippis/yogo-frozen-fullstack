import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { OrderedMap } from 'immutable'

import SelectFlavour from 'components/SelectFlavour'

describe('(Component) SelectFlavour', () => {
  it('should exist', () => {
    let data = {
      flavours: OrderedMap()
    }
    let wrapper = shallow(<SelectFlavour {...data} />)
    expect(wrapper && true).to.equal(true)
  })
})
