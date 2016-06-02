import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import <%= pascalEntityName %> from 'components/<%= pascalEntityName %>'

describe('(Component) <%= pascalEntityName %>', () => {
  it('should exist', () => {
    let data = {
      title: 'sample'
    }
    let wrapper = shallow(<<%= pascalEntityName %> {...data} />)
    expect(wrapper.text()).to.equal(data.name)
  })
})
