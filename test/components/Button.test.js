import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Button from 'components/Button'

describe('(Component) Button', () => {
  it('should exist', () => {
    let wrapper = shallow(<Button />)
    expect(wrapper.find('button').length).to.equal(1)
  })
})
