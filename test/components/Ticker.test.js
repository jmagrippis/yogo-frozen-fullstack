import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import RaisedButton from 'material-ui/RaisedButton'

import Ticker from 'components/Ticker'

describe('(Component) Ticker', () => {
  it('should exist', () => {
    let data = {
      body: 'Latest updates',
      cta: 'join',
      login: sinon.stub()
    }
    let wrapper = shallow(<Ticker {...data} />)
    expect(wrapper.text()).to.equal(data.body + '<RaisedButton />')
  })
  it('should call the login method when the RaisedButton is clicked', () => {
    let login = sinon.spy()
    let data = {
      body: 'Latest updates',
      cta: 'join',
      login
    }

    let wrapper = shallow(<Ticker {...data} />)
    wrapper.find(RaisedButton).simulate('touchTap')
    expect(login.calledOnce).to.equal(true)
  })
})
