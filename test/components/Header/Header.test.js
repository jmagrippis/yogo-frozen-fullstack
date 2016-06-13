import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import AppBar from 'material-ui/AppBar'

import Header from 'components/Header/Header'

describe('(Component) Header', () => {
  it('should print out the given brand name as the title of the AppBar', () => {
    let data = {
      brand: 'Test Co.',
      links: [],
      locale: 'en',
      changeLanguage: sinon.stub,
      toggleSidebar: sinon.stub,
      windowWidth: 1280
    }
    let wrapper = shallow(<Header {...data} />)
    expect(wrapper.find(AppBar).props().title.props.children).to.equal(data.brand)

    data.brand = 'More testing!!!'
    data.links = [
      { label: 'first', location: '#first' },
      { label: 'second', location: '#second' },
      { label: 'third', location: '#third' }
    ]

    wrapper = shallow(<Header {...data} />)
    expect(wrapper.find(AppBar).props().title.props.children).to.equal(data.brand)
  })
})
