import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Hero from 'components/Hero'

describe('(Component) Hero', () => {
  it('should exist', () => {
    let wrapper = shallow(<Hero title='We are testing!' />)
    expect(wrapper.find('h2').text()).to.equal('We are testing!')
  })
})
