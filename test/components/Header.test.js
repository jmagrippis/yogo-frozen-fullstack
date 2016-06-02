import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Header from 'components/Header'

describe('(Component) Header', () => {
  it('should print out the given brand name', () => {
    let data = {
      brand: 'Test Co.',
      links: []
    }
    let wrapper = shallow(<Header {...data} />)
    expect(wrapper.text()).to.equal(data.brand)

    data = {
      brand: 'Something Else!',
      links: []
    }
    wrapper = shallow(<Header {...data} />)
    expect(wrapper.text()).to.equal(data.brand)
  })
  it('should display the given links in a list', () => {
    let data = {
      brand: 'Test Co.',
      links: [
        { label: 'first', location: '#first' },
        { label: 'second', location: '#second' },
        { label: 'third', location: '#third' }
      ]
    }
    let wrapper = shallow(<Header {...data} />)
    expect(wrapper.find('li').length).to.equal(3)
    wrapper.find('li').map((el, key) => {
      expect(el.text()).to.equal(data.links[key].label)
    })

    data = {
      brand: 'Test Co.',
      links: [
        { label: 'One more', location: '#one-more' },
        { label: '2nd time', location: '#2nd-time' },
        { label: 'Third placed', location: '/third-placed' },
        { label: 'fourth', location: '#fourth' },
        { label: 'fifth', location: '#fifth' },
      ]
    }
    wrapper = shallow(<Header {...data} />)
    expect(wrapper.find('li').length).to.equal(5)
  })
})
