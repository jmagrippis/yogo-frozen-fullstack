import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

import VotingActions from 'components/MakeYourFroyo/VotingActions'

describe('(Component) VotingActions', () => {
  it('should consist of a FlatButton and a RaisedButton', () => {
    let data = {
      activeStep: 0,
      nextStep: sinon.stub(),
      prevStep: sinon.stub(),
      labels: { back: 'back', next: 'next', vote: 'vote!' }
    }
    let wrapper = shallow(<VotingActions {...data} />)
    expect(wrapper.find(RaisedButton).length).to.equal(1)
    expect(wrapper.find(FlatButton).length).to.equal(1)
  })
  it('should set its labels properly according to the active step', () => {
    let data = {
      activeStep: 0,
      nextStep: sinon.stub(),
      prevStep: sinon.stub(),
      labels: { back: 'back', next: 'next', vote: 'vote!' }
    }
    let wrapper = shallow(<VotingActions {...data} />)
    expect(wrapper.find(RaisedButton).props().label).to.equal(data.labels.next)
    expect(wrapper.find(FlatButton).props().label).to.equal(data.labels.back)

    data.activeStep = 2
    wrapper = shallow(<VotingActions {...data} />)
    expect(wrapper.find(RaisedButton).props().label).to.equal(data.labels.vote)
    expect(wrapper.find(FlatButton).props().label).to.equal(data.labels.back)
  })
  // TODO: Check when the buttons are disabled
})
