import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'

import HeaderResponsiveLinks from 'components/Header/HeaderResponsiveLinks'

describe('(Component) HeaderResponsiveLinks', () => {
  it('should exist with an Icon Button', () => {
    let data = {
      links: [],
      locale: 'en',
      changeLanguage: sinon.stub(),
      toggleOpen: sinon.stub()
    }
    let wrapper = shallow(<HeaderResponsiveLinks {...data} />)
    expect(wrapper.find(IconButton).length).to.equal(1)
  })
  it('should call the toggleOpen method when the IconButton is clicked', () => {
    let toggleOpen = sinon.spy()
    let data = {
      links: [],
      locale: 'en',
      changeLanguage: sinon.stub(),
      toggleOpen
    }

    let wrapper = shallow(<HeaderResponsiveLinks {...data} />)
    wrapper.find(IconButton).simulate('touchTap')
    expect(toggleOpen.calledOnce).to.equal(true)
  })
  it('should call the changeLanguage method when the last Menu Item is clicked', () => {
    let changeLanguage = sinon.spy()
    let data = {
      links: [],
      locale: 'en',
      changeLanguage,
      toggleOpen: sinon.stub()
    }

    let wrapper = shallow(<HeaderResponsiveLinks {...data} />)
    wrapper.find(MenuItem).last().simulate('touchTap')
    expect(changeLanguage.calledOnce).to.equal(true)
  })
})
