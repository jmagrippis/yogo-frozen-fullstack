import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import VoteIncentive from 'components/MakeYourFroyo/VoteIncentive'

describe('(Component) VoteIncentive', () => {
  it('should exist with three paragraphs', () => {
    let data = {
      selectedFlavour: 'chocolate',
      selectedToppings: { count: sinon.stub().returns(0) },
      locale: 'en',
      intro: [
        'Hello.',
        'This is the second paragraph.',
        'And this the third and final one.'
      ]
    }
    let wrapper = shallow(<VoteIncentive {...data} />)
    expect(wrapper.find('p').length).to.equal(3)
  })
  // TODO: Test text for various topping lengths.
})
