import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import FlatButton from 'material-ui/FlatButton'

import HeaderLinks from 'components/Header/HeaderLinks'

describe('(Component) HeaderLinks', () => {
  it('renders the change language FlatButton even without links', () => {
    let data = {
      links: [],
      locale: 'en',
      changeLanguage: sinon.stub()
    }
    let wrapper = shallow(<HeaderLinks {...data} />)
    expect(wrapper.find(FlatButton).length).to.equal(1)
  })
  it('renders the given links as FlatButtons', () => {
    let data = {
      links: [
        { label: 'first', location: '#first' },
        { label: 'second', location: '#second' },
        { label: 'third', location: '#third' }
      ],
      locale: 'en',
      changeLanguage: sinon.stub()
    }
    let wrapper = shallow(<HeaderLinks {...data} />)
    expect(wrapper.find(FlatButton).length).to.equal(4)
    wrapper.find(FlatButton).map((el, key) => {
      if (!data.links[key]) return
      expect(el.props().label).to.equal(data.links[key].label)
    })

    data.links = [
      { label: 'One more', location: '#one-more' },
      { label: '2nd time', location: '#2nd-time' },
      { label: 'Third placed', location: '/third-placed' },
      { label: 'fourth', location: '#fourth' },
      { label: 'fifth', location: '#fifth' }
    ]
    wrapper = shallow(<HeaderLinks {...data} />)
    expect(wrapper.find(FlatButton).length).to.equal(6)
    wrapper.find(FlatButton).map((el, key) => {
      if (!data.links[key]) return
      expect(el.props().label).to.equal(data.links[key].label)
    })
  })
})
