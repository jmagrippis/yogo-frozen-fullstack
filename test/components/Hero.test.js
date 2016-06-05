import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import RaisedButton from 'material-ui/RaisedButton'

import Hero from 'components/Hero'

describe('(Component) Hero', () => {
  it('should exist', () => {
    let data = {
      title: 'Hello!',
      body: 'This is the body.',
      cta: 'Our Call to Action',
      target: '/link'
    }
    let wrapper = shallow(<Hero {...data} />)
    expect(wrapper.find('h1').text()).to.equal(data.title)
    expect(wrapper.find('p').text()).to.equal(data.body)
    expect(wrapper.find(RaisedButton).props().label).to.equal(data.cta)
  })
})
